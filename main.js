const
overlay = document.querySelector('.overlay-modal'),
closeBtns = document.querySelectorAll('.js-modal-close'),
mainModalBtns = document.querySelectorAll('[data-main-modal]');

function showMainModal(btns) {
btns.forEach(btn => {
  btn.addEventListener('click', function (e) {
    e.preventDefault();

    const popupAttr = this.getAttribute('data-main-modal'),
      popupElem = document.querySelector(`.popup-${popupAttr}`);
    popupElem.classList.add('active');
    overlay.classList.add('active');
    document.body.classList.add('popup-opened')
  })
});

}

function closeModalByBtn(btns) {
btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const parent = this.closest('.popup');
    parent.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('popup-opened');
  });
})
}

function closeModal() {
const popup = document.querySelectorAll('.popup');
popup.forEach(item => {
  if (item.classList.contains('active')) {
    item.classList.remove('active');
  }
});
overlay.classList.remove('active');
document.body.classList.remove('popup-opened');
}

document.addEventListener('keydown', function (e) {
const key = e.key;
if (key === 'Escape') {
  closeModal();
}
})

overlay.addEventListener('click', () => {
closeModal();
});


showMainModal(mainModalBtns);
closeModalByBtn(closeBtns);
