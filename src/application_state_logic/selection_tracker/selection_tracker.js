let selectionTracker = function() {
    let selectedList, selectedTodo, selectedSubtask;

    const setSelectedList = (index) => selectedList = index;
    const setSelectedTodo = (index) => selectedTodo = index;
    const setSelectedSubtask = (index) => selectedSubtask = index;

    const getSelectedList = (index) => selectedList;
    const getSelectedTodo = (index) => selectedTodo;
    const getSelectedSubtask = (index) => selectedSubtask;
}();