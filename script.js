// 1. Zobrazení a skrytí dalšího tipu
const moreButton = document.getElementById("moreButton");
const moreText = document.getElementById("moreText");

moreButton.addEventListener("click", function () {
    moreText.classList.toggle("hidden");

    if (moreText.classList.contains("hidden")) {
        moreButton.textContent = "Zobrazit další tip";
    } else {
        moreButton.textContent = "Skrýt tip";
    }
});


// 2. Jednoduchý kvíz
const answers = document.querySelectorAll(".answer");
const quizResult = document.getElementById("quizResult");

answers.forEach(function (answer) {
    answer.addEventListener("click", function () {
        if (answer.dataset.correct === "true") {
            quizResult.textContent = "Správně! Přilba je důležitou součástí bezpečné jízdy.";
        } else {
            quizResult.textContent = "To není správná odpověď. Zkus to znovu.";
        }
    });
});


// 3. Reakce na formulář
const routeForm = document.getElementById("routeForm");
const route = document.getElementById("route");
const routeResult = document.getElementById("routeResult");

routeForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (route.value === "") {
        routeResult.textContent = "Nejdříve vyber typ trasy.";
        return;
    }

    routeResult.textContent =
        "Vybral/a sis: " + route.options[route.selectedIndex].text + ". To zní jako dobrá volba!";
});