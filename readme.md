Book API
This is a simple Node.js application that provides an API for managing books. It includes the following API endpoints running on localhost:8000:

GET /all-books: Get a list of all books.
POST /create-book: Create a new book.
GET /book-id/:id: Get a book by its ID.
PUT /update-book/:id: Update a book by its ID.
DELETE /delete/:id: Delete a book by its ID.
Prerequisites
Before running the application, make sure you have the following installed on your system:

Node.js: You can download it from nodejs.org.
Installation
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
Start the application locally:

bash
Copy code
npm start
The API will be accessible at http://localhost:8000.

You can now use an API testing tool or a web browser to interact with the API using the provided endpoints.

API Usage
GET /all-books: Retrieve a list of all books in the database.

POST /create-book: Create a new book by sending a POST request with the book data in the request body.

GET /book-id/:id: Get a specific book by its ID by making a GET request with the book ID as a parameter.

PUT /update-book/:id: Update a book by its ID by sending a PUT request with the updated book data in the request body.

DELETE /delete/:id: Delete a book by its ID by making a DELETE request with the book ID as a parameter.