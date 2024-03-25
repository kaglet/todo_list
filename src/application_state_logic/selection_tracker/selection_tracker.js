import listsManager from "../all_lists_management/lists_manager";

let selectionTracker = function() {
    let selectedList, selectedTodo, selectedSubtask, selectedListInUIIndex, selectedTodoInUIIndex, selectedSubtaskInUIIndex, listToEdit;
    
    // Set and get containing items for accessing logical addition of sub-items
    const setSelectedList = (list) => selectedList = list;
    const setSelectedTodo = (todo) => selectedTodo = todo;
    const setSelectedSubtask = (subtask) => selectedSubtask = subtask;

    const setListToEdit = (list) => listToEdit = list;

    const getSelectedList = () => selectedList;
    const getSelectedTodo = () => selectedTodo;
    const getSelectedSubtask = () => selectedSubtask;

    const getListToEdit = () => listToEdit;

    const setSelectedListInUIIndex = (index) => selectedListInUIIndex = index;
    const setSelectedTodoInUIIndex = (index) => selectedTodoInUIIndex = index;
    const setSelectedSubtaskInUIIndex = (index) => selectedSubtaskInUIIndex = index;

    const getSelectedListInUIIndex = () => selectedListInUIIndex;
    const getSelectedTodoInUIIndex = () => selectedTodoInUIIndex;
    const getSelectedSubtaskInUIIndex = () => selectedSubtaskInUIIndex;

    const getListOfTodo = (todoToFind) => {
        let containingList = listsManager.getLists().find(list => list.getTodos().some(todo => todo === todoToFind));

        return containingList;
    };

    return { getListOfTodo, setListToEdit, getListToEdit, setSelectedList, setSelectedTodo, setSelectedSubtask, getSelectedList, getSelectedTodo, getSelectedSubtask, setSelectedListInUIIndex, setSelectedSubtaskInUIIndex, setSelectedTodoInUIIndex, getSelectedListInUIIndex, getSelectedSubtaskInUIIndex, getSelectedTodoInUIIndex };
}();

export default selectionTracker;