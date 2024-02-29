/* TODO: For selection tracker on click if the target is that and has an index, save it, 
It can handle an on click listeners for this then get the selected item in the application state. */

let selectionTracker = function() {
    let selectedList, selectedTodo, selectedSubtask;

    const setSelectedList = (index) => selectedList = index;
    const setSelectedTodo = (index) => selectedTodo = index;
    const setSelectedSubtask = (index) => selectedSubtask = index;

    const getSelectedList = () => selectedList;
    const getSelectedTodo = () => selectedTodo;
    const getSelectedSubtask = () => selectedSubtask;

    return { setSelectedList, setSelectedTodo, setSelectedSubtask, getSelectedList, getSelectedTodo, getSelectedSubtask };
}();

export default selectionTracker;