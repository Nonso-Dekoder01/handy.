// HAMBURGER MENU
const toggleButton = document.getElementById('toggleButton');
const navLinks1 = document.getElementById('navLinks1');
const navLinks2 = document.getElementById('navLinks2');

toggleButton.addEventListener('click', ()=> {
    navLinks1.classList.toggle('active');
    navLinks2.classList.toggle('active');
})

// DROPDOWN
