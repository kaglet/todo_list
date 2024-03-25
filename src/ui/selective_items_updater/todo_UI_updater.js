// add/remove
import listsManager from "../../application_state_logic/all_lists_management/lists_manager";
import selectionTracker from "../../application_state_logic/selection_tracker/selection_tracker";
import storageManager from "../../application_state_logic/storage_management/storage_manager";
import todoAddController from "../item_adding/todo_addition";
import todoCustomizer from "../item_customizer_panes/todo_customizer";
import todoEditController from "../item_editing/todo_edit";
import todosFilter from "../item_filtering/todos_filter";

let selectiveTodosUpdater = function() {
    let todosDisplay = document.querySelector('.todos.display');

    const addTodoDisplay = (newTodo, newTodoIndex) => {
        let wrapper = document.createElement('div');

        let todoItem = document.createElement('div');
        todoItem.setAttribute('data-id', newTodoIndex);
        todoItem.classList.add('todo', 'item');

        let scheduleDateDisplay = document.createElement('div');
        scheduleDateDisplay.textContent = newTodo.getScheduleDate();
        scheduleDateDisplay.classList.add('schedule', 'date' , 'display');

        let listDisplay = document.createElement('span');
        let containingList = selectionTracker.getListOfTodo(newTodo);
        listDisplay.textContent = containingList.getName();
        listDisplay.classList.add('todo', 'containing-list', 'display');
        listDisplay.style.backgroundColor = containingList.getColor();

        let priorityDisplay = document.createElement('span');
        let priorityText = newTodo.getPriority() === undefined ? "" : newTodo.getPriority();
        priorityDisplay.append(priorityText);
        priorityDisplay.classList.add('todo', 'priority', 'display', priorityText === "" ? "none" : priorityText);

        let nameDisplay = document.createElement('div');
        nameDisplay.textContent = newTodo.getName();
        nameDisplay.classList.add('todo', 'name', 'display');

        todoItem.append(nameDisplay);

        let editButton = document.createElement('button');
        let deleteButton = document.createElement('button');

        let editIcon = document.createElement('i');
        editIcon.classList.add('fa-solid', 'fa-pen-to-square', 'edit');

        let deleteIcon = document.createElement('i');
        deleteIcon.classList.add('fa-solid', 'fa-trash', 'delete');

        editButton.append(editIcon);
        deleteButton.append(deleteIcon);

        editButton.addEventListener('click', () => {
            todoCustomizer.showCustomizerPane(todoEditController.getCustomizerPane(), containingList);
            // For completing edit set selected list in UI, for use later
            selectionTracker.setSelectedTodo(newTodo);
            let todoUIIndex = todoItem.getAttribute('data-id');
            selectionTracker.setSelectedTodoInUIIndex(todoUIIndex);
            todoEditController.fillForm(newTodo);
        });
        deleteButton.addEventListener('click', () => {
            let todoDisplayID = todoItem.getAttribute('data-id');
            removeTodoDisplay(todoDisplayID);
            // Removal is not related by indices anymore
            containingList.removeTodo(newTodo);

            storageManager.saveChanges();
        });

        wrapper.append(todoItem, listDisplay, priorityDisplay, scheduleDateDisplay, editButton, deleteButton);
        wrapper.classList.add('todo', 'display', 'wrapper');
        todosDisplay.append(wrapper);
    };

    // Remove list display at selected index
    const removeTodoDisplay = (index) => {
        let todoDisplayWrappers = document.querySelectorAll('.todo.display.wrapper');
        let todoItems = document.querySelectorAll('.todo.item');
        // Update UI display indices of place after left shift from delete
        todoDisplayWrappers.item(index).remove();

        // Update lists which do not change original reference even if DOM has changed after removal
        todoDisplayWrappers = document.querySelectorAll('.todo.display.wrapper');
        todoItems = document.querySelectorAll('.todo.item');
        for (let i = index; i < todoDisplayWrappers.length; i++) {
            todoItems.item(i).setAttribute('data-id', index);
        }
    };

    // Reflect edits of specific todo item in UI after changes are saved
    const editTodoDisplay = (indexInUI, todo) => {
        let todoItems = document.querySelectorAll('.todo.name.display');
        todoItems.item(indexInUI).textContent = todo.getName();

        let dateDisplays = document.querySelectorAll('.schedule.date.display');
        dateDisplays.item(indexInUI).textContent = todo.getScheduleDate();

        let priorityDisplays = document.querySelectorAll('.todo.priority.display');
        priorityDisplays.item(indexInUI).textContent = todo.getPriority();
        priorityDisplays.item(indexInUI).classList.remove('high', 'medium', 'low');

        if (todo.getPriority() !== "") { 
            priorityDisplays.item(indexInUI).classList.add(todo.getPriority());
        };

        let containingList = selectionTracker.getListOfTodo(todo);
        let listDisplays = document.querySelectorAll('.todo.containing-list.display');
        listDisplays.item(indexInUI).textContent = containingList.getName();
        listDisplays.item(indexInUI).style.backgroundColor = containingList.getColor();
    };

    const clearDisplay = () => {
        while (todosDisplay.firstChild) {
            todosDisplay.removeChild(todosDisplay.lastChild);
        }
    };

    // Show the desired list of todos, should
    const showListTodos = (list) => {
        let todos = todoAddController.getTodosIfDefaultList(list);
        let filteredTodos = todosFilter.getFilteredTodos(todos);

        for (let i = 0; i < filteredTodos.length; i++) {
            let newTodo = filteredTodos[i];
            // Pass a todo not an index, it does not have to control the list sourced from
            addTodoDisplay(newTodo, i);
        }
    };

    return { addTodoDisplay, removeTodoDisplay, editTodoDisplay, clearDisplay, showListTodos };
}();

export default selectiveTodosUpdater;

