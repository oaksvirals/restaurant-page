function makeHome() {
    const inner = document.querySelector('.inner');
    
    const welcome = document.createElement('div');
    const hours = document.createElement('div');
    const location = document.createElement('div');

    inner.appendChild(welcome);
    welcome.setAttribute("class", "welcome");
    inner.appendChild(hours);
    hours.setAttribute("class", "hours");
    inner.appendChild(location);
    location.setAttribute("class", "location");

    // welcome
    const selectWelcome = document.querySelector('.welcome');

    const welcomeTitle = document.createElement('h2');
    welcomeTitle.textContent = "Welcome to Our Restaurant!";

    selectWelcome.appendChild(welcomeTitle);

    // hours
    const selectHours = document.querySelector('.hours');

    const hoursTitle = document.createElement('h2');
    hoursTitle.textContent = "Hours of Operation";

    selectHours.appendChild(hoursTitle);

    // location
    const selectLocation = document.querySelector('.location');

    const locationTitle = document.createElement('h2');
    locationTitle.textContent = "Location";

    selectLocation.appendChild(locationTitle);

};

function clearHome() {
    const inner = document.querySelector('.inner');
    inner.textContent = '';
};

export {
    makeHome,
    clearHome
};