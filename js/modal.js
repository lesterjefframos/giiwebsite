const btns = document.querySelectorAll("[data-target]");
const closeBtns = document.querySelectorAll(".modal-close");

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector(btn.dataset.target).classList.add("modal-show")
    });
});

closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector(btn.dataset.target).classList.remove("modal-show")
    });
});

