export const homePage = async () => {
	const div = document.createElement('div') as HTMLElement

	div.innerHTML = `
		<h1>Home Page</h1>
		<p>Welcome to the home page!</p>
	`
	return div
}
