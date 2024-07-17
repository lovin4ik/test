import { homeWorkItem } from '../components/ui/homeWorkItem';

const homeWorkList = document.getElementById('homeWorks-list');

export const renderHomeWorks = homeWorks => {
  homeWorkList.innerHTML = homeWorks
    .sort((a, b) => a.id - b.id)
    .map(work => {
      return homeWorkItem(work);
    })
    .join('');
};
