import css from "./style.css";
import { onPageLoad } from "./page-load";
import { makeHome } from "./home";
import { makeContact } from "./contact";
import { makeMenu } from "./menu";

onPageLoad();

const home = document.querySelector('.homeButton');
const menu = document.querySelector('.menuButton');
const contact = document.querySelector('.contactButton');

home.addEventListener('click', displayHome);
contact.addEventListener('click', displayContact);

function displayHome() {
    clearPage();
    makeHome();
};

// function displayMenu() {
//     clearPage();
//     makeHome();
// };

function displayContact() {
    clearPage();
    makeContact();
};

function clearPage() {
    const inner = document.querySelector('.inner');
    inner.textContent = '';

    home.style.color = '';
    menu.style.color = '';
    contact.style.color = '';
};

// makeHome();
makeMenu();