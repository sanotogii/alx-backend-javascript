# 0x05. NodeJS Basics

## Description
This project is focused on learning the basics of Node.js, Express.js, and ES6. By the end of this project, you will have developed small HTTP servers using Node.js and Express.js, managed input/output through command-line interfaces, and integrated ES6 features into your Node.js applications. Additionally, you'll gain hands-on experience with file reading (synchronously and asynchronously), working with the Process API, and using Nodemon for faster development.

## Learning Objectives
By completing this project, you should be able to:
- Run JavaScript using Node.js.
- Use Node.js modules.
- Read files using Node.js.
- Access command-line arguments and environment variables using the Process API.
- Create a simple HTTP server using Node.js.
- Create an HTTP server with Express.js.
- Use advanced routing with Express.js.
- Use ES6 with Node.js through Babel-node.
- Develop faster using Nodemon.

## Project Requirements
- **Editors:** `vi`, `vim`, `emacs`, `Visual Studio Code`.
- **Operating System:** Ubuntu 18.04 LTS.
- **Node.js Version:** 12.x.x.
- **Files:** All files must have the `.js` extension and end with a new line.
- **Testing:** Your code will be tested using Jest (`npm run test`).
- **Linting:** Your code must pass ESLint checks (`npm run full-test`).
- **Exporting:** All functions/classes must be exported using `module.exports`.



## Provided Files
### `database.csv`
A CSV file containing student data:
```csv
firstname,lastname,age,field
Johann,Kerbrou,30,CS
Guillaume,Salou,30,SWE
...
```

### `package.json`
Contains project configuration and dependencies.

### `babel.config.js`
Configuration for Babel, enabling the use of ES6 in Node.js.

### `.eslintrc.js`
ESLint configuration to enforce coding standards.

## Tasks Overview
### 0. **Executing basic JavaScript with Node.js**
   - File: `0-console.js`
   - Implement a function `displayMessage` that prints a string to STDOUT.
   ```bash
   node 0-main.js
   ```

### 1. **Using Process stdin**
   - File: `1-stdin.js`
   - Create a command-line program that prompts for the user's name and displays it.

### 2. **Reading a file synchronously**
   - File: `2-read_file.js`
   - Implement `countStudents` that reads a CSV file synchronously and logs the student count by field.

### 3. **Reading a file asynchronously**
   - File: `3-read_file_async.js`
   - Refactor `countStudents` to work asynchronously and return a Promise.

### 4. **Create a small HTTP server using Node.js**
   - File: `4-http.js`
   - Create an HTTP server that responds with "Hello Holberton School!" for any endpoint.

### 5. **More complex HTTP server with Node.js**
   - File: `5-http.js`
   - Create an HTTP server with routes `/` and `/students`, displaying student information from the CSV file.

### 6. **Create a small HTTP server using Express**
   - File: `6-http_express.js`
   - Create an HTTP server using Express that responds with "Hello Holberton School!".

### 7. **More complex HTTP server with Express**
   - File: `7-http_express.js`
   - Implement an HTTP server with Express that serves student data from the CSV file.

### 8. **Organize a complex server with Express**
   - Directory: `full_server`
   - Organize the server into controllers and routes. Implement advanced functionality like reading from a database asynchronously.

## Development Tips
- Use `nodemon` for faster development:
  ```bash
  nodemon your_file.js
  ```
- Use Babel to run ES6 in Node.js:
  ```bash
  babel-node your_file.js
  ```




---

**GitHub Repository:** [alx-backend-javascript](https://github.com/sanotogii/alx-backend-javascript)