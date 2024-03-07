import listsManager from "../all_lists_manager/lists_manager";

let selectionTracker = function() {
    let selectedList, selectedTodo, selectedSubtask;
    
    // Set and get containing items for accessing logical addition of sub-items
    const setSelectedList = (list) => selectedList = list;
    const setSelectedTodo = (todo) => selectedTodo = todo;
    const setSelectedSubtask = (subtask) => selectedSubtask = subtask;

    const getSelectedList = () => list;
    const getSelectedTodo = () => todo;
    const getSelectedSubtask = () => subtask;

    // Set for initial "All" list to be selected here for tasks to be displayable without selecting any other list
    setSelectedList(listsManager.getList(0)); 

    return { setSelectedList, setSelectedTodo, setSelectedSubtask, getSelectedList, getSelectedTodo, getSelectedSubtask };
}();

export default selectionTracker;