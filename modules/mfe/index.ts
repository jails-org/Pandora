
export default {
    
    load( list ) {
        
        list.forEach(({ name, target, url }) => {
            
            const element = document.querySelector(target)
            const base = document.createElement('base')
            const link = document.createElement('link')

            fetch( url )
                .then( response => response.text() )
                .then( html => {
                    
                    const promises = []
                    const parser = new DOMParser()
                    const dom = parser.parseFromString(html, 'text/html')
                    
                    base.href= url
                    dom.head.appendChild( base )

                    const css = dom.querySelector(`link[data-mfe]`)
                    const js = dom.querySelector(`script[data-mfe]`)

                    const component = dom.body.querySelector(name)
                    element.innerHTML = component.outerHTML

                    if( css ) {
                        link.rel = 'stylesheet'
                        link.href = css.href
                        document.head.appendChild(link) 
                        promises.push(new Promise((resolve, reject) => {
                            link.onload = resolve 
                            link.onerror = reject
                        })) 
                    }

                    if( js ) {
                        const script = document.createElement('script')
                        script.src = js.src
                        promises.push(new Promise((resolve, reject) => {
                            script.onload = resolve 
                            script.onerror = reject
                        }))
                        document.head.appendChild(script)
                    }

                    Promise.all(promises)
                        .then( _ => element.dataset.mfeloaded = true )
                        .catch( console.error )
                })
        })
    }
}