/* TODO: For selection tracker on click if the target is that and has an index, save it, 
It can handle an on click listeners for this then get the selected item in the application state. */

let selectionTracker = function() {
    let selectedListIndex, selectedTodoIndex, selectedSubtaskIndex;

    const setSelectedList = (index) => selectedListIndex = index;
    const setSelectedTodo = (index) => selectedTodoIndex = index;
    const setSelectedSubtask = (index) => selectedSubtaskIndex = index;

    const getSelectedList = () => selectedListIndex;
    const getSelectedTodo = () => selectedTodoIndex;
    const getSelectedSubtask = () => selectedSubtaskIndex;

    return { setSelectedList, setSelectedTodo, setSelectedSubtask, getSelectedList, getSelectedTodo, getSelectedSubtask };
}();

export default selectionTracker;