let todoController = function() {
    let titleInput = document.querySelector('input.todo.title');
    let quickAddButton = document.querySelector('button.todo.quick.add');
    let customAddButton = document.querySelector('button.todo.custom.add');

    const displayCustomizer = () => {

    } 

    const hideCustomizer = () => {

    };

    const addQuickTodo = () => {
        // TODO: Create with name forced to be entered on addition with other defaults entered (like mandatory ALL listing)
        // Create defaults for todo
        // Tie subtask to todo
        let title = titleInput.textContent;
        if (title.trim() === "") return;
        // TODO: Force creation with a title (otherwise no creation)
        let todo = createTodo(); 
    };
    
    return { displayCustomizer, hideCustomizer, addQuickTodo };
}();

export default todoController;