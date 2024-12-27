# events

Events utility functions to be used for common cenarios.


## isVisible
```ts 
isVisible( target: HTMLElement, { root = null, rootMargin :'0px', threshold: 0 }?: IntersectionObserverOptions )
```

A simple version of Intersection Observer API, that only handles the case where the callback is fired once for a specific `HTMLElement`. 
It also wraps it in `Promise` so it can be used with `await` for more convinience.


### Usage

```js
import { isVisible } from 'jails.pandora/events'

async function main () {

  const element = document.querySelector('#target')
  await isVisible( element )

  console.log('Element is visible!')
}

```

## throttle
```ts 
throttle( fn: Function, timeInterval? = 100 )
```

Limits a function's execution to at most once per specified time interval.


### Usage

```js
import { throttle } from 'jails.pandora/events'

const onscroll = throttle(() => {
  console.log('throttling scroll')
})

window.addEventListener('scroll', onscroll)

```


## debounce
```ts 
debounce( fn: Function, timeInterval? = 250 )
```

Delays a function's execution until after a specified pause in activity.



### Usage

```js
import { debounce } from 'jails.pandora/events'

const oninput = debounce(() => {
  console.log('debouncing input')
})

input.addEventListener('oninput', oninput)

```
