# Bookstore API

This project is a RESTful API built with TypeScript, Node.js, and Sequelize for managing a bookstore. It allows managing authors, books, and categories.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
    - [Authors](#authors)
    - [Books](#books)
    - [Categories](#categories)
- [License](#license)

---

## Installation

1. Clone the repository:
   ```bash
   git clone git remote add origin https://github.com/akin525/bookstore-api.git

Navigate to the project directory:
bash
Copy code
cd bookstore-api
Install dependencies:
bash
Copy code
npm install
Configuration
Create a .env file in the root directory and add the following environment variables:

env
Copy code
DB_HOST=your-database-host
DB_USER=your-database-user
DB_PASSWORD=your-database-password
DB_NAME=your-database-name
DB_DIALECT=mysql
PORT=5000

Configure the database connection in src/utils/db.config.ts.

Usage
Start the server:

bash
Copy code
npm start
The server will run on the specified port (default: http://localhost:5000).

Test the API using tools like Postman, Insomnia, or cURL.

API Endpoints
Authors
Method	Endpoint	Description
GET	/api/authors	Fetch all authors
GET	/api/authors/:id	Fetch a single author
POST	/api/authors	Add a new author
PUT	/api/authors/:id	Update an author's info
DELETE	/api/authors/:id	Delete an author
Books
Method	Endpoint	Description
GET	/api/books	Fetch all books
GET	/api/books/:id	Fetch a single book
POST	/api/books	Add a new book
PUT	/api/books/:id	Update a book's info
DELETE	/api/books/:id	Delete a book
Categories
Method	Endpoint	Description
GET	/api/categories	Fetch all categories
GET	/api/categories/:id	Fetch a single category
POST	/api/categories	Add a new category
PUT	/api/categories/:id	Update a category
DELETE	/api/categories/:id	Delete a category
License
This project is licensed under the MIT License. See the LICENSE file for details.

t me know if you need further adjustments!