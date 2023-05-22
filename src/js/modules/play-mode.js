import { body, sidebarMenu } from "./globals";

let checkbox = document.getElementById("play-mode-checkbox");

checkbox.addEventListener("change", function (e) {
    body.classList.toggle("play", !e.currentTarget.checked);

    if (body.dataset["category_id"] !== undefined) {
        const id = body.dataset["category_id"];
        sidebarMenu.querySelector(`.nav-link[data-id="${id}"]`).click();
    }
});
