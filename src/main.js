import { homeWorks } from './constants/homeWorks.constants.js'
import { projects } from './constants/projects.constants'
import { setStatistics } from './scripts/allProcentsStatictic.js'
import { renderHomeWorks } from './scripts/homeWorks.js'
import { projectsRender } from './scripts/projectsrender.js'

window.onload = () => {
	setStatistics(homeWorks)
	renderHomeWorks(homeWorks)
	projectsRender(projects)
}
