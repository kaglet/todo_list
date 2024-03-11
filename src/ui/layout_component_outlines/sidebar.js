let createSidebar = function() {
    let body = document.querySelector('body');

    let sidebar = document.createElement('section');
    sidebar.classList.add('sidebar');

    let menuIcon = document.createElement('i');
    menuIcon.classList.add('fa-solid', 'fa-bars', 'bars');

    let quickAddBtn = document.createElement('button');
    quickAddBtn.textContent = 'Quick Add';
    quickAddBtn.classList.add('quick', 'add');
    let getQuickAddButton = () => quickAddBtn;

    let customAddBtn = document.createElement('button');
    customAddBtn.textContent = 'Custom Add';
    customAddBtn.classList.add('custom', 'add');
    let getCustomAddButton = () => customAddBtn;

    let nameInput = document.createElement('input');
    nameInput.setAttribute('placeholder', 'Example Name');
    let getNameInput = () => nameInput;

    let addListOptionsWrapper = document.createElement('div');
    addListOptionsWrapper.classList.add('wrapper', 'add', 'list');

    addListOptionsWrapper.append(nameInput, quickAddBtn, customAddBtn);

    let listsDisplay = document.createElement('div');
    listsDisplay.classList.add('lists', 'display');
    
    sidebar.append(menuIcon, addListOptionsWrapper, listsDisplay);

    body.append(sidebar);

    return { getCustomAddButton, getNameInput, getQuickAddButton };
}();

export default createSidebar;