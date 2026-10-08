# Portfolio grid

A responsive, single-page portfolio for GitHub Pages. The page is composed from reusable JavaScript modules in `components/`; `app.js` imports and mounts them into `index.html`. No framework, build step, or package installation is required.

## Personalize it

- Replace the sample name, introduction, and contact email in the relevant component files.
- In `components/work-section.js`, replace the project titles, categories, descriptions, and image URLs.
- Replace each project's Unsplash image URL and its alt text with your own project imagery.
- Update the page title and description in the `<head>`.
- Adjust the colors and layout in `styles.css` as needed.

Project tiles open a detail dialog, category buttons filter the grid, and the header toggle switches between day and night themes. The selected theme is remembered in the browser. These features work without a backend.

To preview locally, serve the folder over HTTP because browsers restrict JavaScript modules opened directly with `file://`.

## Publish on GitHub Pages

1. Create a GitHub repository and push these files to its default branch.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the default branch and the `/ (root)` folder, then save.
5. Wait for GitHub Pages to publish the site; the Pages settings show its URL.

The entry point is `index.html` at the repository root, so the same files work for a user/organization site or a project site.
