import { notFoundPage } from '@/pages/notFound'
import { routes } from '@/router/routes'
import type { IRoute } from '@/types/route.interface'

export async function router(): Promise<void> {
	const currentHash: string = window.location.hash || '#/'
	const potentialMatch: IRoute | undefined = routes.find(
		(route: IRoute) => route.path === currentHash
	)

	const view: () => Promise<HTMLElement> = potentialMatch
		? potentialMatch.component
		: notFoundPage

	const layout = document.querySelector('#layout')
	if (layout) {
		layout.innerHTML = await view()
	}
}
