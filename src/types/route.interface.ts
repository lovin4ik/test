export interface IRoute {
	path: string
	component: () => Promise<string | HTMLElement> | string | HTMLElement
}
