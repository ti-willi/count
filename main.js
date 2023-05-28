const button = document.querySelectorAll('[data-button]');
const text = document.querySelector('[data-count]');

let count = localStorage.getItem("key"); 
text.textContent = count;

button.forEach( (e) => {
    e.addEventListener("click", (event) => {
        updatedCount(event.target.dataset.button);
        resetCount(event.target.dataset.button);
        keyValueVerification();
    })
})

function keyValueVerification() {
    if (isNaN(count)) {
        count = 1;
        localStorage.setItem("key", count);
        text.textContent = count;
    }
}

function updatedCount(click) {
    if (click === '-') {
        (count <= 0) ? count = 0 : count = parseInt(count) - 1;
    }
    else {
        count = parseInt(count) + 1; 
    }
    text.textContent = count;
    localStorage.setItem("key", count);
}

function resetCount(click) {
    if (click == 'resetCount') {
        if (confirm("Reiniciar a contagem?") == true) {
            count = 0;
            text.textContent = 0;
        }
        else {
            count += - 1
            text.textContent = count;
        }
    }
    localStorage.setItem("key", count);
}




