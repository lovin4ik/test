(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function l(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=l(o);fetch(o.href,i)}})();async function f(){const e=document.createElement("div");return e.innerHTML="404 - Not Found",e}const w=async()=>{const e=document.createElement("div");return e.innerHTML=`
		<h1>About Page</h1>
		<p>This is the about page of our application.</p>
	`,e},x=async()=>{const e=document.createElement("div");return e.innerHTML=`
		<h1>Home Page</h1>
		<p>Welcome to the home page!</p>
	`,e},g=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}];let d,m,a;const h="is-open",b=async()=>{const e=document.createElement("div"),r=await fetch("https://jsonplaceholder.typicode.com/todos").then(t=>t.json());console.log(r),e.innerHTML=`
		<div>
			${r.map(t=>`
					<div class="todo-item">
						<h2 class="todo-title">${t.title}</h2>
						<p class="todo-status">Status: ${t.completed?"Completed":"Pending"}</p>
					</div>
				`)}
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
	`;const l=e.querySelector("#imageGallery"),n=e.querySelector("#lightbox"),o=e.querySelector(".lightbox__content"),i=e.querySelector(".lightbox__button"),c=e.querySelector(".arrow-left"),v=e.querySelector(".arrow-right");l.innerHTML=g.map(t=>`
			<li class="gallery__item">
				<div class="gallery__link">
					<img
						class="gallery__image rounded-md bg-white/10"
						src="${t.preview}"
						data-source="${t.original}"
						alt="${t.description}"
						loading="lazy"
					/>
				</div>
			</li>
		`).join("");const p=()=>{a<0?a=d.length-1:a>d.length-1&&(a=0),d.forEach(t=>{t.style.transform=`translateX(-${a*m}px)`})};return l.addEventListener("click",t=>{const u=t.target;u.nodeName==="IMG"&&(n.classList.add(h),o.innerHTML=g.map(s=>`<img class="lightbox__image rounded-md" src="${s.original}" alt="${s.description}" />`).join(""),d=e.querySelectorAll(".lightbox__image"),m=d[0].clientWidth+30,n.addEventListener("click",s=>{s.target.nodeName!=="IMG"&&n.classList.remove(h)}),a=g.findIndex(s=>s.description===u.alt),p())}),i.addEventListener("click",t=>{t.stopPropagation(),n.classList.remove(h)}),c.addEventListener("click",t=>{t.stopPropagation(),a--,p()}),v.addEventListener("click",t=>{t.stopPropagation(),a++,p()}),document.addEventListener("keydown",t=>{t.key==="ArrowRight"?(a++,p()):t.key==="ArrowLeft"&&(a--,p()),t.key==="Escape"&&n.classList.remove(h)}),e},_=[{path:"#/",component:x},{path:"#/about",component:w},{path:"#/lesson1",component:b}];async function y(){const e=window.location.hash||"#/",r=_.find(i=>i.path===e),n=await(r?r.component:f)(),o=document.querySelector("#layout");typeof n=="string"?o.innerHTML=n:n instanceof HTMLElement&&(o.innerHTML="",o.appendChild(n))}document.querySelector("#app").innerHTML=`
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
`;window.addEventListener("hashchange",()=>{y()});window.addEventListener("DOMContentLoaded",()=>{y()});
