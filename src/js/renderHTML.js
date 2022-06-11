import { createTag, createItemTags } from './creatingElements';
import { getLocalTags, getLocalItemTags } from './localStorage.js';
import { deleteTag, deleteItemTags } from './deleteElements';
import addReadonlyMode from './readonlyMode';

export const renderBlockTags = () => {
  const blockTags = document.querySelector('.tags-app__block-tags');
  const saveTagsBtn = document.querySelector('.tags-app__btn-save');
  const readonlyBtn = document.querySelector('.tags-app__readonly-btn');

  let tags = getLocalTags();

  blockTags.innerHTML = '';
  if (tags.length > 0) {
    tags.forEach((tag, index) => {
      blockTags.innerHTML += createTag(tag, index);
    });
  }

  if (tags.length === 0) {
    saveTagsBtn.style.display = '';
    readonlyBtn.style.display = '';
  } else {
    saveTagsBtn.style.display = 'block';
    readonlyBtn.style.display = 'flex';
  }

  deleteTag();
  addReadonlyMode();
};

export const renderAreaItems = () => {
  const areaItems = document.querySelector('.tags-app__area-items');

  let itemsTags = getLocalItemTags();

  areaItems.innerHTML = '';

  if (itemsTags.length > 0) {
    itemsTags.forEach((itemTags) => {
      areaItems.innerHTML += createItemTags(itemTags.item);
    });
  }

  deleteItemTags();
};
