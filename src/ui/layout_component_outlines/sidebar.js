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
    nameInput.setAttribute('placeholder', 'Example list name');
    let getNameInput = () => nameInput;

    let addListOptionsWrapper = document.createElement('div');
    addListOptionsWrapper.classList.add('wrapper', 'addition', 'list');

    addListOptionsWrapper.append(nameInput, quickAddBtn, customAddBtn);

    let listsDisplay = document.createElement('div');
    listsDisplay.classList.add('lists', 'display');
    
    let wrapper = document.createElement('div');
    wrapper.append(menuIcon, addListOptionsWrapper);
    wrapper.classList.add('wrapper');

    sidebar.append(wrapper, listsDisplay);

    body.append(sidebar);

    return { getCustomAddButton, getNameInput, getQuickAddButton };
}();

export default createSidebar;