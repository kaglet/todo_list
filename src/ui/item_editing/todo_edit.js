// Manages edit functionality of existing todo instances
import listsManager from '../../application_state_logic/all_lists_manager/lists_manager.js';
import selectionTracker from '../../application_state_logic/selection_tracker/selection_tracker.js';
import todoCustomizer from '../item_customizers/todo_customizer.js';
import selectiveTodosUpdater from '../selective_items_updater/todo_UI_updater.js';

// Manages edit functionality of existing list instances
let todoEditController = function() {
    const completeCustomizerPaneFunctionality = () => {
        let editCustomizer = todoCustomizer.createCustomizerPane();

        let saveButton = document.createElement('button');
        saveButton.classList.add('list', 'edit');
        saveButton.textContent = 'Save Edit';

        saveButton.addEventListener('click', () => {
            editTodo();
            let selectedTodoIndex = selectionTracker.getSelectedTodo();
            selectiveTodosUpdater.editTodoDisplay(selectedTodoIndex);
            todoCustomizer.hideCustomizerPane(editCustomizer);
        });
    
        editCustomizer.append(saveButton);

        return editCustomizer;
    };

    let todoEditCustomizerPane = completeCustomizerPaneFunctionality();
    let container = document.querySelector('body');
    container.append(todoEditCustomizerPane);
    todoCustomizer.hideCustomizerPane(todoEditCustomizerPane);

    let fillForm = (todo) => {
        let { nameInput } = todoCustomizer.getFormInputs(todoEditCustomizerPane);

        nameInput.value = todo.getName();
    };

    let editTodo = () => {
        let { nameInput, dateInput, priorityInput, listInput } = todoCustomizer.getFormInputs(todoEditCustomizerPane);
        let selectedTodoIndex = selectionTracker.getSelectedTodo();
        let todoToEdit = getListOfTodo().getTodo(selectedTodoIndex);
        todoToEdit.setName(nameInput.value);
        // TODO: Set other edited properties of todo

        console.log(getListOfTodo().getTodos());
    };

    let getCustomizerPane = () => todoEditCustomizerPane;

    return { fillForm, getCustomizerPane, editTodo };
}();

export default todoEditController;