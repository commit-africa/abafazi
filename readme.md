<h1 align="center">Seeking Shelter</h1>

<p align="center">
  <a href="https://app.netlify.com/sites/seeking-shelter/deploys">
    <img
      src="https://api.netlify.com/api/v1/badges/4cbe07c5-64e4-4e95-a31f-81132494c557/deploy-status"
      alt="Netlify Status"
    />
  </a>
  <a href="https://greenkeeper.io/">
    <img
      src="https://badges.greenkeeper.io/fabe/gatsby-universal.svg"
      alt="Greenkeeper badge"
    />
  </a>
</p>

<p align="center">
  A project that focuses on shelters and services aimed at women that are victims of abuse.
</p>

<p align="center">
  <strong>
    You can access this site live at <a href="https://seeking-shelter.netlify.com/">seeking-shelter.netlify.com</a>.
  </strong>
</p>

***

## Setup

What to set up first running this project. You can follow the [Gatsby docs](https://www.gatsbyjs.org/tutorial/part-zero/#familiarize-yourself-with-the-command-line) for environment setup

TL;DR, ensure you have:

- [Homebrew](https://docs.brew.sh/Installation) for Node.js
- XCode Command Line Tools
  - `xcode-select --install`
- Node.js and npm
  - `brew update`
  - `brew install node`
- Gatsby CLI
  - `npm install -g gatsby-cli`

Then setup the project:

```bash
git clone git@github.com:fabe/gatsby-universal.git my-site
cd my-site
npm install
```

## Usage

```bash
# To develop
npm run develop

# To build
npm run build

# To deploy to GitHub Pages
npm run deploy:gh

# To test SSR (for Lighthouse etc.)
npm run ssr

# To format JS (precommit)
npm run format

# To generate favicons (included in `build`)
npm run build:favicons
```

## Hosting

The site is currently set up to allow hosting on:

- Netlify - automagically deployed
  - [https://seeking-shelter.netlify.com](https://seeking-shelter.netlify.com/) 
- GitHub Pages - via the cli 
  - [https://asimmetric.github.io/seeking-shelter](https://asimmetric.github.io/seeking-shelter/)

## Folder structure

```bash
├── gatsby-browser.js # Specify how Gatsby renders pages in the browser
├── gatsby-config.js # Gatsby config, mostly taken from `site-config.js`
├── gatsby-node.js # Modify webpack config
├── gatsby-ssr.js # Specify how Gatsby builds pages
├── site-config.js # Global settings for the whole site, used by multiple scripts
├── content # Content & data, in both json and markdown
├── src
│   ├── components
│   │   ├── head # All meta tags etc.
│   │   ├── io # Intersection Observer component, uses render props
│   │   ├── layout # Layout component
│   │   │   ├── layout.css.js # .css.js for component's `styled-components`
│   │   │   └── layout.js
│   │   └── transition # Page Transition component, used by Gatsby APIs
│   ├── constants # Site-wide constants (breakpoints, colors, etc.)
│   ├── containers # Container components if store is needed
│   ├── helpers
│   │   ├── schemaGenerator.js # Generates JSON-LD schema.org snippets
│   │   └── mediaTemplates.js # Creates media queries for styled-components
│   ├── images # Images needed by the site/theme (not content)
│   ├── pages
│   ├── store # Store and provider of a React.createContext instance
│   └── global.css.js # Global CSS
└── scripts
    ├── lighthouse.test.js # Tests the site specified inside `site-config.js` with Google Lighthouse (WIP)
    └── favicons.js # Generates favicons and manifest using one png only.
```

## Gatsby

- Based off a Gatsby theme [Gatsby Universal](https://github.com/fabe/gatsby-universal)
- Author of Gatsby Universal Fabian Schultz [Stink Studios](https://stinkstudios.com)
- Version used: [fbe237f](https://github.com/fabe/gatsby-universal/commit/fbe237feff8bb7afab3a601b3188904bb40424b7)
