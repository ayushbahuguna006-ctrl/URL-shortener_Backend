<h1>About</h1>
This is a backend-only URL Shortener built using Node.js and Express.
It takes a long URL, generates a short unique URL, and redirects users to the original URL when the short link is accessed.

<h1>Features</h1>

Create short URLs from long URLs

Redirect short URLs to the original link

REST API based backend

Simple and clean implementation

<h1>Tech Stack</h1>

Node.js

Express.js

MongoDB 

<h1>API Endpoints</h1>


POST /url

Request body:

{
  "longUrl": "https://example.com"
}


Response:

{
  "shortUrl": "http://localhost:8000/abc123"
}

Redirect to Original URL

GET /:shortId

Redirects the user to the original long URL.

<h1>How to Run</h1>

Clone the repository

Install dependencies

npm install


Start the server

npm start


Server runs on http://localhost:8000

<h1>Purpose</h1>

This project is created to practice backend development such as:

Express routing

API design

Request & response handling

URL redirection