export async function notFoundPage(): Promise<HTMLElement> {
	const element = document.createElement('div')
	element.innerHTML = '404 - Not Found'

	return element
}
