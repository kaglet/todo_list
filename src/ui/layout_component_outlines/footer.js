let createFooter = function() {
    let body = document.querySelector('body');

    let footer = document.createElement('footer');
    footer.textContent = 'Footer';

    body.append(footer);
};

export default createFooter;