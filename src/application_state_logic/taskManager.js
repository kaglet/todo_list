import createList from "./createList";

// Allows user capabilities of interacting with task creation and management functionality
let taskManager = function() {
    let lists = []; 
    
    // Method clear about what it does, not more
    const addList = (list) => {
        lists.append(list);
    };

    const removeList = (index) => {
        lists.splice(index, 1);
    };
}();