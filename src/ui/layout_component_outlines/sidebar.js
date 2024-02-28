let createSidebar = function() {
    let body = document.querySelector('body');

    let sidebar = document.createElement('section');
    sidebar.classList.add('sidebar');
    sidebar.textContent = 'Sidebar';

    let menuIcon = document.createElement('div');
    menuIcon.classList.add('icon', 'menu');
    menuIcon.textContent = "+";

    let quickAddBtn = document.createElement('button');
    quickAddBtn.textContent = 'Quick Add';
    let customAddBtn = document.createElement('button');
    customAddBtn.textContent = 'Custom Add';
    let nameInput = document.createElement('input');
    nameInput.setAttribute('placeholder', 'Example Name');

    let buttonWrapper = document.createElement('div');
    buttonWrapper.classList.add('wrapper');

    buttonWrapper.append(quickAddBtn, customAddBtn);

    let listsWrapper = document.createElement('div');
    let allListOption = document.createElement('button');
    allListOption.textContent = 'All';

    listsWrapper.append(allListOption);

    sidebar.append(menuIcon, nameInput, buttonWrapper, listsWrapper);

    body.append(sidebar);
};

export default createSidebar;