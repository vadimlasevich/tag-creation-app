export const createTag = (tag) => {
  return `
      <div class="tag">
        <span>${tag.description}</span>
        <button  class="tag-btn-close btn-reset">x</button>
      </div>
    `;
};

export const createItemTags = (block) => {
  return `
    <div class="area-item">
      ${block}
      <button class="area-item__btn-close btn-reset">X</button>
    </div>
  `;
};
