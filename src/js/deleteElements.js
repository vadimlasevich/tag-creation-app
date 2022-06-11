import { renderBlockTags, renderAreaItems } from './renderHTML';
import { setLocalTags, setLocalItemTags, getLocalTags, getLocalItemTags } from './localStorage.js';

export const deleteTag = () => {
  const deleteTagBtns = document.querySelectorAll('.tag-btn-close');
  let tags = getLocalTags();

  deleteTagBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      tags.splice(index, 1);
      setLocalTags(tags);
      renderBlockTags();
    });
  });
};

export const deleteItemTags = () => {
  const deleteItemBtns = document.querySelectorAll('.area-item__btn-close');
  let itemsTags = getLocalItemTags();

  deleteItemBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      const areaItems = document.querySelectorAll('.area-item');

      areaItems[index].classList.add('animation');

      setTimeout(() => {
        itemsTags.splice(index, 1);
        setLocalItemTags(itemsTags);
        renderAreaItems();
      }, 500);
    });
  });
};
