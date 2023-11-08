# BookManagementSystem

Welcome to the BookManagementSystem, a powerful Node.js application for managing books. This API provides various endpoints for interacting with book data. Whether you want to list all books, create a new book, update an existing one, or delete a book, this API has got you covered.

## API Endpoints

- **GET /all-books**: Retrieve a list of all books.
- **POST /create-book**: Create a new book.
- **GET /book-id/:id**: Get a book by its ID.
- **PUT /update-book/:id**: Update a book by its ID.
- **DELETE /delete/:id**: Delete a book by its ID.

## Prerequisites

Before you can get started, make sure you have the following prerequisites installed on your system:

- [Node.js](https://nodejs.org/): You'll need Node.js to run this application.

## Installation

To set up the application locally, follow these steps:

1. **Clone this repository** to your local machine

2. **Navigate to the project directory**:
   cd book-api
   
3.**Install the project dependencies:**
   npm install

   

## 📋 API Usage
### Here's how you can utilize the API endpoints:

GET /all-books: Retrieve a list of all the books in your digital library.

POST /create-book: Add a new book to your collection by sending a POST request with the book's details in the request body.

GET /book-id/:id: Find a specific book in your library by providing its unique ID as a parameter.

PUT /update-book/:id: Enhance a book's details by sending a PUT request with the updated information in the request body.

DELETE /delete/:id: Remove a book from your library gracefully by making a DELETE request with the book's ID as a parameter.
