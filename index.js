const cron = require('node-cron');
const simpleGit = require('simple-git');
const git = simpleGit();

async function fazerCommit() {
  try {
    await git.add('./*');
    await git.commit('Commit automático');
    await git.push('origin', 'main');
    console.log('Commit feito com sucesso!');
  } catch (err) {
    console.error('Erro ao fazer commit:', err);
  }
}

// Agendar o cronjob para rodar a cada minuto (ajuste conforme necessário)
cron.schedule('* * * * *', () => {
  console.log('Executando cronjob...');
  fazerCommit();
});

console.log('Cronjob agendado.');