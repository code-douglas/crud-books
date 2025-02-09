import express from 'express';
import exphbs from 'express-handlebars';
import pool from './db/connection.mjs';

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('home');
});

// Insert data in database
app.post('/books/insertbook', (req, res) => {
  const { title, pagesqty, bookauthor, booksin } = req.body;

  const sqlQuery = `
    INSERT INTO books (??, ??, ??, ??) 
    VALUES (?, ?, ?, ?)
  `;
  const data = ['title', 'pagesqty', 'bookauthor', 'booksin', title, pagesqty, bookauthor, booksin];

  pool.query(sqlQuery, data, (err) => {
    if(err) {
      console.log(err);
      return;
    }

    res.render('sucesso');
    console.log('Dados inseridos com sucesso.');
  });
});
// Select/Rescue data in database
app.get('/books', (req, res) => {
  const sqlQuery = 'SELECT * FROM books';
  pool.query(sqlQuery, (err, data) => {
    if(err) {
      console.log(err);
      return;
    }
    const books = data;
    res.render('books', { books });
  });
});
// Show one book
app.get('/book/:id', (req, res) => {
  const id = req.params.id;

  const sqlQuery = 'SELECT * FROM books WHERE ?? = ?';

  const data = ['id', id];

  pool.query(sqlQuery, data,(err, data) => {
    if(err) {
      console.log(err);
      return;
    }

    const book = data[0];
    res.render('book', { book });
  });
});
// Select data from edit
app.get('/books/edit/:id', (req, res) => {
  const id = req.params.id;

  const sqlQuery = 'SELECT * FROM books WHERE ?? = ?';

  const data = ['id', id];


  pool.query(sqlQuery, data, (err, data) => {
    if(err) {
      console.log(err);
      return;
    }

    const book = data[0];
    res.render('editbook', { book });
  });


});
// Edit book
app.post('/books/updatedbook', (req, res) => {
  const { id, title, pagesqty, bookauthor, booksin } = req.body;

  const data = ['id', id, 'title', title, 'pagesqty', pagesqty, 'bookauthor', bookauthor, 'booksin', booksin];

  const sqlQuery = `
    UPDATE books SET 
      ?? = ?, 
      ?? = ?, 
      ?? = ?, 
      ?? = ? 
    WHERE ?? = ?
  `;

  pool.query(sqlQuery, data, (err) => {
    if(err) {
      console.log(err);
      return;
    }

    res.render('edit');
  });
});

app.post('/books/remove/:id', (req, res) => {
  const id = req.params.id;

  const sqlQuery = 'DELETE FROM books WHERE ?? = ?';

  const data = ['id', id];

  pool.query(sqlQuery, data, (err) => {
    if(err) {
      console.log(err);
      return;
    }

    res.render('delete');
  });

});

app.listen(3000, () => {
  console.log('http://localhost:3000');
});
