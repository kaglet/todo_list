import listAdditionController from "./list_customizer";
import taskAdditionController from "./task_customizer";

let displayController = function() {
    inputReader;

    // add these to UI or maybe just read from that don't update UI at same time arguable
    showLists;
    showTasks;
    showSubtasks;

    addList;
    addTodo; // add todo into selected list
    addSubtask; // add todo into selected subtask of selected list
    removeList; // TODO: Make tasks inside migrate to "All" list so they are not lost
    removeTodo;
    removeSubtask;
    
    selectedList;
    selectedTodo;
    selectedSubtask;

    sidebarController;
    headerController;
    footerController;
    todoPaneController;
    listAdditionController;
    taskAdditionController;
}();