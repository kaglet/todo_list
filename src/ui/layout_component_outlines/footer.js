import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

let createFooter = function() {
    let body = document.querySelector('body');

    let footer = document.createElement('footer');
    footer.textContent = 'Made by ';

    let selfCredit = document.createElement('a');
    selfCredit.href = "https://github.com/kaglet/restaurant_page";
    selfCredit.textContent = "kaglet";
    let githubIcon = document.createElement('i');
    githubIcon.classList.add('fa-brands', 'fa-github');
    selfCredit.append(' ', githubIcon);
    
    footer.append(selfCredit);
    body.append(footer);
};

export default createFooter;