const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split the data into lines and filter out empty lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Remove the header line
    const students = lines.slice(1);

    console.log(`Number of students: ${students.length}`);

    // Create an object to store students by field
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

    // Log the number of students in each field
    for (const field in fieldCounts) {
      if (Object.prototype.hasOwnProperty.call(fieldCounts, field)) {
        console.log(`Number of students in ${field}: ${fieldCounts[field]}. List: ${fieldStudents[field].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
