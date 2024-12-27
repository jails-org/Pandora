# events

Events utility functions to be used for common cenarios.


## throttle
Limits a function's execution to at most once per specified time interval.

```ts 
throttle( fn: Function, timeInterval? = 100 )
```

### Usage

```js
import { throttle } from 'jails.pandora/events'

const onscroll = throttle(() => {
  console.log('throttling scroll')
})

window.addEventListener('scroll', onscroll)

```


## debounce
Delays a function's execution until after a specified pause in activity.

```ts 
debounce( fn: Function, timeInterval? = 250 )
```

### Usage

```js
import { debounce } from 'jails.pandora/events'

const oninput = debounce(() => {
  console.log('debouncing input')
})

input.addEventListener('oninput', oninput)

```