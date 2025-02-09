# Projeto de Cadastro de Livros

## Descrição
Este é um projeto de gerenciamento de livros onde é possível cadastrar, editar, listar e deletar livros. 
Cada livro cadastrado possui os seguintes campos:
- **Nome do Livro**
- **Nome do Autor**
- **Quantidade de Páginas**
- **Resumo**

## Tecnologias Utilizadas
- **Express** - Framework para Node.js
- **MySQL2** - Cliente para MySQL
- **dotenv** - Gerenciamento de variáveis de ambiente
- **Handlebars** - Template engine para renderização de páginas
- **Nodemon** - Monitoramento de alterações no código
- **ESLint** - Linter para manter padrões de código

## Instalação
1. Clone este repositório:
   ```sh
   git clone git@github.com:code-douglas/crud-books.git
   ```
2. Acesse a pasta do projeto:
   ```sh
   cd crud-books
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```

## Configuração do dotenv
Crie um arquivo `.env` na raiz do projeto e adicione as credenciais do banco de dados:
```env
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=seu_banco
```

## Execução do Projeto
Para iniciar o projeto, utilize:
```sh
npm run start
```

## Funcionalidades
- **Cadastrar um livro**
- **Editar um livro**
- **Listar informações de um livro específico**
- **Listar todos os livros**
- **Deletar um livro**

## Páginas do Projeto
- **Página de Cadastro**: Formulário para adicionar um novo livro.
- **Página de Edição**: Formulário para modificar informações de um livro existente.
- **Página de Informações do Livro**: Exibe detalhes completos de um livro.
- **Sucesso ao Criar um Livro**: Mensagem de confirmação após o cadastro bem-sucedido.
- **Sucesso ao Editar um Livro**: Mensagem de confirmação após a edição bem-sucedida.

## Prints do Projeto

![Print 5](/public/ignore/Captura%20de%20tela%20de%202025-02-09%2013-15-47.png)
![Print 6](/public/ignore/Captura%20de%20tela%20de%202025-02-09%2013-16-25.png)
![Print 7](/public/ignore/Captura%20de%20tela%20de%202025-02-09%2013-16-40.png)
![Print 8](/public/ignore/Captura%20de%20tela%20de%202025-02-09%2013-16-45.png)
![Print 9](/public/ignore/Captura%20de%20tela%20de%202025-02-09%2013-16-50.png)
![Print 10](/public/ignore/Captura%20de%20tela%20de%202025-02-09%2013-17-00.png)
![Print 11](/public/ignore/Captura%20de%20tela%20de%202025-02-09%2013-17-13.png)
![Print 12](/public/ignore/2.png)
![Print 12](/public/ignore/Captura%20de%20tela%20de%202025-02-09%2013-17-18.png)