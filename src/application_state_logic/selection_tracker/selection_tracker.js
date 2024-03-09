import listsManager from "../all_lists_manager/lists_manager";

let selectionTracker = function() {
    let selectedList, selectedTodo, selectedSubtask, selectedListInUIIndex, selectedTodoInUIIndex, selectedSubtaskInUIIndex;
    
    // Set and get containing items for accessing logical addition of sub-items
    const setSelectedList = (list) => selectedList = list;
    const setSelectedTodo = (todo) => selectedTodo = todo;
    const setSelectedSubtask = (subtask) => selectedSubtask = subtask;

    const getSelectedList = () => selectedList;
    const getSelectedTodo = () => selectedTodo;
    const getSelectedSubtask = () => selectedSubtask;

    const setSelectedListInUIIndex = (index) => selectedListInUIIndex = index;
    const setSelectedTodoInUIIndex = (index) => selectedTodoInUIIndex = index;
    const setSelectedSubtaskInUIIndex = (index) => selectedSubtaskInUIIndex = index;

    const getSelectedListInUIIndex = () => selectedListInUIIndex;
    const getSelectedTodoInUIIndex = () => selectedTodoInUIIndex;
    const getSelectedSubtaskInUIIndex = () => selectedSubtaskInUIIndex;

    setSelectedList(listsManager.getList(0));

    return { setSelectedList, setSelectedTodo, setSelectedSubtask, getSelectedList, getSelectedTodo, getSelectedSubtask, setSelectedListInUIIndex, setSelectedSubtaskInUIIndex, setSelectedTodoInUIIndex, getSelectedListInUIIndex, getSelectedSubtaskInUIIndex, getSelectedTodoInUIIndex };
}();

export default selectionTracker;