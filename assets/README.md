# assets

Assets is an abstraction to import Css, Javascript and Html dynamically on runtime.


## importHtml
```ts 
importHtml( url: string, options?: fetchOptions ) : Promise<Response, string>
```

Returns a promise when Html is loaded. It accepts options from `fetch` api.


### Usage 

```ts 
import { importHtml } from 'jails.pandora/assets'

importHtml('https://html-mock.fly.dev/tag/table?class=table%20table-bordered')
  .then( ({ response: Response, html: string }) => {
    console.log({ response, html })
  })
```


## importJs
```ts 
importJs( url: string, options? = { async = true } ) : Promise<Event>
```

Returns a promise when script is loaded


### Usage 

```ts 
import { importJs } from 'jails.pandora/assets'

importJs('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js')
  .then( (event) => {
    console.log(event, 'swiper js loaded') 
  })
  .catch( (event) => { 
    console.error(event, 'error on loading swiper js') 
  })
```


## importCss
```ts 
importJs( url: string ) : Promise<Event>
```

Returns a promise when Css is loaded


### Usage 

```ts 
import { importCss } from 'jails.pandora/assets'

importCss('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css')
  .then( (event) => {
    console.log(event, 'swiper css loaded') 
  })
  .catch( (event) => {
    console.error('error on loading swiper css') 
  })
```