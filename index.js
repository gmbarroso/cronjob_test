const cron = require('node-cron');
const simpleGit = require('simple-git');
const fs = require('fs');
const git = simpleGit();

async function doCommit() {
  try {
    const data = fs.readFileSync('contador.json');
    const contador = JSON.parse(data);
    contador.count += 1;

    fs.writeFileSync('contador.json', JSON.stringify(contador));

    await git.add('./*');
    await git.commit(`Automatic commit #${contador.count}`);
    await git.push('origin', 'development');
    console.log(`Commit #${contador.count} done successfully!`);
  } catch (err) {
    console.error('Error making commit:', err);
  }
}

async function mergeAndResetCounter() {
  try {
    await git.checkout('main');
    await git.mergeFromTo('development', 'main');
    console.log('Merged development into main.');

    const contador = { count: 0 };
    fs.writeFileSync('contador.json', JSON.stringify(contador));
    console.log('Counter reset.');

    await git.add('contador.json');
    await git.commit('Reset counter after merge');
    await git.push('origin', 'main');
    console.log('Counter reset commit pushed to main.');
  } catch (err) {
    console.error('Error during merge and reset:', err);
  }
}

cron.schedule('* * * * * *', () => {
  console.log('Running cronjob...');
  doCommit();
});

cron.schedule('0 0 * * *', () => {
  console.log('Running merge and reset job...');
  mergeAndResetCounter();
});

console.log('Cronjob scheduled.');