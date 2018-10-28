node-localizer
================

## Installation

Npm
```javascript
npm install node-localizer
```

Yarn
```javascript
yarn add node-localizer
```

# Support

This library is quite fresh, and maybe has bugs. Write me an **email** to *natashkinsash@gmail.com* and I will fix the bug in a few working days.

# Quick start

```javascript
const Localizer = require('node-localizer');

const localizer = new Localizer({TEST: {en: "test", ru: "тест", cz: "kvíz"}}, {local: 'en', default: 'en'});

let test = localizer.get({key: 'TEST'}); // { text: "test", local: "en" }

localizer.setLocal('cz');

test = localizer.get({key: 'TEST'}); // { text: "kvíz", local: "cz" }

test = localizer.get({key: 'TEST', local: 'ru'}); // { text: "тест", local: "ru" }


```