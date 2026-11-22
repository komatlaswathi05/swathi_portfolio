# Swathi Komatla — Developer Portfolio

A responsive, white-minimal React portfolio based on the experience and education details in the supplied resume. It does not use a profile photo.

## Requirements
- Node.js 18 or newer
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite.

## Production build
```bash
npm run build
npm run preview
```

## Personalize before publishing
Open `src/App.jsx` and update the `PROFILE` object:
- `email`: your professional email address
- `linkedin`: your LinkedIn profile URL
- `github`: your GitHub profile URL

These fields are intentionally blank because they were not present in the supplied resume. The contact section displays reminders until you add them.

## Resume
The supplied resume is copied to `public/SwathiReddyResume.pdf` and is linked from the navigation and hero section.

## Deploy
Push the project to GitHub, import the repository into Vercel, and deploy with the default Vite settings:
- Build command: `npm run build`
- Output directory: `dist`

## Accuracy note
Project and experience descriptions are based on the supplied resume. Add repository links, screenshots, project metrics, exact dates or additional responsibilities only when you can verify and are permitted to share them.
