# oni

Oni, A state machine Store that ressembles Redux but simpler.

- Information & Docs : [Oni](https://github.com/Javiani/Oni)

## Usage

### Oni

```js
import Oni from 'jails.pandora/oni'

const initialState = {
    loading: false,
    items: []
}

const actions = {
    
    FETCH: (state, payload, { dispatch }) => {
        
        fetch('/some/async/service')
            .then( data => dispatch('LOADED', { data }))

        // Update only the desired property
        return {
            loading: true
        }
    },

    LOADED: (state, { data }) => {
        return {
            items: data,
            loading: false
        }
    }
}

export const store = Oni(initialState, actions)

```

### Use Case 

```js
store.dispatch('FETCH', { ... })
```