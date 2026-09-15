# Recipe House

Recipe House is a React and Vite project connected to Storyblok. It renders editable Storyblok content for the main page, including the header, teaser section, and footer, and is configured for Storyblok's Visual Editor during local development.

## Tech Stack

- React
- Vite
- Storyblok React SDK
- CSS Modules
- ESLint
- vite-plugin-mkcert for local HTTPS

## Requirements

- Node.js
- npm
- A Storyblok space with a preview access token

## Getting Started

Install the dependencies:

```bash
npm install
```

Create a local `.env` file and add your Storyblok preview access token:

```bash
VITE_STORYBLOK_ACCESS_TOKEN=your-preview-token
```

Start the development server:

```bash
npm run dev
```

The project is configured to run locally over HTTPS:

```text
https://localhost:5173/
```

This is the URL to use in Storyblok's Visual Editor preview configuration. The older local SSL proxy setup on port `5174` is no longer needed.

## Storyblok Content

The app currently loads these Storyblok stories in draft mode:

- `header`
- `home`
- `footer`

The `home` story renders the first block in its `body` field as the page teaser. Header and footer content are managed separately so they can be edited in Storyblok and reused across the page.

For the Visual Editor, make sure the preview URL in Storyblok points to:

```text
https://localhost:5173
```

If the Home story should load at the root of the site, set its real path in Storyblok to:

```text
/
```

## Available Scripts

Run the local HTTPS dev server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Run linting:

```bash
npm run lint
```

## Project Structure

```text
src/
  components/
    Button/
    Footer/
    FooterColumn/
    FooterLink/
    Header/
    NavigationItem/
    SocialLink/
    Teaser/
  App.jsx
  main.jsx
```

## Notes

- Keep `.env` local and do not commit Storyblok tokens.
- Storyblok preview requires HTTPS, which is handled by `vite-plugin-mkcert`.
