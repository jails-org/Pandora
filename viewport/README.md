# viewport

Viewport an abstraction to deal with viewport area / visibility.


## isVisible

is a simple version of Intersection Observer API, that only handles the case where the callback is fired once for a specific `HTMLElement`. 
It also wraps it in `Promise` so it can be used with `await` for more convinience.

```ts 
isVisible( target: HTMLElement, { root = null, rootMargin :'0px', threshold: 0 }?: IntersectionObserverOptions )
```


### Usage

```js
import { isVisible } from 'jails.pandora/viewport'

async function main () {

  const element = document.querySelector('#target')
  await isVisible( element )

  console.log('Element is visible!')
}

```