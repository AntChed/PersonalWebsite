# Antoine Chedebois - Online Resume

This repository contains the source files for my personal online resume.

The site is intentionally simple: it is a static resume, migrated from a legacy Bootstrap/jQuery/Grunt codebase to Astro while keeping the same professional content and bilingual structure.

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

This is not meant to be a complex application. It is a maintained static resume site with a modern Astro build pipeline.

For a recruiter or hiring manager, the repository is mainly useful to see:

- How I present my engineering background and career focus
- My ability to maintain and evolve an existing codebase
- My attention to production-facing details, wording, SEO metadata and generated assets
- A lightweight Astro static build workflow

## Structure

- `src/pages/index.astro` - English page
- `src/pages/index_fr.astro` - French page
- `src/components/ResumePage.astro` - Shared page component
- `src/data/resume.ts` - Structured bilingual resume content
- `src/styles/global.css` - Site styling
- `assets/` - Images, screenshots and downloadable resume files used by the site
- `public/assets/php/contactForm.php` - PHP endpoint used by the contact form on PHP-capable hosting
- `package.json` - Build dependencies

The static output is generated into `dist/`.

Legacy Bootstrap, jQuery, Font Awesome and Grunt build assets have been removed from the source tree.

## Build

Install dependencies:

```bash
npm install
```

Generate the static site:

```bash
npm run build
```

Preview the generated site:

```bash
npm run preview
```

Run Astro diagnostics:

```bash
npm run check
```

## Deployment

Deploy the generated `dist/` directory to the web server.

The contact form posts to `/assets/php/contactForm.php`. Astro copies this file from `public/assets/php/contactForm.php` into `dist/assets/php/contactForm.php` during the build, so the production host must support PHP mail for the form to send messages.

## Google Analytics

Google Analytics is supported through a public build-time environment variable:

```bash
PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX npm run build
```

On Windows PowerShell:

```powershell
$env:PUBLIC_GA_MEASUREMENT_ID = "G-XXXXXXXXXX"
npm run build
```

If the variable is not set, the site builds without analytics scripts.

## Contact

Website: <https://www.antoinechedebois.com>
