"use strict";
const overLay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const showModal = document.querySelector(".showModal");
const escapeButton = document.querySelector(".modal__button--escape");
const okayButton = document.querySelector(".modal__button--affirmative");
const cancelButton = document.querySelector(".modal__button--negative");

const openModal = function () {
  overLay.classList.remove("hidden");
  modal.classList.remove("hidden");
  modal.focus();
};

const closeModal = function () {
  overLay.classList.add("hidden");
  modal.classList.add("hidden");
};

showModal.addEventListener("click", openModal);

escapeButton.addEventListener("click", closeModal);

overLay.addEventListener("click", closeModal);

okayButton.addEventListener("click", closeModal);

cancelButton.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});
