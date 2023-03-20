# Automatic Git Commit Cronjob

This project sets up a cronjob using Node.js to automatically commit changes to a GitHub repository and merge them into the main branch daily. This is a test repository to test cronjob things as some challenge arise in my day by day job.

## Description

- Commits changes to the `development` branch every two hours.
- Merges the `development` branch into the `main` branch once a day at midnight and resets the commit counter.

## Installation

1. Clone the repository:
   ```sh
   git clone with SSH
   cd cronjob_test

2. Install dependencies
    ```sh
    npm install

3. Run the script
    ```sh
    node index.js

## Dependencies
- node-cron: A library for Node.js that allows you to schedule tasks (jobs) using cron syntax. It is used to schedule the commit and merge/reset jobs.
- simple-git: A library for Node.js that provides a simple interface for interacting with Git repositories. It is used to perform Git operations such as add, commit, push, checkout, fetch, and rebase.

## Note

If you perform a manual merge via GitHub, the commit counter will not be automatically reset. To reset the counter, you need to run the mergeAndResetCounter function manually in your local environment:

```
node -e 'require("./index").mergeAndResetCounter()'
```

## License

This project is licensed under the MIT License.2023-03-18T00:00:00.000Z chore: fix performance improvements
2023-03-18T00:00:00.000Z chore: force error handling
2023-03-18T00:00:00.000Z feature: refactor performance improvements
2023-03-19T00:00:00.000Z fix: force performance improvements
2023-03-19T00:00:00.000Z chore: add authentication
2023-03-19T00:00:00.000Z feature: fix documentation
2023-03-19T00:00:00.000Z fix: refactor security patches
2023-03-19T00:00:00.000Z fix: refactor error handling
2023-03-19T00:00:00.000Z chore: force dependencies
2023-03-19T00:00:00.000Z chore: force UI components
2023-03-20T00:00:00.000Z chore: force performance improvements
2023-03-20T00:00:00.000Z chore: fix dependencies
