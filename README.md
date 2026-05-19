# Malik Online Store

A modern static online shopping website. It includes a responsive storefront, product filtering, search, sorting, wishlist, cart drawer, shipping progress, product detail modal, dark mode, and newsletter interaction.

## Files

- `index.html` - page structure and storefront sections
- `styles.css` - responsive design, dark mode, drawer/modal styling
- `script.js` - product data, filters, cart, wishlist, modal, and local storage

## Run Locally

Open `index.html` in a browser. No build step is required.

For a local server:

```bash
python -m http.server 5500
```

Then visit `http://localhost:5500`.

## Upload To GitHub Pages

1. Create a new GitHub repository.
2. Upload `index.html`, `styles.css`, `script.js`, `.gitignore`, and this `README.md`.
3. Go to `Settings` -> `Pages`.
4. Set source to `Deploy from a branch`.
5. Choose the `main` branch and `/root`.
6. Save and wait for GitHub to publish the site.

## Customize

Edit the `products` and `collections` arrays in `script.js` to change names, prices, categories, images, and descriptions.
