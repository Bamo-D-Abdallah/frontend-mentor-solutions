const categoryContainer = document.querySelector('.result-card__category-container');


(async function() {
    const jsonFile = await fetch("./data.json");
    const categories = await jsonFile.json();
    const colors = ["read", "yellow", "green", "blue"];

    for(let i = 0; i < categories.length; i++) {
        const categoryElement = document.createElement("div");
        categoryElement.classList.add("result-card__category");
        categoryElement.classList.add("result-card__category--" + colors[i]);


        const categoryIconElement = document.createElement("img");
        categoryIconElement.src = categories[i].icon;
        categoryIconElement.classList.add("result-card__category-icon");

        const categoryTextElement = document.createElement("p");
        categoryTextElement.textContent = categories[i].category;
        categoryTextElement.classList.add("result-card__category-text");



        const categoryScoreElement = document.createElement("p");
        categoryScoreElement.innerText = categories[i].score + "";
        categoryScoreElement.classList.add("result-card__category-score");


        categoryElement.append(categoryIconElement);
        categoryElement.append(categoryTextElement);
        categoryElement.append(categoryScoreElement);

        categoryContainer.append(categoryElement);
    }
})();
