// Init Page Load for: Rice Ronin

// Target our content DIV
//  - Add header DIV
//  - Add mainContent DIV
//  - Add footer DIV

// Target Header DIV
// - Add Logo
// - Add Navigation (Home, Menu, Contact)

// Target Main Content DIV
//  - Set Background
//  - Add Inner Content DIV

// Target Footer DIV
//  - Add attribution for images


function onPageLoad() {
    const pageContent = document.querySelector('#content');

    const header = document.createElement('div');
    const main = document.createElement('div');
    const footer = document.createElement('div');

    // create header
    pageContent.appendChild(header);
    header.setAttribute("class", "header");

    // create main
    pageContent.appendChild(main);
    main.setAttribute("class", "main");

    // create footer
    pageContent.appendChild(footer);
    footer.setAttribute("class", "footer");

    // target header div
    const selectHeader = document.querySelector('.header');

    const logo = document.createElement('img');
    const nav = document.createElement('ul');
    const navHome = document.createElement('button');
    const navMenu = document.createElement('button');
    const navContact = document.createElement('button');

    selectHeader.appendChild(logo);
    logo.setAttribute("class", "logo");

    selectHeader.appendChild(nav);
    nav.setAttribute("class", "nav");

    const selectNav = document.querySelector('.nav');
    
    selectNav.appendChild(navHome);
    navHome.textContent = "Home";

    selectNav.appendChild(navMenu);
    navMenu.textContent = "Menu";

    selectNav.appendChild(navContact);
    navContact.textContent = "Contact";

    // target main div
    const selectMain = document.querySelector('.main');

    const innerContent = document.createElement('div');

    selectMain.appendChild(innerContent);
    innerContent.setAttribute("class", "inner");

    // target footer div
    const selectFooter = document.querySelector('.footer');
    
    const copyRight = document.createElement('p');

    selectFooter.appendChild(copyRight);
    copyRight.textContent = "©2023 This Company Doesn't Exist";

};

export { onPageLoad };