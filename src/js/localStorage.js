export const setLocalTags = (tags) => {
  localStorage.setItem('tags', JSON.stringify(tags));
};

export const setLocalItemTags = (item) => {
  localStorage.setItem('items', JSON.stringify(item));
};

export const getLocalTags = () => {
  let tags;
  return !localStorage.tags ? (tags = []) : (tags = JSON.parse(localStorage.getItem('tags')));
};

export const getLocalItemTags = () => {
  let itemsTags;
  return !localStorage.items ? (itemsTags = []) : (itemsTags = JSON.parse(localStorage.getItem('items')));
};
