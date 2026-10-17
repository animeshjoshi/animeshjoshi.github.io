# Personal portfolio

A four-page static site: About, Experience, Projects, Coursework.

## Editing
All text lives in **content.js** — change it there and every page updates.

- **Photos:** drop images into `images/` and update the `photos` list. The first one is the big hero photo.
- **Substack:** set a project's `substack` field to a post URL (e.g. `https://you.substack.com/p/slug`) and it embeds a preview card.
- **GitHub / demo links:** set `github` / `demo` on any project; leave empty to hide the button.
- **Résumé:** put a PDF in `files/` and set `resume: "files/resume.pdf"`.

## Viewing
Open `index.html` in a browser. No build step.

## Publishing (free)
- **GitHub Pages:** push this folder to a repo named `your-username.github.io`, then enable Pages in repo settings.
- **Netlify / Vercel:** drag-and-drop this folder into their dashboard.
