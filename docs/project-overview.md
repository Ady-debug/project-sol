# Project Sol Overview

## What is the purpose of the application?

The application MVP will be a page users can input their location details and receive a 3 day forecast of both sunrise and sunsets.

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

![Overview Diagram](/docs/project-sol-overview.png)

## What architectural decisions have been made?

- Zod will be used for schema validation

## What is the next area of focus?

1. Read up on Zod for schema validation
2. Consider ORM use or park for later
3. Implement deployment pipelines following successful MVP creation

### Tracer bullet components

- [x] Move types to separate file
- [x] Create dummy data file to save on API costs
- [ ] Select and implement shadcnUI component for sunrise/sunset cards
- [ ] Implement option for entering location
- [ ] Component styling
- [ ] Authentication for individual users
- [ ] Deploy to Vercel
- [ ] Consider implementation of Zod schema validation
