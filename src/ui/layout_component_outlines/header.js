let createHeader = function() {
    let body = document.querySelector('body');

    let header = document.createElement('header');
    let pageTitle = document.createElement('h1');
    pageTitle.textContent = 'To Do Tracker';

    let menuIcon = document.createElement('i');
    menuIcon.classList.add('fa-solid', 'fa-bars', 'bars');

    header.append(menuIcon, pageTitle);

    body.append(header);
}();

export default createHeader;