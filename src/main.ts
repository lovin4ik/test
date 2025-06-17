import { router } from '@/router/router'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
	<h1>Welcome to the App!</h1>
	<nav>
		<ul>
			<li><a href="#/">Home</a></li>
			<li><a href="#/about">About</a></li>
			<li><a href="#/contact">Contact</a></li>
			<li><a href="#/lesson1">lesson1</a></li>
		</ul>
	</nav>
	<div id="layout"></div>
`

window.addEventListener('hashchange', () => {
	router()
})
window.addEventListener('DOMContentLoaded', () => {
	router()
})
