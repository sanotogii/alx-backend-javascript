process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  process.stdout.write(`Your name is: ${name}\n`);

  if (process.stdin.isTTY) {
    process.stdin.resume();
  } else {
    process.stdout.write('This important software is now closing\n');
    process.exit();
  }
});
process.stdin.resume();

