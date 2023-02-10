const submitPage = document.querySelector(".submit-page");
const resultPage = document.querySelector(".result-page");
const button = document.querySelector(".submit-button");
const rateAgain = document.querySelector(".rate-again");
const numbers = document.querySelector(".raitings");
const rates = numbers.querySelectorAll(".btn");
const result = document.getElementById("result");

button.addEventListener("click", function () {
  submitPage.classList.add("visually-hidden");
  resultPage.classList.remove("visually-hidden");
});

rateAgain.addEventListener("click", function () {
  submitPage.classList.remove("visually-hidden");
  resultPage.classList.add("visually-hidden");
});

rates.forEach((btn) => {
  btn.addEventListener("click", () => {
    result.innerHTML = btn.innerHTML;
  });
});
