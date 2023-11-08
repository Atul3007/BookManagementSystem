Book API
Welcome to the Book API, a simple Node.js application for managing books. This API provides various endpoints for interacting with book data. Whether you want to list all books, create a new book, update an existing one, or delete a book, this API has got you covered.

API Endpoints
GET /all-books: Retrieve a list of all books.
POST /create-book: Create a new book.
GET /book-id/:id: Get a book by its ID.
PUT /update-book/:id: Update a book by its ID.
DELETE /delete/:id: Delete a book by its ID.
Prerequisites
Before you can get started, make sure you have the following prerequisites installed on your system:

Node.js: You'll need Node.js to run this application.
Installation
To set up the application locally, follow these steps:

Clone this repository to your local machine:

bash
Copy code
git clone https://github.com/your-username/book-api.git
Navigate to the project directory:

bash
Copy code
cd book-api
Install the project dependencies:

bash
Copy code
npm install
Running the Application
Now you're ready to run the application locally:

Start the application:

bash
Copy code
npm start
The API will be available at http://localhost:8000.

You can use an API testing tool or a web browser to interact with the API using the provided endpoints.

API Usage
Here's how you can use the API endpoints:

GET /all-books: Retrieve a list of all books in the database.

POST /create-book: Create a new book by sending a POST request with the book data in the request body.

GET /book-id/:id: Get a specific book by its ID by making a GET request with the book ID as a parameter.

PUT /update-book/:id: Update a book by its ID by sending a PUT request with the updated book data in the request body.

DELETE /delete/:id: Delete a book by its ID by making a DELETE request with the book ID as a parameter.