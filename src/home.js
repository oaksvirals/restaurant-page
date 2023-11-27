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
    const welcomeText = document.createElement('p');

    welcomeTitle.textContent = "Welcome to Our Restaurant";
    welcomeText.textContent = "We have the finest rice based dishes on planet earth! lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ";

    selectWelcome.appendChild(welcomeTitle);
    selectWelcome.appendChild(welcomeText);

    // hours
    const selectHours = document.querySelector('.hours');

    const hoursTitle = document.createElement('h2');
    const hoursText = document.createElement('p');

    hoursTitle.textContent = "Hours of Operation";

    hoursText.setAttribute('style', 'white-space: pre;');
    hoursText.textContent = "Monday: 11am - 10pm \r\n";
    hoursText.textContent += "Tuesday: 11am - 10pm \r\n";
    hoursText.textContent += "Wednesday: 11am - 10pm \r\n";
    hoursText.textContent += "Thursday: 11am - 10pm \r\n";
    hoursText.textContent += "Friday: 10am - 12pm \r\n";
    hoursText.textContent += "Saturday: 10am - 12pm \r\n";
    hoursText.textContent += "Sunday: 11am - 10pm \r\n";

    selectHours.appendChild(hoursTitle);
    selectHours.appendChild(hoursText);

    // location
    const selectLocation = document.querySelector('.location');

    const locationTitle = document.createElement('h2');
    const locationText = document.createElement('p');

    locationTitle.textContent = "Location";
    locationText.textContent = "123 China Town, Birmingham, AL 33600";

    selectLocation.appendChild(locationTitle);
    selectLocation.appendChild(locationText);

};

function clearHome() {
    const inner = document.querySelector('.inner');
    inner.textContent = '';
};

export {
    makeHome,
    clearHome
};