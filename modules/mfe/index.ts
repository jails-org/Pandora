
window.__jails__mfes = []

export const MfeHost = {
    exportMFE( m ) {
        window.__jails__mfes.push( m )
        const { name, module, dependencies, components } = m
        return {
            name,
            module,
            dependencies,
            components
        }
    }
}

export const MfeClient = {
    install( jails, mfes ) {
        mfes.forEach(fetchAll(jails))
        return this
    }
}

const loadCss = (url) => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = url
    document.head.appendChild(link)
}

const loadScript = ( url ) => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script')
        script.src = url
        script.onload = resolve
        document.head.appendChild(script)
    })
}

const loadHTML = (html) => {
    return fetch(html)
        .then( response => response.text() )
}

const fetchAll = (jails) => ({ name, js, css, target, html, dependencies }) => {
    
    const element = document.querySelector(target)

    if( css ) {
        loadCss(css)
    }

    if( js ) {
        
        loadScript(js)

            .then( _ => {

                const mfe = window.__jails__mfes.find( mfe => mfe.name == name )
                mfe.components?.forEach( component => jails.register(component.name, component.module, component.dependencies))
                jails.register(mfe.name, mfe.module, { ...mfe.dependencies, ...dependencies })

                if( html ) {
                    loadHTML(html)
                        .then( xhtml => {
                            element.innerHTML = xhtml
                            jails.start(element) 
                        }) 
                }else {
                    jails.start(element) 
                }
            })
    }
}