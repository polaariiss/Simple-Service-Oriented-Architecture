# Simple-Service-Oriented-Architecture

A simple REST API service for managing student data (Mahasiswa) built with Node.js and Express. This project demonstrates basic service-based architecture concepts.

## Features

- Get all students
- Add a new student
- Update student information
- Delete a student
- Data persistence using JSON file

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/pertemuan2-service.git
   cd pertemuan2-service
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

Start the server:
```bash
node server.js
```

The server will run on `http://localhost:2999`.

## API Endpoints

### Get All Students
- **GET** `/mahasiswa`
- Returns a list of all students.

### Add a New Student
- **POST** `/mahasiswa`
- Body: `{ "nama": "Student Name", "prodi": "Program Studi" }`
- Creates a new student with auto-generated ID.

### Update a Student
- **PUT** `/mahasiswa/:id`
- Body: `{ "nama": "Updated Name", "prodi": "Updated Program" }`
- Updates the student with the specified ID.

### Delete a Student
- **DELETE** `/mahasiswa/:id`
- Deletes the student with the specified ID.

## Technologies Used

- Node.js
- Express.js
- body-parser

## License

ISC
