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
2023-03-20T00:00:00.000Z fix: update unit tests
2023-03-20T00:00:00.000Z fix: update security patches
2023-03-21T00:00:00.000Z fix: add unit tests
2023-03-21T00:00:00.000Z chore: update UI components
2023-03-21T00:00:00.000Z fix: force database schema
2023-03-21T00:00:00.000Z fix: refactor logging
2023-03-21T00:00:00.000Z chore: refactor logging
2023-03-21T00:00:00.000Z feature: force UI components
2023-03-21T00:00:00.000Z chore: update database schema
2023-03-21T00:00:00.000Z chore: fix dependencies
2023-03-22T00:00:00.000Z feature: force authentication
2023-03-22T00:00:00.000Z feature: force REST api calls
2023-03-22T00:00:00.000Z fix: fix configuration files
2023-03-22T00:00:00.000Z chore: add performance improvements
2023-03-22T00:00:00.000Z chore: fix database schema
2023-03-22T00:00:00.000Z chore: refactor UI components
2023-03-22T00:00:00.000Z feature: force dependencies
2023-03-22T00:00:00.000Z feature: refactor UI components
2023-03-22T00:00:00.000Z fix: fix logging
2023-03-23T00:00:00.000Z chore: update dependencies
2023-03-23T00:00:00.000Z chore: refactor authentication
2023-03-23T00:00:00.000Z fix: force configuration files
2023-03-23T00:00:00.000Z feature: update code cleanup
2023-03-23T00:00:00.000Z chore: refactor logging
2023-03-23T00:00:00.000Z fix: update security patches
2023-03-23T00:00:00.000Z feature: add integration tests
2023-03-23T00:00:00.000Z fix: refactor unit tests
2023-03-24T00:00:00.000Z feature: add documentation
2023-03-24T00:00:00.000Z fix: force REST api calls
2023-03-24T00:00:00.000Z fix: add unit tests
2023-03-25T00:00:00.000Z feature: update integration tests
2023-03-25T00:00:00.000Z chore: add security patches
2023-03-25T00:00:00.000Z fix: fix deployment scripts
2023-03-26T00:00:00.000Z fix: force deployment scripts
2023-03-26T00:00:00.000Z feature: fix dependencies
2023-03-26T00:00:00.000Z chore: fix performance improvements
2023-03-27T00:00:00.000Z chore: force deployment scripts
2023-03-27T00:00:00.000Z feature: refactor unit tests
2023-03-27T00:00:00.000Z fix: fix UI components
2023-03-27T00:00:00.000Z feature: fix deployment scripts
2023-03-27T00:00:00.000Z fix: force authentication
2023-03-27T00:00:00.000Z feature: force security patches
2023-03-27T00:00:00.000Z feature: add dependencies
2023-03-27T00:00:00.000Z chore: force security patches
2023-03-28T00:00:00.000Z chore: update logging
2023-03-28T00:00:00.000Z feature: add database schema
2023-03-28T00:00:00.000Z fix: fix performance improvements
2023-03-28T00:00:00.000Z fix: fix performance improvements
2023-03-28T00:00:00.000Z chore: update UI components
2023-03-28T00:00:00.000Z chore: force deployment scripts
2023-03-28T00:00:00.000Z chore: force error handling
2023-03-29T00:00:00.000Z fix: fix error handling
2023-03-29T00:00:00.000Z feature: update configuration files
2023-03-29T00:00:00.000Z feature: add dependencies
2023-03-29T00:00:00.000Z fix: add performance improvements
2023-03-29T00:00:00.000Z fix: update database schema
2023-03-29T00:00:00.000Z chore: refactor documentation
2023-03-29T00:00:00.000Z feature: add deployment scripts
2023-03-30T00:00:00.000Z fix: fix performance improvements
2023-03-30T00:00:00.000Z feature: refactor REST api calls
2023-03-30T00:00:00.000Z chore: update unit tests
2023-03-30T00:00:00.000Z feature: add REST api calls
2023-03-30T00:00:00.000Z feature: fix authentication
2023-03-30T00:00:00.000Z chore: update dependencies
2023-03-30T00:00:00.000Z chore: update performance improvements
2023-03-30T00:00:00.000Z chore: add database schema
2023-03-31T00:00:00.000Z chore: update dependencies
2023-04-01T00:00:00.000Z fix: add authentication
2023-04-01T00:00:00.000Z feature: update database schema
2023-04-01T00:00:00.000Z chore: refactor unit tests
2023-04-01T00:00:00.000Z fix: update performance improvements
2023-04-01T00:00:00.000Z chore: add REST api calls
2023-04-02T00:00:00.000Z fix: fix database schema
2023-04-02T00:00:00.000Z feature: refactor REST api calls
2023-04-02T00:00:00.000Z feature: add dependencies
2023-04-02T00:00:00.000Z fix: refactor deployment scripts
2023-04-02T00:00:00.000Z fix: refactor dependencies
2023-04-02T00:00:00.000Z chore: fix UI components
2023-04-02T00:00:00.000Z feature: update REST api calls
2023-04-02T00:00:00.000Z chore: update unit tests
2023-04-03T00:00:00.000Z fix: force UI components
2023-04-03T00:00:00.000Z feature: force security patches
2023-04-03T00:00:00.000Z chore: force configuration files
2023-04-03T00:00:00.000Z feature: add database schema
2023-04-03T00:00:00.000Z fix: update database schema
2023-04-04T00:00:00.000Z feature: update authentication
2023-04-04T00:00:00.000Z feature: add configuration files
2023-04-05T00:00:00.000Z feature: update configuration files
2023-04-05T00:00:00.000Z chore: add unit tests
2023-04-05T00:00:00.000Z chore: fix documentation
2023-04-05T00:00:00.000Z fix: fix code cleanup
2023-04-05T00:00:00.000Z feature: fix configuration files
2023-04-05T00:00:00.000Z chore: update unit tests
2023-04-06T00:00:00.000Z feature: force REST api calls
2023-04-06T00:00:00.000Z chore: refactor REST api calls
2023-04-06T00:00:00.000Z fix: force unit tests
2023-04-06T00:00:00.000Z fix: fix logging
2023-04-06T00:00:00.000Z chore: force unit tests
2023-04-06T00:00:00.000Z feature: add error handling
2023-04-06T00:00:00.000Z feature: add error handling
2023-04-06T00:00:00.000Z chore: update error handling
2023-04-07T00:00:00.000Z feature: update error handling
2023-04-08T00:00:00.000Z fix: add database schema
2023-04-08T00:00:00.000Z feature: refactor performance improvements
2023-04-08T00:00:00.000Z feature: update code cleanup
2023-04-08T00:00:00.000Z feature: add deployment scripts
2023-04-08T00:00:00.000Z fix: refactor logging
2023-04-08T00:00:00.000Z chore: add deployment scripts
2023-04-08T00:00:00.000Z chore: refactor performance improvements
2023-04-08T00:00:00.000Z fix: refactor authentication
2023-04-09T00:00:00.000Z feature: update database schema
2023-04-09T00:00:00.000Z fix: add error handling
2023-04-09T00:00:00.000Z fix: fix configuration files
2023-04-09T00:00:00.000Z chore: add integration tests
2023-04-09T00:00:00.000Z fix: refactor REST api calls
2023-04-09T00:00:00.000Z fix: force database schema
2023-04-09T00:00:00.000Z fix: update UI components
2023-04-09T00:00:00.000Z chore: refactor code cleanup
2023-04-09T00:00:00.000Z chore: force REST api calls
2023-04-10T00:00:00.000Z chore: add unit tests
2023-04-10T00:00:00.000Z fix: add deployment scripts
2023-04-10T00:00:00.000Z fix: add REST api calls
2023-04-10T00:00:00.000Z fix: add REST api calls
2023-04-10T00:00:00.000Z fix: add integration tests
2023-04-10T00:00:00.000Z fix: add security patches
2023-04-10T00:00:00.000Z chore: update integration tests
2023-04-10T00:00:00.000Z feature: force code cleanup
2023-04-10T00:00:00.000Z fix: force dependencies
2023-04-10T00:00:00.000Z feature: add dependencies
2023-04-11T00:00:00.000Z fix: update security patches
2023-04-11T00:00:00.000Z fix: update integration tests
2023-04-11T00:00:00.000Z fix: force logging
2023-04-11T00:00:00.000Z fix: refactor integration tests
2023-04-11T00:00:00.000Z fix: update security patches
2023-04-12T00:00:00.000Z fix: fix database schema
2023-04-12T00:00:00.000Z chore: force UI components
2023-04-12T00:00:00.000Z chore: add documentation
2023-04-12T00:00:00.000Z chore: fix UI components
2023-04-12T00:00:00.000Z fix: update UI components
2023-04-12T00:00:00.000Z chore: update REST api calls
2023-04-12T00:00:00.000Z chore: add integration tests
2023-04-12T00:00:00.000Z chore: refactor documentation
2023-04-13T00:00:00.000Z fix: force database schema
2023-04-13T00:00:00.000Z feature: refactor code cleanup
2023-04-13T00:00:00.000Z chore: add code cleanup
2023-04-13T00:00:00.000Z chore: add unit tests
2023-04-13T00:00:00.000Z feature: update unit tests
2023-04-13T00:00:00.000Z feature: update performance improvements
2023-04-13T00:00:00.000Z feature: force unit tests
2023-04-13T00:00:00.000Z feature: add logging
2023-04-13T00:00:00.000Z feature: add performance improvements
2023-04-13T00:00:00.000Z fix: force error handling
2023-04-14T00:00:00.000Z fix: fix deployment scripts
2023-04-14T00:00:00.000Z chore: force logging
2023-04-14T00:00:00.000Z feature: force logging
2023-04-14T00:00:00.000Z feature: fix authentication
2023-04-15T00:00:00.000Z chore: force UI components
2023-04-15T00:00:00.000Z fix: update logging
2023-04-16T00:00:00.000Z chore: force documentation
2023-04-16T00:00:00.000Z chore: update code cleanup
2023-04-16T00:00:00.000Z fix: update integration tests
2023-04-16T00:00:00.000Z feature: refactor security patches
2023-04-16T00:00:00.000Z feature: force database schema
2023-04-16T00:00:00.000Z fix: refactor integration tests
2023-04-17T00:00:00.000Z fix: refactor logging
2023-04-17T00:00:00.000Z chore: add security patches
2023-04-17T00:00:00.000Z chore: update database schema
2023-04-17T00:00:00.000Z feature: fix deployment scripts
2023-04-17T00:00:00.000Z fix: update unit tests
2023-04-17T00:00:00.000Z fix: refactor authentication
2023-04-18T00:00:00.000Z feature: fix dependencies
2023-04-18T00:00:00.000Z feature: fix code cleanup
2023-04-18T00:00:00.000Z feature: fix UI components
2023-04-18T00:00:00.000Z feature: update REST api calls
2023-04-18T00:00:00.000Z fix: fix UI components
2023-04-18T00:00:00.000Z feature: fix unit tests
2023-04-18T00:00:00.000Z feature: fix configuration files
2023-03-18T00:00:00.000Z fix: refactor logging
2023-03-18T00:00:00.000Z fix: fix configuration files
2023-03-18T00:00:00.000Z feature: add security patches
2023-03-18T00:00:00.000Z chore: add REST api calls
2023-03-19T00:00:00.000Z fix: force authentication
2023-03-19T00:00:00.000Z fix: update UI components
2023-03-19T00:00:00.000Z fix: refactor database schema
2023-03-19T00:00:00.000Z fix: fix authentication
2023-03-19T00:00:00.000Z fix: force dependencies
2023-03-19T00:00:00.000Z fix: fix configuration files
2023-03-19T00:00:00.000Z chore: refactor REST api calls
2023-03-19T00:00:00.000Z feature: update database schema
