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

    // header
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
    navHome.setAttribute('class', 'homeButton');

    selectNav.appendChild(navMenu);
    navMenu.textContent = "Menu";
    navMenu.setAttribute('class', 'menuButton');

    selectNav.appendChild(navContact);
    navContact.textContent = "Contact";
    navContact.setAttribute('class', 'contactButton');

    // main
    const selectMain = document.querySelector('.main');

    const innerContent = document.createElement('div');

    selectMain.appendChild(innerContent);
    innerContent.setAttribute("class", "inner");

    // footer
    const selectFooter = document.querySelector('.footer');
    
    const copyRight = document.createElement('p');

    selectFooter.appendChild(copyRight);
    copyRight.textContent = "©2023 This Business Doesn't Exist";

};

export { onPageLoad };