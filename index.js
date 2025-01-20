const cron = require('node-cron');
const simpleGit = require('simple-git');
const fs = require('fs');
const git = simpleGit();

async function doCommit() {
  try {
    const data = fs.readFileSync('counter.json');
    const commitCounter = JSON.parse(data);
    commitCounter.count += 1;

    fs.writeFileSync('counter.json', JSON.stringify(commitCounter));

    const date = new Date().toISOString().split('T')[0];
    await git.add('./*');
    await git.commit(`Automatic commit #${commitCounter.count} on ${date}`);
    await git.push('origin', 'development');
    console.log(`Commit #${commitCounter.count} on ${date} done successfully!`);
  } catch (err) {
    console.error('Error making commit:', err);
  }
}

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

cron.schedule('0 */2 * * *', () => {
  console.log('Running cronjob...');
  doCommit();
});

cron.schedule('0 0 * * *', () => {
  console.log('Running merge and reset job...');
  mergeAndResetCounter();
});

console.log('Cronjob scheduled.');

module.exports = {
  doCommit,
  mergeAndResetCounter
};