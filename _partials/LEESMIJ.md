# Canonieke blokken van het Fortly-designsysteem

Deze map heet bewust `_partials` met een underscore: **GitHub Pages draait Jekyll en
publiceert mappen met een underscore niet**. Zo blijven deze blokken in versiebeheer,
maar worden ze nooit als losse pagina op fortly.nl geserveerd (dat zou dunne,
indexeerbare duplicaatpagina's opleveren).

Het zijn geen includes: statische HTML kent geen server-side includes. Kopieer een
blok letterlijk naar een pagina. Wijzig je iets, wijzig het dan hier én op alle
pagina's, anders lopen ze uiteen.

- `head.html`   — <head>-blok. Bevat het verplichte Google Analytics/Ads-blok.
- `header.html` — nav + mobiel menu
- `footer.html` — footer met footernav, KvK, NAP en Indufort-attributie

Na een wijziging aan Tailwind-classes: `npm run build:css`
