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

    let addTodoLabel = document.createElement('label');
    addTodoLabel.textContent = 'Enter to do name: ';
    
    let quickAddBtn = document.createElement('button');
    quickAddBtn.textContent = 'Quick Add';
    quickAddBtn.classList.add('quick', 'add');
    const getQuickAddButton = () => quickAddBtn;

    let customAddBtn = document.createElement('button');
    customAddBtn.textContent = 'Custom Add';
    customAddBtn.classList.add('custom', 'add');
    const getCustomAddButton = () => customAddBtn;
    let nameInput = document.createElement('input');
    nameInput.setAttribute('placeholder', 'E.g. Walk the dogs/Read book');
    const getNameInput = () => nameInput;

    let todoAdditionWrapper = document.createElement('div');
    todoAdditionWrapper.classList.add('todo', 'addition', 'wrapper');
    todoAdditionWrapper.append(addTodoLabel, nameInput, quickAddBtn, customAddBtn);

    let filterLabel = document.createElement('label');
    let sortLabel = document.createElement('label');
    filterLabel.textContent = 'Filter by date: ';
    sortLabel.textContent = 'Sort by date: ';
    sortLabel.classList.add('sort');

    let filterSelect = document.createElement('select');

    let allOption = document.createElement('option');
    let todayOption = document.createElement('option');
    let nextWeekOption = document.createElement('option');
    let nextThirtyDaysOption = document.createElement('option');
    let overdueOption = document.createElement('option');

    allOption.setAttribute('value', 'all');
    todayOption.setAttribute('value', 'today');
    nextWeekOption.setAttribute('value', 'next week');
    nextThirtyDaysOption.setAttribute('value', 'next thirty days');
    overdueOption.setAttribute('value', 'overdue');

    allOption.textContent = "All";
    todayOption.textContent = "Today";
    nextWeekOption.textContent = "Next Week";
    nextThirtyDaysOption.textContent = "Next Thirty Days";
    overdueOption.textContent = "Overdue";

    filterSelect.append(allOption, todayOption, nextWeekOption, nextThirtyDaysOption, overdueOption);
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