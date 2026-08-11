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
- Tabler will be used for React icons

## What is the next area of focus?

1. Implement state to hold longitude and latitude, testing skeleton UI whilst awaiting information
2. Read up on Zod for schema validation
3. Consider ORM use or park for later
4. Implement deployment pipelines following successful MVP creation

### Tracer bullet components

- [x] Move types to separate file
- [x] Create dummy data file to save on API costs
- [x] Select and implement shadcnUI component for sunrise/sunset cards
- [x] Implement button for entering location
- [x] Implement geolocation API to gain longitude and latitude
- [x] Move button component into separate files for client component
- [x] Move API call to separate file to ensure main function not async
- [x] Add state to hold latitude/longitude
- [x] React state timing bug, understand and implement fix so console log doesn't show null initially
- [x] Check types in other components to see if already pre-defined available instead of custom
- [x] Pass coordinates state between components
- [x] Add sunset/sunrise times
- [x] Remove location button component and mock data
- [x] Clean up text in card
- [x] Correct ForecastItem type
- [x] Fix golden hour bug with incorrect time and check time frame correct for golden and blue hour
- [x] Use tailwind capitalize className and a span element to capitalise the title and lowercase items
- [x] Use Date + toLocaleDateString instead of slicing to improve date robustness if API changes using helper function throughout (similar to getCompassDirection)
- [x] Add card background styling
- [x] Clean up card text
- [x] Dashboard layout improvements
- [x] Add background image
- [x] Add app title header
- [x] Add app footer
- [x] Add skeletons for loading state
- [ ] Add component/styling for error state
- [ ] Consider location map
- [ ] Create helper function to extract colour logic to change on conditions (e.g. more intense colours for different sunsets, cloud cover etc.)
- [ ] Authentication for individual users
- [ ] Deploy to Vercel
- [ ] Consider implementation of Zod schema validation

### Further reading

- useState/useEffect
- Passing state between components
- Next API routes
