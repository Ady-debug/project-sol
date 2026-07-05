# Project Sol Overview

## What is the purpose of the application?

## What tech stack will be used?

### Tech stack

The web application will be built using the following:

- Next.js
- React (Typescript)
- Tailwind CSS
- Shadcn UI
- GitHub/GitHub Actions
- Vercel

### API provider

Sunset and sunrise data will be collected through the Sunsethue API. More information can be found by following the link below:

https://sunsethue.com/dev-api/portal

## What workflows do I need to be aware of?

### Git Commit Message Convention

Credit: https://dev.to/theonlineaid/scalable-git-workflow-nextjs-project-structure-master-guide-1l15

#### Format

`<category>: <imperative statements separated by ';'>`

#### Categories

- `chore` ➡️ Docs, tests, formatting
- `refactor` ➡️ Internal code change
- `fix` ➡️ Bug fix
- `feat` ➡️ New feature

#### Examples

```
feat: add new button component; add button to templates

fix: prevent event propagation in button

refactor: rewrite button in Typescript

chore: add button documentation
```

### Git Branching Strategy

#### Format

`<category>/<description-in-kebab-case>`

### Categories

- `test` ➡️ Experiments
- `hotfix` ➡️ Emergency Fix
- `bugfix` ➡️ Fix a bug
- `feature` ➡️ Add/change a feature

### Examples

```
feature/create-new-button-component

bugfix/button-overlap-form-on-mobile

hotfix/registration-form-not-working

test/refactor-components-with-atomic design
```

## How does it all hang together?

## What architectural decisions have been made?

## What is the next area of focus?

1. Read SunsetHue documentation and create test program to bring information back from API endpoint
2. Think about a tracer bullet to prove out the concept and get the basics setup
3. Create high level design skeleton to start understanding what tech is needed to support
