const faq = document.querySelectorAll(".faq");

for (let index = 0; index < faq.length; index++) {
  faq[index].addEventListener("click", function () {
    faq[index].classList.toggle("active");
  });
}
