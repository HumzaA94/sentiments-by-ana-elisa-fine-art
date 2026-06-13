# Sentiments by Ana Elisa · Fine Art

A React portfolio website for **Sentiments by Ana Elisa**, featuring an original works gallery, artist bio, and contact form.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  components/   # Nav, Hero, Gallery, About, Contact, Footer, Lightbox
  data/         # Artwork metadata and Google Drive image URLs
  App.jsx       # Main layout and lightbox state
  index.css     # Global styles
public/
  logo.png      # Brand logo
```

## Customization

- **Artwork titles & descriptions:** Edit `src/data/artworks.js`
- **Artist copy:** Update text in `Hero.jsx`, `About.jsx`, and `Contact.jsx`
- **Social links:** Update URLs in `Contact.jsx`
