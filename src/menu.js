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