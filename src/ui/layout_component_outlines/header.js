let createHeader = function() {
    let body = document.querySelector('body');

    let header = document.createElement('header');
    header.textContent = 'Header';

    body.append(header);
};

export default createHeader;