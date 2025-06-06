
document.addEventListener("DOMContentLoaded", () => {
  const refs = {
    openModalBtn: document.querySelector("[data-open-modal]"),
    closeModalBtn: document.querySelector("[data-close-modal]"),
    backdrop: document.querySelector("[data-backdrop]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.backdrop.addEventListener("click", logBackdropClick);

  function toggleModal() {
    refs.backdrop.classList.toggle("is-hidden");
  }

  function logBackdropClick() {
    console.log("Це клік у бекдроп");
  }
});
 
(() => {
    document
      .querySelector('.js-speaker-form')
      .addEventListener('submit', (e) => {
        e.preventDefault();

        new FormData(e.currentTarget).forEach((value, name) => {
          console.log(`${name}: ${value}`);
        });
      });
  })();







// const refs = {
//     openModalBtn: document.querySelector("[data-open-modal]"),
//     closeModalBtn: document.querySelector("[data-close-modal]"),
//     backdrop: document.querySelector("[data-backdrop]"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   refs.backdrop.addEventListener("click", logBackdropClick);

//   function toggleModal() {
//     refs.backdrop.classList.toggle("is-hidden");
//   }

//   function logBackdropClick() {
//     console.log("Это клик в бекдроп");
//   }

