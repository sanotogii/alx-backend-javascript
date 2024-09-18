const express = require('express');
const { readFile } = require('fs').promises;

const app = express();
const port = 1245;

async function countStudents(path) {
  try {
    const data = await readFile(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const students = lines.slice(1);

    let output = `Number of students: ${students.length}\n`;

    const fieldCounts = {};
    const fieldStudents = {};

    students.forEach((student) => {
      const [firstName, , , field] = student.split(',');
      if (!fieldCounts[field]) {
        fieldCounts[field] = 0;
        fieldStudents[field] = [];
      }
      fieldCounts[field] += 1;
      fieldStudents[field].push(firstName);
    });

    for (const field in fieldCounts) {
      if (Object.prototype.hasOwnProperty.call(fieldCounts, field)) {
        output += `Number of students in ${field}: ${fieldCounts[field]}. List: ${fieldStudents[field].join(', ')}\n`;
      }
    }

    return output;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const databasePath = process.argv[2];
    const studentsData = await countStudents(databasePath);
    res.send(`This is the list of our students\n${studentsData}`);
  } catch (error) {
    res.send(`This is the list of our students\n${error.message}`);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

module.exports = app;
