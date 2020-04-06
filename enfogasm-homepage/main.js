let menuButton = document.getElementById('menu');
let listItems = document.querySelector('#nav-ul');
document.getElementById("nav-ul").style.transition = "all 2s";
// Menu Bar
const open = () => {
    listItems.style.display = 'flex';
    menuButton.addEventListener('click', close);
    menuButton.addEventListener('click', open);
};
const close = () => {
    listItems.style.display = 'none';
    menuButton.removeEventListener('click', close);
}
menuButton.addEventListener('click', open);
