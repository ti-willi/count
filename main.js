const btnStart = document.querySelector('[data-buttonStart');
const btnBack = document.querySelector('[data-buttonBack]');
const btnNext = document.querySelector('[data-buttonNext]');
const text = document.querySelector(".text");


var count = localStorage.getItem("key") 
text.textContent = localStorage.getItem("key")

btnStart.addEventListener("click", () => {
    if (confirm("Tem certeza que deseja iniciar a contagem?") == true) {
        count = 0;
        text.textContent = 0;
    }

    
})

btnBack.addEventListener("click", () => {
    if (count <= 0) {
        count = 0;
    }
    else {
        count = parseInt(count) - 1;
    }
    
    text.textContent = count;
    localStorage.setItem("key", count);
});

btnNext.addEventListener("click", () => {
    count = parseInt(count) + 1;
    text.textContent = count;
    localStorage.setItem("key", count);
});
