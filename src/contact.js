function makeContact() {
    const inner = document.querySelector('.inner');
    
    const contactArea = document.createElement('div');
    contactArea.setAttribute('class', 'contact');

    inner.appendChild(contactArea);

    // title
    const contactTitle = document.createElement('h2');
    contactTitle.textContent = 'Contact Us';

    contactArea.appendChild(contactTitle);

    // admin area
    const adminsArea = document.createElement('div');
    
    contactArea.appendChild(adminsArea);

    // admin one
    const adminOne = document.createElement('div');
    adminOne.setAttribute('class', 'adminOne');
    contactArea.appendChild(adminOne);

    const targetAdminOne = document.querySelector('.adminOne');

    const adminOneTitle = document.createElement('h3');
    adminOneTitle.textContent = 'The Rice Master';
    targetAdminOne.appendChild(adminOneTitle);

    const adminOneInfo = document.createElement('div');
    adminOneInfo.setAttribute('class', 'adminInfo');
    targetAdminOne.appendChild(adminOneInfo);

    const adminOneImage = document.createElement('img');
    adminOneInfo.appendChild(adminOneImage);

    const adminOneDetails = document.createElement('p');
    adminOneDetails.setAttribute('style', 'white-space: pre;');
    adminOneDetails.textContent = 'Email: ricedaddy@riceronin.com \r\n'
    adminOneDetails.textContent += "Phone: (333)333-3333";
    adminOneInfo.appendChild(adminOneDetails);


    // admin two
    const adminTwo = document.createElement('div');
    adminTwo.setAttribute('class', 'adminTwo');
    contactArea.appendChild(adminTwo);

    const targetAdminTwo = document.querySelector('.adminTwo');

    const adminTwoTitle = document.createElement('h3');
    adminTwoTitle.textContent = 'Merch Momma';
    targetAdminTwo.appendChild(adminTwoTitle);

    const adminTwoInfo = document.createElement('div');
    adminTwoInfo.setAttribute('class', 'adminInfo');
    targetAdminTwo.appendChild(adminTwoInfo);

    const adminTwoImage = document.createElement('img');
    adminTwoInfo.appendChild(adminTwoImage);

    const adminTwoDetails = document.createElement('p');
    adminTwoDetails.setAttribute('style', 'white-space: pre;');
    adminTwoDetails.textContent = 'Email: merchmomma@riceronin.com \r\n'
    adminTwoDetails.textContent += "Phone: (444)444-4444";
    adminTwoInfo.appendChild(adminTwoDetails);


    // admin three
    const adminThree = document.createElement('div');
    adminThree.setAttribute('class', 'adminThree');
    contactArea.appendChild(adminThree);

    const targetAdminThree = document.querySelector('.adminThree');

    const adminThreeTitle = document.createElement('h3');
    adminThreeTitle.textContent = 'Rice Support';
    targetAdminThree.appendChild(adminThreeTitle);

    const adminThreeInfo = document.createElement('div');
    adminThreeInfo.setAttribute('class', 'adminInfo');
    targetAdminThree.appendChild(adminThreeInfo);

    const adminThreeImage = document.createElement('img');
    adminThreeInfo.appendChild(adminThreeImage);

    const adminThreeDetails = document.createElement('p');
    adminThreeDetails.setAttribute('style', 'white-space: pre;');
    adminThreeDetails.textContent = 'Email: support@riceronin.com \r\n'
    adminThreeDetails.textContent += "Phone: (555)555-5555";
    adminThreeInfo.appendChild(adminThreeDetails);

    // set active nav
    const contactNav = document.querySelector('.contactButton');
    contactNav.style.color = 'var(--red)';

};

export {
    makeContact
};