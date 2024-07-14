const categoryContainer = document.querySelector('.result-card__category-container');


(async function() {
    const jsonFile = await fetch("./data.json");
    const categories = await jsonFile.json();
    const colors = ["red", "yellow", "green", "blue"];

    for(let i = 0; i < categories.length; i++) {
        const categoryElement = document.createElement("div");
        categoryElement.classList.add("result-card__category");
        categoryElement.classList.add(colors[i] + "-background");


        const categoryContentContainer = document.createElement("div");
        categoryContentContainer.classList.add("result-card__category-content");

        const categoryIconElement = document.createElement("img");
        categoryIconElement.src = categories[i].icon;
        categoryIconElement.setAttribute("alt", "Icon of the category");
        categoryIconElement.classList.add("result-card__category-icon");

        const categoryTextElement = document.createElement("p");
        categoryTextElement.textContent = categories[i].category;
        categoryTextElement.classList.add("result-card__category-text");
        categoryTextElement.classList.add(colors[i] + "-color");



        categoryContentContainer.append(categoryIconElement);
        categoryContentContainer.append(categoryTextElement);


        const categoryScoreElement = document.createElement("p");

        const categoryScoreMax = document.createElement("span");
        categoryScoreMax.innerText = " / 100";

        categoryScoreElement.innerText = categories[i].score + "";
        categoryScoreElement.classList.add("result-card__category-score");

        categoryScoreElement.append(categoryScoreMax);

        categoryElement.append(categoryContentContainer);
        categoryElement.append(categoryScoreElement);

        categoryContainer.append(categoryElement);
    }
})();
