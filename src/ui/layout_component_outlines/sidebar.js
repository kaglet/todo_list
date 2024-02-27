let createSidebar = function() {
    let body = document.querySelector('body');

    let sidebar = document.createElement('section');
    sidebar.classList.add('sidebar');
    sidebar.textContent = 'Sidebar';

    body.append(sidebar);
};

export default createSidebar;