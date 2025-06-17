import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
	base: '/test/',
	plugins: [tailwindcss()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src')
		}
	}
})
