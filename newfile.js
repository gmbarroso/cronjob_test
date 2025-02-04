const simpleGit = require('simple-git');
const fs = require('fs');
const git = simpleGit();

const startDate = new Date('2023-03-18');
const endDate = new Date('2023-04-18');

let currentDate = new Date(startDate);

function formatDate(date) {
  return date.toISOString().split('T')[0];
}

function formatISODate(date) {
  return date.toISOString();
}

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateCommitMessage() {
  const types = ['feature', 'fix', 'chore'];
  const verbs = ['add', 'update', 'force', 'fix', 'refactor'];
  const subjects = [
    'REST api calls', 'authentication', 'database schema', 'UI components', 'error handling',
    'unit tests', 'integration tests', 'performance improvements', 'documentation', 'logging',
    'configuration files', 'deployment scripts', 'security patches', 'code cleanup', 'dependencies'
  ];

  const type = getRandomElement(types);
  const verb = getRandomElement(verbs);
  const subject = getRandomElement(subjects);

  return `${type}: ${verb} ${subject}`;
}

async function createCommits() {
  while (currentDate <= endDate) {
    const isoDate = formatISODate(currentDate);
    const randomCommits = Math.floor(Math.random() * 10) + 1;

    for (let i = 1; i <= randomCommits; i++) {
      const commitMessage = generateCommitMessage();
      fs.appendFileSync('README.md', `${isoDate} ${commitMessage}\n`);
      await git.add('./*');
      await git.commit(commitMessage, { '--date': isoDate });
      await new Promise(resolve => setTimeout(resolve, 1000)); // Sleep for 1 second
    }

    currentDate.setDate(currentDate.getDate() + 1);
  }
}

createCommits().then(() => {
  console.log('All commits created successfully!');
}).catch(err => {
  console.error('Error creating commits:', err);
});