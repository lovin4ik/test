export interface IRoute {
	path: string
	component: () => Promise<HTMLElement>
}
