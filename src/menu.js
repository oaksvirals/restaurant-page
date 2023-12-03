function makeMenu() {
    const inner = document.querySelector('.inner');

    // set active nav
    const contactNav = document.querySelector('.menuButton');
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

    const sideList = document.createElement('div');
    sideList.setAttribute('class', 'sideList');
    targetSides.appendChild(sideList);

        // baby bok choy stir fry
        const babyBok = document.createElement('h3');
        babyBok.setAttribute('class', 'dish')
        babyBok.textContent = 'Baby Bok Choy Stir Fry';
        sideList.appendChild(babyBok);

        const babyBokImg = document.createElement('img');
        babyBokImg.setAttribute('class', 'baby-bok dishImg dish');
        sideList.appendChild(babyBokImg);

        const babyBokInfo = document.createElement('p');
        babyBokInfo.setAttribute('class', 'food-info dish');
        babyBokInfo.setAttribute('style', 'white-space: pre;');
        babyBokInfo.textContent = 'Pair your rice dish with our famous,\r\n';
        babyBokInfo.textContent += 'baby bok choy stir fry.\r\n';
        babyBokInfo.textContent += '- $3';
        sideList.appendChild(babyBokInfo);

        // chinese coleslaw
        const chineseSlaw = document.createElement('h3');
        chineseSlaw.setAttribute('class', 'dish')
        chineseSlaw.textContent = 'Chinese Coleslaw';
        sideList.appendChild(chineseSlaw);

        const chineseSlawImg = document.createElement('img');
        chineseSlawImg.setAttribute('class', 'chinese-slaw dishImg dish');
        sideList.appendChild(chineseSlawImg);

        const chineseSlawInfo = document.createElement('p');
        chineseSlawInfo.setAttribute('class', 'food-info dish');
        chineseSlawInfo.setAttribute('style', 'white-space: pre;');
        chineseSlawInfo.textContent = 'Zesty veggi chinese coleslaw,\r\n';
        chineseSlawInfo.textContent += 'a great way to get more vegetables in.\r\n';
        chineseSlawInfo.textContent += '- $3';
        sideList.appendChild(chineseSlawInfo);

    // drinks
    const drinksTitle = document.createElement('h2');
    drinksTitle.textContent = 'Drinks';
    targetDrinks.appendChild(drinksTitle);

    const drinkList = document.createElement('div');
    drinkList.setAttribute('class', 'drinkList');
    targetDrinks.appendChild(drinkList);

        // bubble tea
        const bubbleTea = document.createElement('h3');
        bubbleTea.setAttribute('class', 'dish')
        bubbleTea.textContent = 'Bubble Tea';
        drinkList.appendChild(bubbleTea);

        const bubbleTeaImg = document.createElement('img');
        bubbleTeaImg.setAttribute('class', 'bubble-tea dishImg dish');
        drinkList.appendChild(bubbleTeaImg);

        const bubbleTeaInfo = document.createElement('p');
        bubbleTeaInfo.setAttribute('class', 'food-info dish');
        bubbleTeaInfo.setAttribute('style', 'white-space: pre;');
        bubbleTeaInfo.textContent = 'Tea and milk base with\r\n';
        bubbleTeaInfo.textContent += 'tapioca pearls.\r\n';
        bubbleTeaInfo.textContent += '- $3';
        drinkList.appendChild(bubbleTeaInfo);

        // ramune
        const ramune = document.createElement('h3');
        ramune.setAttribute('class', 'dish')
        ramune.textContent = 'Ramune Soft Drink';
        drinkList.appendChild(ramune);

        const ramuneImg = document.createElement('img');
        ramuneImg.setAttribute('class', 'ramune dishImg dish');
        drinkList.appendChild(ramuneImg);

        const ramuneInfo = document.createElement('p');
        ramuneInfo.setAttribute('class', 'food-info dish');
        ramuneInfo.setAttribute('style', 'white-space: pre;');
        ramuneInfo.textContent = 'Japanese soft drink.\r\n';
        ramuneInfo.textContent += 'Original or Strawberry\r\n';
        ramuneInfo.textContent += '- $3';
        drinkList.appendChild(ramuneInfo);

};

export {
    makeMenu
};