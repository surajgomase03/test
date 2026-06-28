# GitHub Actions Complete Handbook (Mistakes, Fixes & Interview Notes)

# Author

Suraj Gomase

---

# 1. Node.js Project Setup

* Project Structure
* package.json
* package-lock.json
* Express App
* Jest
* ESLint
* Build Script
* Build Directory
* README

---

# 2. GitHub Actions

* Workflow
* Events
* Jobs
* Steps
* Runner
* Matrix
* Environment Variables
* Secrets
* Variables
* Outputs
* needs
* strategy
* concurrency
* permissions
* reusable workflow
* composite action

---

# 3. GitLab CI

* stages
* jobs
* artifacts
* cache
* rules
* dependencies
* only
* except
* variables

---

# 4. Docker

* Basic Dockerfile
* Multi-stage Dockerfile
* Production Dockerfile
* Non-root User
* .dockerignore
* Image Optimization
* Security Best Practices

---

# 5. Composite Actions

* Setup Node
* Cache
* Install
* Reusable Inputs
* Outputs

---

# 6. Java Docker Action

* action.yml
* Dockerfile
* pom.xml
* AWS SDK
* Upload to S3

---

# 7. Python Docker Action

* action.yml
* Dockerfile
* boto3
* Upload to S3

---

# 8. Artifacts

Upload

Download

Retention

Passing Between Jobs

---

# 9. Cache

npm cache

actions/cache

Restore Keys

Cache Keys

When NOT to cache

---

# 10. Docker Interview Notes

* ENTRYPOINT vs CMD
* COPY vs ADD
* ARG vs ENV
* EXPOSE
* HEALTHCHECK
* USER
* WORKDIR
* RUN
* Layers
* Multi-stage

---

# 11. GitHub Actions Interview Questions

100+ questions with answers.

---

# 12. GitLab Interview Questions

50+ questions with answers.

---

# 13. Docker Interview Questions

150+ questions with answers.

---

# 14. Git Interview Questions

100+ questions with answers.

---

# 15. AWS S3 Upload Actions

Java

Python

Composite

Docker

Reusable

---

# ==========================

# MISTAKES MADE DURING PRACTICE

# ==========================

## Mistake 1

### Error

npm ci failed

### Reason

Missing package-lock.json

### Root Cause

Repository did not contain package-lock.json.

### Solution

Run

```bash
npm install
```

Commit

```text
package-lock.json
```

### Interview Question

Difference between

```
npm install
```

and

```
npm ci
```

---

## Mistake 2

### Error

jest not recognized

### Reason

Jest not installed

### Solution

```
npm install --save-dev jest
```

---

## Mistake 3

### Error

eslint not recognized

### Reason

Package missing

### Solution

```
npm install --save-dev eslint
```

---

## Mistake 4

### Error

ESLint Config Missing

Reason

Using ESLint v9+

Solution

Create

```
eslint.config.js
```

instead of

```
.eslintrc.json
```

---

## Mistake 5

### Error

download-artifacts

### Wrong

```
actions/download-artifacts
```

### Correct

```
actions/download-artifact
```

Notice

Artifact

NOT

Artifacts

---

## Mistake 6

Artifact not found

Reason

Artifact name mismatch

Example

Upload

```
files
```

Download

```
build
```

Names must match exactly.

---

## Mistake 7

No files found

Reason

Wrong upload path

Example

```
build/
```

did not exist.

---

## Mistake 8

Git Commit Failed

```
fatal: no name was given
```

Reason

user.name

user.email

not configured.

Fix

```
git config --global user.name

git config --global user.email
```

---

## Mistake 9

Using both

```
cache: npm
```

AND

```
actions/cache
```

Reason

Duplicate cache strategy.

Recommendation

Use

```
setup-node
cache: npm
```

for Node projects.

---

## Mistake 10

Caching node_modules

Better Practice

Cache

```
~/.npm
```

instead.

---

## Mistake 11

No restore keys

Better

```
restore-keys:
```

for partial cache matching.

---

## Mistake 12

Hardcoded Node Version

Instead

Use Inputs

```
node-version
```

inside Composite Actions.

---

## Mistake 13

No package-lock committed

CI became non-deterministic.

Always commit

```
package-lock.json
```

---

## Mistake 14

Not using

```
needs:
```

Result

Jobs ran independently.

---

## Mistake 15

No Docker Ignore

Image became larger.

Always create

```
.dockerignore
```

---

## Mistake 16

Running Container as Root

Always

```
USER appuser
```

---

## Mistake 17

Copying Entire Repository Before npm install

Wrong

```
COPY . .
RUN npm install
```

Correct

```
COPY package*.json ./
RUN npm ci
COPY . .
```

---

## Mistake 18

Using latest Tag

Wrong

```
node:latest
```

Correct

```
node:20-alpine
```

---

## Mistake 19

Uploading Secrets

Never

Commit

```
.env

AWS Keys

Secrets
```

---

## Mistake 20

Missing .gitignore

Should ignore

```
node_modules
coverage
.env
dist
```

---

# Lessons Learned

✓ Always use package-lock.json

✓ Prefer npm ci

✓ Use Multi-stage Docker Builds

✓ Use Composite Actions

✓ Cache Dependencies

✓ Upload Artifacts

✓ Download Artifacts

✓ Use needs

✓ Use Secrets

✓ Pin Action Versions

✓ Use Docker Ignore

✓ Use Non-root User

✓ Never Commit Secrets

✓ Verify Cache Keys

✓ Verify Artifact Names

✓ Test Workflow Locally

✓ Read Error Logs Carefully

✓ Prefer Production Images

✓ Use Least Privilege IAM

✓ Validate Inputs

✓ Make Actions Reusable

---

# Final Pipeline

Developer Push

↓

Checkout

↓

Setup Runtime

↓

Restore Cache

↓

Install Dependencies

↓

Lint

↓

Unit Test

↓

Coverage

↓

Build

↓

Docker Build

↓

Security Scan

↓

Upload Artifact

↓

Download Artifact

↓

Deploy

↓

Notification

---

# Final Revision Checklist

* Git
* GitHub Actions
* GitLab CI
* Docker
* Docker Compose
* Node.js
* Java
* Python
* AWS S3
* Composite Actions
* Docker Actions
* Artifacts
* Cache
* Secrets
* Runners
* Jobs
* Steps
* Workflow
* Debugging
* CI/CD Best Practices
* Common Errors
* Interview Questions
