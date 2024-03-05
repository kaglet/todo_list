import listsManager from '../../application_state_logic/all_lists_manager/lists_manager.js';

// Manages edit functionality of existing todo instances
import listsManager from '../../application_state_logic/all_lists_manager/lists_manager.js';
import selectionTracker from '../../application_state_logic/selection_tracker/selection_tracker.js';
import todoCustomizer from '../item_customizers/todo_customizer.js';
import selectiveListsUpdater from '../selective_items_updater/list_UI_updater.js';
import selectiveTodoUpdater from '../selective_items_updater/todo_UI_updater.js';

// Manages edit functionality of existing list instances
let todoEditController = function() {
    const completeCustomizerPaneFunctionality = () => {
        let editCustomizer = todoCustomizer.createCustomizerPane();

        let saveButton = document.createElement('button');
        saveButton.classList.add('list', 'edit');
        saveButton.textContent = 'Save Edit';

        saveButton.addEventListener('click', () => {
            editTodo();
            let selectedListIndex = selectionTracker.getSelectedTodo();
            selectiveTodoUpdater.editTodoDisplay(selectedListIndex);
            todoCustomizer.hideCustomizerPane(editCustomizer);
        });
    
        editCustomizer.append(saveButton);

        return editCustomizer;
    };

    let todoEditCustomizerPane = completeCustomizerPaneFunctionality();
    let container = document.querySelector('body');
    container.append(todoEditCustomizerPane);
    todoCustomizer.hideCustomizerPane(todoEditCustomizerPane);

    let fillForm = (list) => {
        let { nameInput } = todoCustomizer.getFormInputs(todoEditCustomizerPane);

        nameInput.value = list.getName();
    };

    let editTodo = () => {
        let { nameInput, dateInput, priorityInput, listInput } = todoCustomizer.getFormInputs(todoEditCustomizerPane);
        let selectedListIndex = selectionTracker.getSelectedList();
        let selectedTodoIndex = selectionTracker.getSelectedTodo();
        let todoToEdit = listsManager.getList(selectedListIndex).getTodo(selectedTodoIndex);
        todoToEdit.setName(nameInput.value);
        // TODO: Set other edited properties of todo

        console.log(listsManager.getList(selectedListIndex).getTodos());
    };

    let getCustomizerPane = () => todoEditCustomizerPane;

    return { fillForm, getCustomizerPane, editList: editTodo }
}();

export default todoEditController;