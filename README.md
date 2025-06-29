# Overview

This repo contains test files and related configuration files to run Playwright tests against the CreateFuture website as per an assignment from the QE department.
The tests are written using Typescript. 

# Install Playwright

## Prerequisites 

Install node.js (https://nodejs.org/en/download/) and npm

## Installation 

Run command 'npx playwright install'

Make sure node version is up to date with Playwright, upgrade if needed
run 'npx playwright install --with-deps' for browser binaries


# Playwright tests for CreateFuture website

This repo contains Playwright tests for the CreateFuture website

## Local setup

Clone repo from github on local machine or connect in IDE via github to pull repo

View playwright configuration in playwright.config.ts


## Running tests

To view commands setup view or edit packackage.json > scripts

To run tests locally, use commands: 

'npx playwright test'
'npm run test:e2e'
'npm run test:e2e:ui' (opens UI with trace viewer)

Optional: install Playwright extension for your IDE and run tests from there

## Contributing

To contribute to the repo, create a new branch by running 'git checkout -b branch-name-here'
Write code as per Playwright documentation (https://playwright.dev/docs/writing-tests)
Save files and stage changes using 'git add .'
Commit changes via IDE's source control actions or using 'git commit -m 'some changes described here'
Push to the branch via IDE's source control actions or using 'git push origin branch-name-here'
Create pull request in Github

## Reporting

After a local test run, run command 'npx playwright show-report'

In github, you can download the playwright-report zip file artifact from the Playwright test run in pipeline (upon failed tests only).

## Github actions

In Github actions, you can view the scheduled Playwright e2e test runs which are currently set to run daily from Monday to Friday.
Artifacts from the test run can be downloaded from the github workflow view.