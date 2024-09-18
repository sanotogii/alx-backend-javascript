const fs = require('fs').promises;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8')
      .then((data) => {
        const lines = data.split('\n').filter((line) => line.trim() !== '');
        const students = lines.slice(1);

        console.log(`Number of students: ${students.length}`);

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
            console.log(`Number of students in ${field}: ${fieldCounts[field]}. List: ${fieldStudents[field].join(', ')}`);
          }
        }

        resolve();
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

module.exports = countStudents;
