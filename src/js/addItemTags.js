import { setLocalTags, setLocalItemTags, getLocalItemTags } from './localStorage.js';
import { renderBlockTags, renderAreaItems } from './renderHTML.js';

const addItemTags = () => {
  const saveTagsBtn = document.querySelector('.tags-app__btn-save');
  const reset = [];

  function Item(item) {
    this.item = item;
  }

  saveTagsBtn.addEventListener('click', () => {
    const blockTags = document.querySelector('.tags-app__block-tags');

    let itemsTags = getLocalItemTags();

    itemsTags.push(new Item(blockTags.outerHTML));

    setLocalTags(reset);
    setLocalItemTags(itemsTags);
    renderBlockTags();
    renderAreaItems();
  });
};

export default addItemTags;
