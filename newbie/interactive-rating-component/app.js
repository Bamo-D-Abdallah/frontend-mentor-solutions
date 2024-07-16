const submitButton = document.querySelector(".js-submit");
const radioButtons = document.querySelectorAll(".js-radio");
const tagElement = document.querySelector(".js-tag");
const successCard = document.querySelector(".js-success-card");
const submitCard = document.querySelector(".js-submit-card");

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    let rating = 0;
    radioButtons.forEach(radio => {
        if(radio.checked) {
            rating = radio.value;
        }
    })

    if(rating > 0) {
        submitCard.style.display = "none";
        successCard.style.display = "flex";
        tagElement.innerText = `You selected ${rating} out of 5`;
    }
})
