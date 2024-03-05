/* TODO: For selection tracker on click if the target is that and has an index, save it, 
It can handle an on click listeners for this then get the selected item in the application state. */

import listsManager from "../all_lists_manager/lists_manager";

let selectionTracker = function() {
    let selectedListIndex, selectedTodoIndex, selectedSubtaskIndex;

    const setSelectedListIndex = (index) => selectedListIndex = index;
    const setSelectedTodoIndex = (index) => selectedTodoIndex = index;
    const setSelectedSubtaskIndex = (index) => selectedSubtaskIndex = index;

    const getSelectedListIndex = () => selectedListIndex;
    const getSelectedTodoIndex = () => selectedTodoIndex;
    const getSelectedSubtaskIndex = () => selectedSubtaskIndex;

    const getSelectedList = () => listsManager.getList(getSelectedListIndex());
    const getSelectedTodo = () => getSelectedList().getTodo(getSelectedTodoIndex());
    const getSelectedSubtask = () => getSelectedTodo().getSubtask(getSelectedSubtaskIndex());

    // Set for initial "All" list to be selected here for tasks to be displayable without selecting any other list
    setSelectedListIndex(0); 

    return { setSelectedListIndex, setSelectedTodoIndex, setSelectedSubtaskIndex, getSelectedListIndex, getSelectedTodoIndex, getSelectedSubtaskIndex, getSelectedList, getSelectedTodo, getSelectedSubtask };
}();

export default selectionTracker;