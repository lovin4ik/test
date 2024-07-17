import { addAnimation } from '../hooks/addAnimation.js';
const statistics = document.getElementById('statics');

export const setStatistics = stats => {
  let Compeleted = (stats.length / 26) * 100;

  Compeleted = `${Math.round(Compeleted)}`;

  addAnimation(Compeleted);

  statistics.innerHTML = `
				<div
					class="bg-white rounded-3xl w-52 sm:w-60 md:w-72 lg:w-96 h-3 overflow-hidden shadow-lg shadow-white/30 border border-solid border-border"
				>
					<span 
						class="bg-gradient-to-tr from-primary via-horizonTeal-200 to-horizonGreen-200 h-full block" 
						style='width: ${Compeleted}%; animation: expansion 1s 1 ease-in-out;'>
					</span>
				</div>
				<span
					class="text-xl font-medium text-horizonGreen-400"
				>
					${Compeleted}%
				</span>
	`;
};
