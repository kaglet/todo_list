import selectionTracker from "../../application_state_logic/selection_tracker/selection_tracker";
import createTodoPane from "../layout_component_outlines/todo_pane";
import selectiveTodosUpdater from "../selective_items_updater/todo_UI_updater";

let todosSorter = function () {
    let sorterSelect = createTodoPane.getSortSelect();

    sorterSelect.addEventListener('change', () => {
        let list = selectionTracker.getSelectedList();

        selectiveTodosUpdater.clearDisplay();
        selectiveTodosUpdater.showListTodos(list);
    });

    const getRecentToOldest = (todosList) => {
        return todosList.sort((a, b) => new Date(b.getScheduleDate()) - new Date(a.getScheduleDate()));    };

    const getOldestToRecent = (todosList) => {
        return todosList.sort((a, b) => new Date(a.getScheduleDate()) - new Date(b.getScheduleDate()));
    };

    const getSortedTodos = (todosList) => {
        let sortOrder = sorterSelect.value;
        let sortedList;

        switch (sortOrder) {
            case "asc":
                sortedList = getOldestToRecent(todosList);
                break;
            case "desc":
                sortedList = getRecentToOldest(todosList);
                break;

            default:
                break;
        }

        return sortedList;
    };

    return { getSortedTodos };
}();

export default todosSorter;