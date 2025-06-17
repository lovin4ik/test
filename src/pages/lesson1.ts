import type { firstLessonImgs } from '@/types/firstLessonImgs.type'
import { FIRST_LESSON_IMAGES } from './lesson1-images'
import './lesson1.css'

let lightboxImages: NodeListOf<HTMLImageElement>
let slideWidth: number
let currentPosition: number
const IS_OPEN = 'is-open'

interface IData {
	id: number
	userId: number
	title: string
	completed: boolean
}

export const lesson1Page = async () => {
	const div = document.createElement('div') as HTMLElement

	const res: IData[] = await fetch(
		'https://jsonplaceholder.typicode.com/todos'
	).then(response => response.json())

	console.log(res)

	div.innerHTML = `
		<div>
			${res.map((res: IData) => {
				return `
					<div class="todo-item">
						<h2 class="todo-title">${res.title}</h2>
						<p class="todo-status">Status: ${res.completed ? 'Completed' : 'Pending'}</p>
					</div>
				`
			})}
		</div>
		<ul 
			class="grid w-full max-w-[1200px] grid-cols-1 auto-rows-[180px] gap-2 p-0 list-none mx-auto sm:grid-cols-2 sm:auto-rows-[200px] sm:gap-3 md:grid-cols-2 md:auto-rows-[220px] lg:grid-cols-3 lg:auto-rows-[220px] xl:grid-cols-[repeat(auto-fill,minmax(380px,1fr))] xl:auto-rows-[240px] xl:w-[1200px] xl:gap-3" 
			id="imageGallery"
		>
		</ul>

		<div class="lightbox" id="lightbox">
			<div class="lightbox__overlay"></div>

			<div class="lightbox__content rounded-lg"></div>

			<div class="arrow-left absolute left-4 cursor-pointer">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="128"
					height="128"
					viewBox="0 0 24 24"
					class="fill-white transition-colors duration-300 ease-in-out hover:fill-primary"
				>
					<path
						d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"
					></path>
				</svg>
			</div>
			<div class="arrow-right absolute right-4 cursor-pointer">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="128"
					height="128"
					viewBox="0 0 24 24"
					class="text-9xl fill-white transition-colors duration-300 ease-in-out hover:fill-primary"
				>
					<path
						d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"
					></path>
				</svg>
			</div>
			<button
				type="button"
				class="lightbox__button"
				data-action="close-lightbox"
			></button>
		</div>
	`

	const imageGallery = div.querySelector('#imageGallery')!
	const lightbox = div.querySelector('#lightbox')!
	const lightboxContent = div.querySelector('.lightbox__content')!
	const btnClose = div.querySelector('.lightbox__button')!
	const arrowLeft = div.querySelector('.arrow-left')!
	const arrowRight = div.querySelector('.arrow-right')!

	imageGallery.innerHTML = FIRST_LESSON_IMAGES.map(
		(element: firstLessonImgs) => {
			return `
			<li class="gallery__item">
				<div class="gallery__link">
					<img
						class="gallery__image rounded-md bg-white/10"
						src="${element.preview}"
						data-source="${element.original}"
						alt="${element.description}"
						loading="lazy"
					/>
				</div>
			</li>
		`
		}
	).join('')

	const moveSlide = () => {
		if (currentPosition < 0) {
			currentPosition = lightboxImages.length - 1
		} else if (currentPosition > lightboxImages.length - 1) {
			currentPosition = 0
		}
		lightboxImages.forEach(image => {
			image.style.transform = `translateX(-${currentPosition * slideWidth}px)`
		})
	}

	imageGallery.addEventListener('click', (e: Event) => {
		const target = e.target as HTMLImageElement
		if (target.nodeName !== 'IMG') return

		lightbox.classList.add(IS_OPEN)
		lightboxContent.innerHTML = FIRST_LESSON_IMAGES.map(image => {
			return `<img class="lightbox__image rounded-md" src="${image.original}" alt="${image.description}" />`
		}).join('')

		lightboxImages = div.querySelectorAll('.lightbox__image')

		slideWidth = lightboxImages[0].clientWidth + 30

		lightbox.addEventListener('click', (e: Event) => {
			const target = e.target as HTMLElement
			if (target.nodeName === 'IMG') return
			lightbox.classList.remove(IS_OPEN)
		})

		currentPosition = FIRST_LESSON_IMAGES.findIndex(image => {
			return image.description === target.alt
		})

		moveSlide()
	})

	btnClose.addEventListener('click', e => {
		e.stopPropagation()
		lightbox.classList.remove(IS_OPEN)
	})

	arrowLeft.addEventListener('click', e => {
		e.stopPropagation()
		currentPosition--
		moveSlide()
	})
	arrowRight.addEventListener('click', e => {
		e.stopPropagation()
		currentPosition++
		moveSlide()
	})

	document.addEventListener('keydown', e => {
		if (e.key === 'ArrowRight') {
			currentPosition++
			moveSlide()
		} else if (e.key === 'ArrowLeft') {
			currentPosition--
			moveSlide()
		}
		if (e.key === 'Escape') {
			lightbox.classList.remove(IS_OPEN)
		}
	})

	return div
}
