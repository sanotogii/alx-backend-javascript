import fs from 'fs';
import { promisify } from 'util';

const readFile = promisify(fs.readFile);

const readDatabase = async (filePath) => {
  try {
    const data = await readFile(filePath, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const students = lines.slice(1);

    const fieldStudents = {};

    students.forEach((student) => {
      const [firstName, , , field] = student.split(',');
      if (!fieldStudents[field]) {
        fieldStudents[field] = [];
      }
      fieldStudents[field].push(firstName);
    });

    return fieldStudents;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

export default readDatabase;
