# GitHub Actions Practice - Issues & Solutions

## Project

Node.js + Express + Jest + ESLint + GitHub Actions

---

# Issue 1: `npm ci` Failed

## Error

```text
npm ERR! code EUSAGE

The `npm ci` command can only install with an existing package-lock.json
```

## Cause

`npm ci` requires an existing `package-lock.json`.

Your repository contained:

```
package.json
src/
tests/
```

but was missing

```
package-lock.json
```

---

## Solution

Generate the lock file locally.

```bash
npm install
```

Commit it.

```bash
git add package-lock.json
git commit -m "Added package lock"
git push
```

---

## Alternative

Use

```yaml
run: npm install
```

instead of

```yaml
run: npm ci
```

---

## Interview Question

**Why is `npm ci` preferred over `npm install` in CI/CD?**

Answer:

* Faster
* Clean installation
* Uses exact dependency versions
* Requires package-lock.json
* Recommended for CI/CD

---

# Issue 2: Jest Not Found

## Error

```text
'jest' is not recognized as an internal or external command
```

or

```text
sh: jest: not found
```

---

## Cause

Jest was not installed.

---

## Solution

```bash
npm install --save-dev jest
```

Verify

```bash
npx jest --version
```

---

# Issue 3: ESLint Not Found

## Error

```text
eslint: not found
```

or

```text
'eslint' is not recognized...
```

---

## Cause

ESLint package was missing.

---

## Solution

```bash
npm install --save-dev eslint
```

Verify

```bash
npx eslint -v
```

---

# Issue 4: ESLint Configuration Missing

## Error

```text
ESLint couldn't find an eslint.config.(js|mjs|cjs)
```

---

## Cause

Using ESLint v9+.

Older configuration

```
.eslintrc.json
```

is no longer the default.

---

## Solution

Create

```
eslint.config.js
```

Example

```javascript
module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs"
    },
    rules: {
      semi: ["error", "always"],
      "no-unused-vars": "error"
    }
  }
];
```

---

# Issue 5: Upload Artifact

## Working Step

```yaml
- name: Upload Artifact
  uses: actions/upload-artifact@v4
  with:
    name: files
    path: build/
```

Successfully uploads

```
build/
```

as an artifact.

---

# Issue 6: Download Artifact Failed

## Error

```text
Unable to resolve action actions/download-artifacts
repository not found
```

---

## Cause

Typo.

Incorrect

```yaml
uses: actions/download-artifacts@v4
```

Correct

```yaml
uses: actions/download-artifact@v4
```

Notice

```
download-artifact
```

NOT

```
download-artifacts
```

---

# Correct Example

```yaml
deploy:
  needs: build
  runs-on: ubuntu-latest

  steps:

    - name: Download Artifact
      uses: actions/download-artifact@v4
      with:
        name: files

    - name: Show Files
      run: ls -R
```

---

# Artifact Flow

```
Checkout

↓

Install Dependencies

↓

Lint

↓

Test

↓

Build

↓

Upload Artifact

↓

Download Artifact

↓

Deploy
```

---

# GitHub Actions Workflow Order

```
Trigger

↓

checkout

↓

setup-node

↓

npm install / npm ci

↓

npm run lint

↓

npm test

↓

npm run build

↓

upload-artifact

↓

download-artifact

↓

deploy
```

---

# Common GitHub Actions Errors

## Error

```
npm ci failed
```

Reason

Missing package-lock.json

---

## Error

```
jest not found
```

Reason

Jest not installed

---

## Error

```
eslint not found
```

Reason

ESLint not installed

---

## Error

```
eslint.config.js missing
```

Reason

Using ESLint v9+

---

## Error

```
download-artifacts repository not found
```

Reason

Wrong action name

---

## Error

```
Artifact not found
```

Reason

Artifact name mismatch

---

## Error

```
No files found to upload
```

Reason

Wrong path

Example

```
build/
```

doesn't exist.

---

# Best Practices

✅ Always commit

```
package.json
package-lock.json
```

Never commit

```
node_modules/
```

Always use

```yaml
actions/checkout@v4
```

Always use

```yaml
actions/setup-node@v4
```

Prefer

```yaml
npm ci
```

for CI/CD.

Use

```
needs:
```

for job dependency.

Use artifacts for passing files between jobs.

---

# GitHub Actions Interview Questions

### What is a Runner?

A machine that executes GitHub Actions jobs.

---

### Difference between Job and Step?

Job

* Runs on a runner
* Independent

Step

* Executes inside a job
* Runs sequentially

---

### What is an Artifact?

Files generated during one job and used in another job.

Examples

* Build output
* Reports
* Coverage
* ZIP packages

---

### Difference

Upload

```yaml
actions/upload-artifact
```

Download

```yaml
actions/download-artifact
```

---

### What is `needs`?

Creates dependency between jobs.

Example

```
build

↓

deploy
```

Deploy waits until Build finishes.

---

### Difference

`npm install`

* Development
* Updates lock file

`npm ci`

* CI/CD
* Faster
* Clean install
* Exact versions

---

# Final Working Pipeline

```
Checkout

↓

Setup Node

↓

Install Packages

↓

Lint

↓

Unit Test

↓

Build

↓

Upload Artifact

↓

Download Artifact

↓

Deploy
```

---

# Key Learnings

* Understand the difference between `npm install` and `npm ci`.
* Always commit `package-lock.json`.
* Install Jest and ESLint as development dependencies.
* ESLint v9+ requires `eslint.config.js`.
* Use the correct action names (`upload-artifact` and `download-artifact`).
* Use `needs` to define job dependencies.
* Pass build outputs between jobs using artifacts.
* Verify artifact names and paths match exactly.
