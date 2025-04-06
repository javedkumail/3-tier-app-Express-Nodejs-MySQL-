# TechInnovate - Innovation Platform

TechInnovate is a 3-tier web application built with **Express.js**, **Node.js**, and **MySQL**. It allows users to submit innovative ideas through a web interface, stores the submissions in a database, and provides an API for managing the data.

## Features

- **Submit Ideas**: Users can submit their innovation ideas through a user-friendly form.
- **Database Integration**: Submissions are stored securely in a MySQL database.
- **API Endpoints**: Provides metadata about the API and handles form submissions.
- **Responsive Design**: The web interface is mobile-friendly and visually appealing.

## Project Structure
.env # Environment variables db.js # Database connection setup server.js # Express server and API routes public/ index.html # Frontend HTML file


## Prerequisites

- **Node.js** (v14 or higher)
- **MySQL** (v8 or higher)
- **npm** (Node Package Manager)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/techinnovate.git
   cd techinnovate

2. Install dependencies:
   npm install

3. Set up the .env file: Create a .env file in the root directory and configure the following variables:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=appdb
PORT=8080

4. Set up the MySQL database:

Create a database named appdb.
Create a users table:

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  idea TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


## Usage
1. Start the server:

npm start


2. Open the application in your browser:
http://localhost:8080

3. Submit an idea using the form on the homepage.

API Endpoints:

POST /submit: Submit an idea.
GET /api: Get API metadata.


### Screenshots

![image](https://github.com/user-attachments/assets/052caf69-9993-4009-b2ee-908b30ac5816)



![Screenshot from 2025-04-06 05-51-52](https://github.com/user-attachments/assets/fdd05716-3aaa-42e6-a8c0-c4e2a2b304dd)

## Form Submission
![image](https://github.com/user-attachments/assets/6b2c9115-8dc2-4b55-91ae-8c27dd04a1ea)


![image](https://github.com/user-attachments/assets/5a237e9f-357d-45c4-b2d1-d2f389b2b8ba)
