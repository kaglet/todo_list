import createTodoPane from '../layout_component_outlines/todo_pane.js';
import todoCustomizer from '../item_customizer_panes/todo_customizer.js';
import selectiveTodosUpdater from '../selective_items_updater/todo_UI_updater.js';
import createTodo from '../../application_state_logic/create_building_blocks/create_todo.js';
import selectionTracker from '../../application_state_logic/selection_tracker/selection_tracker.js';
import listsManager from '../../application_state_logic/all_lists_manager/lists_manager.js';
import todoValidator from '../validation/todo_validation.js';

// Manages addition functionality of new todo instances 
let todoAddController = function() {
    let nameInput = createTodoPane.getNameInput();

    let quickAddButton = createTodoPane.getQuickAddButton(); 
    let customAddButton = createTodoPane.getCustomAddButton();

    const completeCustomizerPaneFunctionality = () => {
        let addCustomizerPane = todoCustomizer.createCustomizerPane();

        let h2 = todoCustomizer.getHeading(addCustomizerPane);
        h2.textContent = "Add todo";

        let saveButton = document.createElement('button');
        saveButton.classList.add('todo', 'add');
        saveButton.textContent = 'Add';

        saveButton.addEventListener('click', () => {
            let {  nameInput, dateInput, priorityInput, listInput } = todoCustomizer.getFormInputs(todoAddCustomizerPane);
            // Always remove accidental whitespace to not mess up string equality checks
            let name = nameInput.value.trim();
            let date = dateInput.value;
            let priority = priorityInput.value;
            let selectedListName = listInput.value;
            let listMatchingName = listsManager.getLists().find(list => list.getName() === selectedListName);

            if (todoValidator.isInvalidOnCustomAdd(name, date)) return;

            addCustomTodo(name, date, priority, listMatchingName);
            todoCustomizer.hideCustomizerPane(addCustomizerPane);
            let listOfTodo = selectionTracker.getSelectedList();
            let newTodoIndex = listOfTodo.getTodos().length - 1;
            let newTodo = listOfTodo.getTodo(newTodoIndex);

            // Check if list of todo does not match current selected list the todo is about to be added to
            let listMismatch = listMatchingName !== selectionTracker.getSelectedList();
            // Check if current list is default list because if so then addition of a todo from any different list is allowed - This is what "All" list is for
            let isCurrListNotDefault = selectionTracker.getSelectedList() != listsManager.getList(0);
            if (listMismatch && isCurrListNotDefault) return;

            selectiveTodosUpdater.addTodoDisplay(newTodo);
        });
    
        addCustomizerPane.append(saveButton);

        return addCustomizerPane;
    }

    let todoAddCustomizerPane = completeCustomizerPaneFunctionality();
    let container = document.querySelector('body');
    container.append(todoAddCustomizerPane);
    todoCustomizer.hideCustomizerPane(todoAddCustomizerPane);

    const addQuickList = (name) => {
        // Create todo instance and store it
        let todo = createTodo(name, selectionTracker.getSelectedList());
        console.log(selectionTracker.getSelectedList());
        selectionTracker.getSelectedList().addTodo(todo);
        console.log(selectionTracker.getSelectedList().getTodos());
    };

    const addCustomTodo = (name, date, priority, list) => {
        // Create todo instance and store it
        let todo = createTodo(name, list);
        console.log('List of custom created todo: ' + list);
        todo.setScheduleDate(date);
        todo.setPriority(priority);
        list.addTodo(todo);
        console.log(selectionTracker.getSelectedList().getTodos());
    };

    quickAddButton.addEventListener('click', () => {
        // Always remove accidental whitespace to not mess up string equality checks
        let name = nameInput.value.trim();
        if (todoValidator.isInvalidOnQuickAdd(name)) return;

        addQuickList(name);
        let listOfTodo = selectionTracker.getSelectedList();
        let newTodoIndex = listOfTodo.getTodos().length - 1;
        let newTodo = listOfTodo.getTodo(newTodoIndex);
        selectiveTodosUpdater.addTodoDisplay(newTodo, newTodoIndex);
    });

    customAddButton.addEventListener('click', () => {
        todoCustomizer.showCustomizerPane(todoAddCustomizerPane, selectionTracker.getSelectedList());

        let { nameInput } = todoCustomizer.getFormInputs(todoAddCustomizerPane);
        nameInput.value = document.querySelector('.addition.todo input').value;
    });

    return { addCustomTodo };
}();

export default todoAddController;