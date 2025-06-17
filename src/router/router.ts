let currentRoute: string

export function router() {
	currentRoute = window.location.hash.slice(1) || '/'
}
