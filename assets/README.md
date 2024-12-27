# assets

Assets is an abstraction to import Css, Javascript and Html dynamically on runtime.

## Usage

```js
import { importJs, importCss, importHtml } from 'jails.pandora/assets'

importCss('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css')
  .then( (event) => console.log(event, 'swiper css loaded') )
  .catch( (event) => console.error('error on loading swiper css') )

importJs('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js', { async = true })
  .then( (event) => console.log(event, 'swiper js loaded') )
  .catch( (event) => console.error(event, 'error on loading swiper js') )

importHtml('https://html-mock.fly.dev/tag/table?class=table%20table-bordered', fetchOptions )
  .then( ({ response, html }) => {
    console.log({ response, html })
  })
```
