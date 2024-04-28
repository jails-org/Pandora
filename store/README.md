# store

> A simple store powered by preact signals 

The store is actually the same as `@preact/signals-core`.

For more information about how to use it, please visit: https://preactjs.com/guide/v10/signals/

[Example on stackblitz](https://stackblitz.com/edit/jails-chartjs-7gc5qo?file=index.ts)

---

## Usage

### Your Custom Store

`my-store.ts`

```ts
import { signal, effect } from 'jails.pandora/store'

export { effect }

export const counter = signal(0)

export const add = () => {
	counter.value = counter.value + 1
}

export const subtract = () => {
	counter.value = counter.value - 1
}

```

### Your Component

```ts
import * as store  from 'my-store'

store.add() // counter = 1
store.add() // counter = 2

store.effect(() => {
    console.log( store.counter ) // Will be fired only if counter.value changes
}) 

```
