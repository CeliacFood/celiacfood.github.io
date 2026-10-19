# Introduction site checks

Checked locally on 19 October 2026 before the first redesign commit.

## Page and interactions

- Inspected the desktop layout and phone layout in a browser.
- Checked widths of 320, 390, 761, 1024 and 1257 pixels. No horizontal page overflow was found.
- Opened the mobile menu, followed its contact link, and checked Escape closes it and returns focus to the button.
- Tabbed out of the open menu. It closed without moving focus away from the next link.
- Resized from desktop to phone while a navigation link had focus. The mobile menu opened so the link stayed visible.
- Opened an FAQ and closed it with the Space key.
- Opened the Persian 404 page and followed its return-home link.
- Confirmed the local font and all seven image elements loaded.

## Source checks

- Both pages declare Persian and RTL, have one main landmark and one H1, and use descriptive link text.
- All internal fragments resolve, IDs are unique, local assets exist, and raster image dimensions match their files.
- Organization metadata parses as JSON. Sitemap and favicon parse as XML.
- No forms, inputs, embedded frames, remote scripts, analytics scripts or account flows are present.
- The mobile navigation source was checked for missing markup, Escape, anchor activation, outside clicks, focus leaving the header and both resize directions.
- CSS review addressed the taller navigation without JavaScript and faint contact text when printing. These fallback modes were reviewed in source, not emulated in the browser.
- Principal small-text color pairs meet 4.5:1 contrast. This is not a full accessibility certification or assistive-technology audit.
- The asset directory is about 730 KB. Images below the introduction use lazy loading; JavaScript only manages the menu.
- Text files were scanned for credential patterns, personal contact details and prohibited wording. The unrelated template contacts and assets were removed.

## Publication boundaries

Identity and operating statements come from the project owner. Channel links use the exact supplied public destinations. Access to those services can vary by visitor and location; their delivery and response times were not tested.

Food images are illustrative and visibly labeled. No product certification, price, stock, medical service or delivery guarantee is asserted. Future content changes should follow [the content notes](CONTENT_NOTES.md).
