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
    let setListHeading = (heading) => listHeading.textContent = heading;
    headingsWrapper.append(listHeading);

    let quickAddBtn = document.createElement('button');
    quickAddBtn.textContent = 'Quick Add';
    quickAddBtn.classList.add('quick', 'add');
    let getQuickAddButton = () => quickAddBtn;

    let customAddBtn = document.createElement('button');
    customAddBtn.textContent = 'Custom Add';
    customAddBtn.classList.add('custom', 'add');
    let getCustomAddButton = () => customAddBtn;
    let nameInput = document.createElement('input');
    nameInput.setAttribute('placeholder', 'Example todo name');
    let getNameInput = () => nameInput;

    let todoAdditionWrapper = document.createElement('div');
    todoAdditionWrapper.classList.add('todo', 'addition', 'wrapper');
    todoAdditionWrapper.append(nameInput, quickAddBtn, customAddBtn);

    let filterLabel = document.createElement('label');
    let sortLabel = document.createElement('label');
    filterLabel.textContent = 'Filter by date: ';
    sortLabel.textContent = 'Sort by date: ';

    let filterSelect = document.createElement('select');

    let todayOption = document.createElement('option');
    let nextWeekOption = document.createElement('option');
    let nextThirtyDays = document.createElement('option');

    todayOption.setAttribute('value', 'today');
    nextWeekOption.setAttribute('value', 'next week');
    nextThirtyDays.setAttribute('value', 'next thirty days');

    todayOption.textContent = "Today";
    nextWeekOption.textContent = "Next Week";
    nextThirtyDays.textContent = "Next Thirty Days";

    filterSelect.append(todayOption, nextWeekOption, nextThirtyDays);

    let sortSelect = document.createElement('select');

    let ascendingOption = document.createElement('option');
    let descendingOption = document.createElement('option');

    ascendingOption.setAttribute('value', 'asc');
    descendingOption.setAttribute('value', 'desc');

    ascendingOption.textContent = "Ascending";
    descendingOption.textContent = "Descending";

    sortSelect.append(ascendingOption, descendingOption);

    let wrapper = document.createElement('div');
    wrapper.append(filterLabel, filterSelect, sortLabel, sortSelect);

    let todosDisplay = document.createElement('div');
    todosDisplay.classList.add('todos', 'display');

    todoPane.append(headingsWrapper, todoAdditionWrapper, wrapper, todosDisplay);

    body.append(todoPane);

    return { getCustomAddButton, getNameInput, getQuickAddButton, setListHeading };
}();

export default createTodoPane;