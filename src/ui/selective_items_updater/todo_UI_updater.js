// add/remove
import listsManager from "../../application_state_logic/all_lists_manager/lists_manager";
import selectionTracker from "../../application_state_logic/selection_tracker/selection_tracker";
import todoCustomizer from "../item_customizer_panes/todo_customizer";
import todoEditController from "../item_editing/todo_edit";

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
        listDisplay.textContent = newTodo.getContainingList().getName();
        listDisplay.classList.add('todo', 'containing-list', 'display');
        listDisplay.style.backgroundColor = newTodo.getContainingList().getColor();

        let priorityDisplay = document.createElement('span');
        let priorityText = newTodo.getPriority() === undefined ? "" : newTodo.getPriority();
        priorityDisplay.append(priorityText);
        priorityDisplay.classList.add('todo', 'priority', 'display', newTodo.getPriority());

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
            todoCustomizer.showCustomizerPane(todoEditController.getCustomizerPane(), newTodo.getContainingList());
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
            newTodo.getContainingList().removeTodo(newTodo);
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

    // Reflect edits of specific list item in UI after changes are saved
    const editTodoDisplay = (indexInUI, todo) => {
        let todoItems = document.querySelectorAll('.todo.name.display');
        todoItems.item(indexInUI).textContent = todo.getName();
        let dateDisplays = document.querySelectorAll('.schedule.date.display');
        dateDisplays.item(indexInUI).textContent = todo.getScheduleDate();
        let priorityDisplays = document.querySelectorAll('.todo.priority.display');
        priorityDisplays.item(indexInUI).textContent = todo.getPriority();
        priorityDisplays.item(indexInUI).classList.remove('high', 'medium', 'low');
        todo.getPriority() !== "" ? priorityDisplays.item(indexInUI).classList.add(todo.getPriority()) : undefined;
        let listDisplays = document.querySelectorAll('.todo.containing-list.display');
        listDisplays.item(indexInUI).textContent = todo.getContainingList().getName();
    };

    const clearDisplay = () => {
        while (todosDisplay.firstChild) {
            todosDisplay.removeChild(todosDisplay.lastChild);
        }
    };

    const showListTodos = () => {
        let todosLength = selectionTracker.getSelectedList().getTodos().length;
        let listOfTodo = selectionTracker.getSelectedList();
        let isListDefault = listOfTodo === listsManager.getList(0);
        let defaultListTodos;
        let finalTodosListLength = todosLength;
        
        if (isListDefault) {
            defaultListTodos = listsManager.getList(0).getAllListsTodos();    
            console.log(defaultListTodos);    
            finalTodosListLength = defaultListTodos.length;    
        }

        for (let i = 0; i < finalTodosListLength; i++) {
            let newTodo = isListDefault ? defaultListTodos[i] : listOfTodo.getTodo(i);
            // Pass a todo not an index, it does not have to control the list sourced from
            addTodoDisplay(newTodo, i);
        }
    };

    return { addTodoDisplay, removeTodoDisplay, editTodoDisplay, clearDisplay, showListTodos };
}();

export default selectiveTodosUpdater;

