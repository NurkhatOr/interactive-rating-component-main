const submitPage = document.querySelector(".submit-page");
const resultPage = document.querySelector(".result-page");
const submitButton = document.querySelector(".submit-button");
const rateAgainButton = document.querySelector(".rate-again");
const result = document.getElementById("result");
const input = document.querySelectorAll(".raiting");
const form = document.getElementById("raitings-form");

input.forEach((item) => {
  item.onchange = function () {
    submitButton.removeAttribute("disabled");
  };
  result.innerHTML = item.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  showAndHide();
  result.innerHTML = form.raitings.value;
});

rateAgainButton.addEventListener("click", function () {
  showAndHide();
  submitButton.setAttribute("disabled", "disabled");
});

const showAndHide = function () {
  submitPage.classList.toggle("visually-hidden");
  resultPage.classList.toggle("visually-hidden");
};
