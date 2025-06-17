import { aboutPage } from '@/pages/about'
import { homePage } from '@/pages/home'
import { lesson1Page } from '@/pages/lesson1'
import type { IRoute } from '@/types/route.interface'

export const routes: IRoute[] = [
	{
		path: '#/',
		component: homePage
	},
	{
		path: '#/about',
		component: aboutPage
	},
	{
		path: '#/lesson1',
		component: lesson1Page
	}
]
