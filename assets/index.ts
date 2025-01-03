export const importHtml = ( url, config = null ) => {
	return fetch( url, config )
		.then( response => response.text().then( html => ({ response, html  })) )
}

export const importCss = ( url, options = null ) => {
	return new Promise((resolve, reject) => {
		const link = document.createElement('link')
		link.rel = 'stylesheet'
		link.href = url 
		link.onload = resolve 
		link.onerror = reject
		document.head.appendChild(link)
	})
}

export const importJs = ( url, { async = true } = {} ) => {
	return new Promise((resolve, reject) => {
		const script = document.createElement('script')
		script.src = url
		script.async = async
		script.onload = resolve
		script.onerror = reject
		document.head.appendChild(script)
	})
}