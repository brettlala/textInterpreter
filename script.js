const btn = document.querySelector("button");
const container = document.querySelector(".container");


btn.addEventListener('click', () => {
    btn.classList.toggle('dark');
    container.classList.toggle('dark');
})