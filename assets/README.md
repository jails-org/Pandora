# assets

Assets is an abstraction to import Css, Javascript and Html dynamically on runtime.

## Usage

```js
import { importJs, importCss, importHtml } from 'jails.pandora/assets'

importCss('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css')
  .then( (event) => console.log('swiper css loaded') )
  .catch( () => console.error('error on loading swiper css') )

importJs('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js')
  .then( (event) => console.log('swiper js loaded') )
  .catch( () => console.error('error on loading swiper js') )

importHtml('https://html-mock.fly.dev/tag/table?class=table%20table-bordered')
  .then( ({ response, html }) => {
      const element = document.querySelector('outlet')
      element.innerHTML = html
  })
```
