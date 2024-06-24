const faqIcons = document.querySelectorAll(".faq__container__question__icon");

faqIcons.forEach(icon => {
    icon.addEventListener("click", () => {

        const answer = icon.parentElement.parentElement.lastElementChild;

        answer.classList.toggle("faq__container__answer--active");

        if(!answer.classList.contains("faq__container__answer--active")) {
            icon.src = "./assets/images/icon-plus.svg";
        } else {
            icon.src = "./assets/images/icon-minus.svg";
        }

    });

})