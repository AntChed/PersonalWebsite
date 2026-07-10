# Antoine Chedebois - Online Resume

This repository contains the source files for my personal online resume.

The site is intentionally simple: it is a static HTML/CSS/JavaScript resume, originally built several years ago and progressively updated to reflect my current positioning as a remote-first Senior Software Engineer / Tech Lead.

![Homepage screenshot](assets/images/homepage-screenshot.png)

## Professional Positioning

The content highlights:

- Senior Software Engineer / Tech Lead experience
- Ex-Amazon engineering background
- Remote-first and international team experience
- AWS cloud-native architecture and production operations
- E-commerce, logistics and business web platforms
- Technical leadership, delivery ownership, CI/CD and observability

## What This Repository Shows

This is not meant to demonstrate a modern frontend framework stack. It is a maintained static resume site with a legacy build pipeline.

For a recruiter or hiring manager, the repository is mainly useful to see:

- How I present my engineering background and career focus
- My ability to maintain and evolve an existing codebase
- My attention to production-facing details, wording, SEO metadata and generated assets
- A lightweight Grunt-based static build workflow

## Structure

- `index_non_minify_gb.html` - English source page
- `index_non_minify_fr.html` - French source page
- `assets/` - Public CSS, JavaScript, images, badges and downloadable resume files
- `Gruntfile.js` - Legacy build tasks for minification and asset generation
- `package.json` - Build dependencies

Generated HTML files are produced from the non-minified sources.

## Build

Install dependencies:

```bash
npm install
```

Generate minified HTML:

```bash
npx grunt htmlmin
```

The Grunt configuration maps:

- `index_non_minify_gb.html` to `index.html`
- `index_non_minify_fr.html` to `index_fr.html`

## Contact

Website: <https://www.antoinechedebois.com>
