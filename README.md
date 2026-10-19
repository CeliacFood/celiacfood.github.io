# سلیاک‌فود

I built this page to introduce the Tehran representative of the Iranian Celiac Association and give visitors a clear way to find our public channels or contact us. This repository is the introduction site. The separate shop project handles buying and accounts.

The site is plain HTML, CSS and JavaScript, with Persian text and a right-to-left layout. It has no account system, payment form, backend or API keys. Fonts and images are served from this repository.

The public address is [celiacfood.github.io](https://celiacfood.github.io/). GitHub Pages publishes the root of `main` after each push.

## Preview and edit

From the repository directory, start a local server with Python:

```sh
python -m http.server 8090
```

Open `http://localhost:8090`. Edit the HTML for content, the stylesheet for appearance and the script for the mobile menu. No package installation or build command is needed.

Before pushing, check the page at a narrow phone width and on desktop, use the menu with a keyboard, and follow the public channel links. Keep contact details and claims aligned with [the content notes](docs/CONTENT_NOTES.md).

## Images and font

The food images are original illustrations created for our separate shop design preview on 6 October 2026. They are not photos of actual products or evidence of ingredients, stock or certification. The page labels them as illustrative.

The Persian font is [Vazirmatn 33.003](https://github.com/rastikerdar/vazirmatn/releases/tag/v33.003), hosted locally with its original SIL Open Font License. No competitor photographs, descriptions or design assets are included.
