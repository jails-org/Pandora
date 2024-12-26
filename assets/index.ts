export const importCss = ({ url }) => {
    return new Promise((resolve, reject) => {
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = url 
        link.onload = resolve 
        link.onerror = reject
        document.head.appendChild(link)
    })
}

export const importJs = ({ url, async = true }) => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script')
        script.src = url
        script.async = async
        script.onload = resolve
        script.onerror = reject
        document.head.appendChild(script)
    })
}

export const importHtml = ({ url, ...config }) => {
    return fetch( url, config )
        .then( response => response.text().then( html => ({ response, html  })) )
}