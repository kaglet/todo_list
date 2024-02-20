import createTodo from "../application_state_logic/create_todo.js";

let taskAdditionController = function () {
    const displayCustomizer = () => {

    } 

    const hideCustomizer = () => {

    };

    const addQuickTask = () => {
        // TODO: Create with name forced to be entered on addition with other defaults entered (like mandatory ALL listing)
        // TODO: Create initial ALL listing
        createTodo(); 
    };
}();

export default taskAdditionController;