import { renderBlockTags } from './renderHTML.js';
import { setLocalTags, getLocalTags } from './localStorage.js';

const addTag = () => {
  const addTagInput = document.querySelector('.tags-app__input');
  const addTagBtn = document.querySelector('.tags-app__btn-add');

  function Tag(description) {
    this.description = description;
  }

  addTagBtn.addEventListener('click', () => {
    let tags = getLocalTags();

    tags.push(new Tag(addTagInput.value));

    if (addTagInput.value) {
      setLocalTags(tags);
      renderBlockTags();
    }

    addTagInput.value = '';
  });
};

export default addTag;
