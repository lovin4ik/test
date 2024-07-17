import { projectItem } from '../components/ui/projectsItem'

const projectList = document.getElementById('projectsList')

export const projectsRender = projects => {
	return (projectList.innerHTML = projects
		.map(project => projectItem(project))
		.join(''))
}
