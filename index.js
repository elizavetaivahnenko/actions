

let actions = document.querySelectorAll('.album img');    
actions.forEach(event => {
    event.addEventListener('click', actionsImg);
});

function actionsImg() {
    this.classList.toggle('active');
}







