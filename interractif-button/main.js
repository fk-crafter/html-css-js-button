const button = document.querySelector(".button");

button.addEventListener("click", () => {
    button.classList.add("active");
    setTimeout(() => {
        button.classList.remove("active");
    }, 4000);
});
