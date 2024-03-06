// Manages edit functionality of existing todo instances
import listsManager from '../../application_state_logic/all_lists_manager/lists_manager.js';
import selectionTracker from '../../application_state_logic/selection_tracker/selection_tracker.js';
import todoCustomizer from '../item_customizer_panes/todo_customizer.js';
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
            let selectedTodoIndex = selectionTracker.getSelectedTodoIndex();
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
        let { nameInput, dateInput, priorityInput, listInput } = todoCustomizer.getFormInputs(todoEditCustomizerPane);

        nameInput.value = todo.getName();
        dateInput.value = todo.getScheduleDate();
        priorityInput.value = todo.getPriority();
        
        // TODO: Set first option of list input
    };

    let editTodo = () => {
        let { nameInput, dateInput, priorityInput, listInput } = todoCustomizer.getFormInputs(todoEditCustomizerPane);
        let selectedTodoIndex = selectionTracker.getSelectedTodoIndex();
        let todoToEdit = selectionTracker.getSelectedList().getTodo(selectedTodoIndex);
        todoToEdit.setName(nameInput.value);
        todoToEdit.setScheduleDate(dateInput.value);
        todoToEdit.setPriority(priorityInput.value);

        console.log(selectionTracker.getSelectedList().getTodos());
    };

    let getCustomizerPane = () => todoEditCustomizerPane;

    return { fillForm, getCustomizerPane, editTodo };
}();

export default todoEditController;