var modalClose = true;

let modalContent = document.querySelector(".modal-content");
modalContent.addEventListener("click", () => {
  modalClose = false;
});

let commentModal = document.querySelector(".modal-wrap");
commentModal.addEventListener("click", () => {
  if (modalClose) {
    commentModalClose();
  }
  modalClose = true;
});

let commentButton = document.querySelector(".comment-button");
commentButton.addEventListener("click", () => {
  commentModalOpen();
});

let commentButtonClose = document.querySelector(".commet-button-close");
commentButtonClose.addEventListener("click", () => {
  commentModalClose();
});

function commentModalClose() {
  commentModal.classList.add("disabled");
}

function commentModalOpen() {
  commentModal.classList.remove("disabled");
}
