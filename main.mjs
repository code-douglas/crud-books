import express from 'express';
import exphbs from 'express-handlebars';
import mysql from 'mysql2';
import 'dotenv/config';

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
    INSERT INTO books (title, pagesqty, bookauthor, booksin) 
    VALUES ('${title}', ${pagesqty}, '${bookauthor}', '${booksin}')
  `;

  connection.query(sqlQuery, (err) => {
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
  connection.query(sqlQuery, (err, data) => {
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

  const sqlQuery = `SELECT * FROM books WHERE id = ${id}`;

  connection.query(sqlQuery, (err, data) => {
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

  const sqlQuery = `SELECT * FROM books WHERE id = ${id}`;

  connection.query(sqlQuery, (err, data) => {
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

  const sqlQuery = `
    UPDATE books SET 
      title = '${title}', 
      pagesqty = ${pagesqty}, 
      bookauthor = '${bookauthor}', 
      booksin = '${booksin}' 
    WHERE id = ${id}
  `;

  connection.query(sqlQuery, (err) => {
    if(err) {
      console.log(err);
      return;
    }

    res.render('edit');
  });
});

app.post('/books/remove/:id', (req, res) => {
  const id = req.params.id;

  const sqlQuery = `DELETE FROM books WHERE id = ${id}`;

  connection.query(sqlQuery, (err) => {
    if(err) {
      console.log(err);
      return;
    }

    res.redirect('/books');
  });

});

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

connection.connect((err) => {
  if(err) {
    console.log(`Connection error: ${err}`);
    return;
  }

  console.log('Connected to MySQL');

  app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
  });
});
