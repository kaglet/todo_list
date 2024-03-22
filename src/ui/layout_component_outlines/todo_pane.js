// Create quick add button with all parameters

let createTodoPane = function() {
    let body = document.querySelector('body');

    let todoPane = document.createElement('section');
    todoPane.classList.add('todo', 'pane');

    let headingsWrapper = document.createElement('div');
    headingsWrapper.classList.add('headings', 'wrapper');
    let listHeading = document.createElement('h2');
    // TODO: Get currently selected list heading/name instead of placeholder
    listHeading.textContent = 'ALL';
    const setListHeading = (heading) => listHeading.textContent = heading;
    headingsWrapper.append(listHeading);

    let quickAddBtn = document.createElement('button');
    quickAddBtn.textContent = 'Quick Add';
    quickAddBtn.classList.add('quick', 'add');
    const getQuickAddButton = () => quickAddBtn;

    let customAddBtn = document.createElement('button');
    customAddBtn.textContent = 'Custom Add';
    customAddBtn.classList.add('custom', 'add');
    const getCustomAddButton = () => customAddBtn;
    let nameInput = document.createElement('input');
    nameInput.setAttribute('placeholder', 'Example todo name');
    const getNameInput = () => nameInput;

    let todoAdditionWrapper = document.createElement('div');
    todoAdditionWrapper.classList.add('todo', 'addition', 'wrapper');
    todoAdditionWrapper.append(nameInput, quickAddBtn, customAddBtn);

    let filterLabel = document.createElement('label');
    let sortLabel = document.createElement('label');
    filterLabel.textContent = 'Filter by date: ';
    sortLabel.textContent = 'Sort by date: ';
    sortLabel.classList.add('sort');

    let filterSelect = document.createElement('select');

    let allOption = document.createElement('option');
    let todayOption = document.createElement('option');
    let nextWeekOption = document.createElement('option');
    let nextThirtyDays = document.createElement('option');

    allOption.setAttribute('value', 'all');
    todayOption.setAttribute('value', 'today');
    nextWeekOption.setAttribute('value', 'next week');
    nextThirtyDays.setAttribute('value', 'next thirty days');

    allOption.textContent = "All";
    todayOption.textContent = "Today";
    nextWeekOption.textContent = "Next Week";
    nextThirtyDays.textContent = "Next Thirty Days";

    filterSelect.append(allOption, todayOption, nextWeekOption, nextThirtyDays);
    const getFilterSelect = () => filterSelect;

    let sortSelect = document.createElement('select');

    let ascendingOption = document.createElement('option');
    let descendingOption = document.createElement('option');

    ascendingOption.setAttribute('value', 'asc');
    descendingOption.setAttribute('value', 'desc');

    ascendingOption.textContent = "Ascending";
    descendingOption.textContent = "Descending";

    sortSelect.append(ascendingOption, descendingOption);
    const getSortSelect = () => sortSelect;

    let wrapper = document.createElement('div');
    wrapper.append(filterLabel, filterSelect, sortLabel, sortSelect);

    let todosDisplay = document.createElement('div');
    todosDisplay.classList.add('todos', 'display');

    todoPane.append(headingsWrapper, todoAdditionWrapper, wrapper, todosDisplay);

    body.append(todoPane);

    return { getCustomAddButton, getNameInput, getQuickAddButton, setListHeading, getFilterSelect, getSortSelect };
}();

export default createTodoPane;