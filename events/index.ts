
export const throttle = (fn, wait = 100) => {
	let time = Date.now()
	return () => {
		if ((time + wait - Date.now()) < 0) {
			fn()
			time = Date.now()
		}
	}
}

export const debounce = (func, timeout = 250) => {
    let timer
    return (...args) => {
      clearTimeout(timer)
      timer = setTimeout(() => { func.apply(this, args) }, timeout)
    }
}


export const isVisible = ( target, { root = null, rootMargin = '0px', threshold = 0 } = {}) => {
	return new Promise((resolve, reject) => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach( entry => {
				if( entry.isIntersecting ) {
					resolve(entries)
					observer.unobserve( target)
				}
			})
		}, { root, rootMargin, threshold })
		observer.observe( target )
	})
}