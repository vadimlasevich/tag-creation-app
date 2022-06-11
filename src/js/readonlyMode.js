const addReadonlyMode = () => {
  const readonlyCheckbox = document.querySelector('.tags-app__readonly-btn > input');
  const addTagInput = document.querySelector('.tags-app__input');
  const saveTagsBtn = document.querySelector('.tags-app__btn-save');
  const deleteTagBtns = document.querySelectorAll('.tag-btn-close');
  const deleteItemBtns = document.querySelectorAll('.area-item__btn-close');

  readonlyCheckbox.addEventListener('change', function () {
    if (this.checked) {
      deleteTagBtns.forEach((deleteBtn) => {
        deleteBtn.disabled = true;
      });
      deleteItemBtns.forEach((deleteItemBtn) => {
        deleteItemBtn.disabled = true;
      });
      saveTagsBtn.disabled = true;
      addTagInput.readOnly = true;
    } else {
      deleteTagBtns.forEach((deleteBtn) => {
        deleteBtn.disabled = false;
      });
      deleteItemBtns.forEach((deleteItemBtn) => {
        deleteItemBtn.disabled = false;
      });
      addTagInput.readOnly = false;
      saveTagsBtn.disabled = false;
    }
  });
};

export default addReadonlyMode;
