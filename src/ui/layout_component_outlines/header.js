let createHeader = function() {
    let body = document.querySelector('body');

    let header = document.createElement('header');
    let pageTitle = document.createElement('h1');
    pageTitle.textContent = 'TaskBuddy';
    header.append(pageTitle);

    body.append(header);
}();

export default createHeader;