let createSidebar = function() {
    let body = document.querySelector('body');

    let sidebar = document.createElement('section');
    sidebar.classList.add('sidebar');

    let menuIcon = document.createElement('div');
    menuIcon.classList.add('icon', 'menu');
    menuIcon.textContent = "+";

    let quickAddBtn = document.createElement('button');
    quickAddBtn.textContent = 'Quick Add';
    let customAddBtn = document.createElement('button');
    customAddBtn.textContent = 'Custom Add';
    let nameInput = document.createElement('input');
    nameInput.setAttribute('placeholder', 'Example Name');

    let addListOptionsWrapper = document.createElement('div');
    addListOptionsWrapper.classList.add('wrapper', 'add', 'list');

    addListOptionsWrapper.append(nameInput, quickAddBtn, customAddBtn);

    let listsDisplay = document.createElement('div');
    listsDisplay.classList.add('lists', 'display');
    let allListOption = document.createElement('button');
    allListOption.textContent = 'All';

    listsDisplay.append(allListOption);

    sidebar.append(menuIcon, addListOptionsWrapper, listsDisplay);

    body.append(sidebar);
};

export default createSidebar;