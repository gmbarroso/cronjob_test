const simpleGit = require('simple-git');
const fs = require('fs');
const git = simpleGit();

async function mergeAndResetCounter() {
  try {
    await git.checkout('main');
    await git.fetch();

    await git.stash();

    await git.rebase(['origin/main']);

    await git.merge(['development']);

    const date = new Date().toISOString().split('T')[0];
    await git.commit(`Merged development into main on ${date}`);

    console.log('Merged development into main.');

    fs.writeFileSync('counter.json', JSON.stringify({ count: 0 }));
    await git.add('counter.json');
    await git.commit('Reset counter after merge');
    await git.push('origin', 'main');
    console.log('Counter reset commit pushed to main.');

    await git.stash(['pop']);
  } catch (err) {
    console.error('Error during merge and reset:', err);
  }
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
    'configuration files', 'deployment scripts', 'security patches', 'code cleanup', 'dependencies',
    'API endpoints', 'user authentication', 'data validation', 'error logging', 'session management',
    'input sanitization', 'output formatting', 'code optimization', 'memory management', 'threading issues'
  ];

  const type = getRandomElement(types);
  const verb = getRandomElement(verbs);
  const subject = getRandomElement(subjects);

  return `${type}: ${verb} ${subject}`;
}

async function generatePastCommits() {
  const startDate = new Date('2023-03-01');
  const endDate = new Date('2023-04-01');
  let currentDate = new Date(startDate);

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

  await git.push('origin', 'main');
  console.log('Past commits pushed to main.');
}

// Schedule the merge and reset job to run once a day at midnight
const cron = require('node-cron');
cron.schedule('* * * * * *', () => {
  console.log('Running merge and reset job...');
  mergeAndResetCounter();
});

console.log('Cronjob scheduled.');

// Export the functions for manual execution
module.exports = {
  mergeAndResetCounter,
  generatePastCommits
};