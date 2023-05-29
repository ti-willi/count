const button = document.querySelectorAll('[data-button]');
const text = document.querySelector('[data-count]');

let count = parseInt(localStorage.getItem("key"));
keyValueVerification(); 
text.textContent = count;

button.forEach( (e) => {
    e.addEventListener("click", (event) => {
        updatedCount(event.target.dataset.button);
        resetCount(event.target.dataset.button);
    })
})

document.addEventListener("keyup", (event) => {
    if (event.code === "ArrowRight") {
        count += 1;
    }
    else if (event.code === "ArrowLeft") {
        (count <= 0) ? count = 0 : count += - 1;
    }
    else if (event.code === "Delete") {
        resetCount(event);
    }
    text.textContent = count;
    localStorage.setItem("key", count);
})

function keyValueVerification() {
    if (isNaN(count)) {
        count = 0;
        localStorage.setItem("key", count);
        text.textContent = count;
    }
}

function updatedCount(click) {
    if (click === '-' || click.code === 'Arrowleft') {
        (count <= 0) ? count = 0 : count += - 1;
    }
    else {
        count += 1; 
    }
    text.textContent = count;
    localStorage.setItem("key", count);
}

function resetCount(click) {
    if (click === 'resetCount' || click.code === "Delete") {
        if (confirm("Reiniciar a contagem?") == true) {
            count = 0;
            text.textContent = 0;
        }
        else {
            count += - 1;
            text.textContent = count;
        }
    }
    localStorage.setItem("key", count);
}







