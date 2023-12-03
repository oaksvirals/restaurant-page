function makeMenu() {
    const inner = document.querySelector('.inner');

    // set active nav
    const contactNav = document.querySelector('.contactButton');
    contactNav.style.color = 'var(--red)';

    // categories
    const dishes = document.createElement('div');
    const sides = document.createElement('div');
    const drinks = document.createElement('div');

    inner.appendChild(dishes);
    inner.appendChild(sides);
    inner.appendChild(drinks);

    dishes.setAttribute('class', 'dishes');
    sides.setAttribute('class', 'sides');
    drinks.setAttribute('class', 'drinks');

    const targetDishes = document.querySelector('.dishes');
    const targetSides = document.querySelector('.sides');
    const targetDrinks = document.querySelector('.drinks');

    // dishes
    const dishesTitle = document.createElement('h2');
    dishesTitle.textContent = 'Main Dishes';
    targetDishes.appendChild(dishesTitle);

    const dishList = document.createElement('div');
    dishList.setAttribute('class', 'dishList');
    targetDishes.appendChild(dishList);

        // kimchi fried rice
        const kimchiRice = document.createElement('h3');
        kimchiRice.setAttribute('class', 'dish')
        kimchiRice.textContent = 'Kimchi Fried Rice';
        dishList.appendChild(kimchiRice);

        const kimchiRiceImg = document.createElement('img');
        kimchiRiceImg.setAttribute('class', 'kimchi-rice dishImg dish');
        dishList.appendChild(kimchiRiceImg);

        const kimchiRiceInfo = document.createElement('p');
        kimchiRiceInfo.setAttribute('class', 'food-info dish');
        kimchiRiceInfo.setAttribute('style', 'white-space: pre;');
        kimchiRiceInfo.textContent = 'Delicious fried rice with kimchi, crispy pan fried spam,\r\n';
        kimchiRiceInfo.textContent += 'served with a fried egg on top.\r\n';
        kimchiRiceInfo.textContent += '- $8';
        dishList.appendChild(kimchiRiceInfo);

        // lao crispy rice salad
        const laoRice = document.createElement('h3');
        laoRice.setAttribute('class', 'dish')
        laoRice.textContent = 'Lao Crispy Rice Salad';
        dishList.appendChild(laoRice);

        const laoRiceImg = document.createElement('img');
        laoRiceImg.setAttribute('class', 'lao-rice dishImg dish');
        dishList.appendChild(laoRiceImg);

        const laoRiceInfo = document.createElement('p');
        laoRiceInfo.setAttribute('class', 'food-info dish');
        laoRiceInfo.setAttribute('style', 'white-space: pre;');
        laoRiceInfo.textContent = 'Deep fried crispy rice balls, broken into pieces,\r\n';
        laoRiceInfo.textContent += 'tossed with herbs and sweet and sour dressing.\r\n';
        laoRiceInfo.textContent += '- $7';
        dishList.appendChild(laoRiceInfo);

        // chinese sticky rice
        const stickyRice = document.createElement('h3');
        stickyRice.setAttribute('class', 'dish')
        stickyRice.textContent = 'Chinese Sticky Rice';
        dishList.appendChild(stickyRice);

        const stickyRiceImg = document.createElement('img');
        stickyRiceImg.setAttribute('class', 'sticky-rice dishImg dish');
        dishList.appendChild(stickyRiceImg);

        const stickyRiceInfo = document.createElement('p');
        stickyRiceInfo.setAttribute('class', 'food-info dish');
        stickyRiceInfo.setAttribute('style', 'white-space: pre;');
        stickyRiceInfo.textContent = 'Chewy sticky rice, toasted peanuts, and\r\n';
        stickyRiceInfo.textContent += 'chinese sausage with sweet soy sauce.\r\n';
        stickyRiceInfo.textContent += '- $9';
        dishList.appendChild(stickyRiceInfo);


    // sides
    const sidesTitle = document.createElement('h2');
    sidesTitle.textContent = 'Sides';
    targetSides.appendChild(sidesTitle);

    // drinks
    const drinksTitle = document.createElement('h2');
    drinksTitle.textContent = 'Drinks';
    targetDrinks.appendChild(drinksTitle);

};

export {
    makeMenu
};