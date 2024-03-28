import { isToday, differenceInCalendarDays, endOfDay, isPast } from "date-fns";
import createTodoPane from "../layout_component_outlines/todo_pane";
import selectionTracker from "../../application_state_logic/selection_tracker/selection_tracker";
import selectiveTodosUpdater from "../selective_items_updater/todo_UI_updater";

let todosFilter = function () {
    let filterSelect = createTodoPane.getFilterSelect();
    filterSelect.addEventListener('change', () => {
        let list = selectionTracker.getSelectedList();
        
        selectiveTodosUpdater.clearDisplay();
        selectiveTodosUpdater.showListTodos(list);
    });

    const getUpcomingWeekTodos = (todosList) => {
        let todaysDate = endOfDay(new Date());
        const daysDifference = 7;

        let filteredList = todosList.filter(todo => differenceInCalendarDays(todo.getScheduleDate(), todaysDate) <= daysDifference && !isPast(todo.getScheduleDate()));
        console.log("Before and after filter");
        console.log(todosList);
        console.log(filteredList);

        return filteredList;
    };

    const getUpcomingMonthTodos = (todosList) => {
        let todaysDate = endOfDay(new Date());
        const daysDifference = 30;

        let filteredList = todosList.filter(todo => differenceInCalendarDays(todo.getScheduleDate(), todaysDate) <= daysDifference && !isPast(todo.getScheduleDate()));

        return filteredList;
    };

    const getTodayTodos = (todosList) => {
        let filteredList = todosList.filter(todo => isToday(todo.getScheduleDate()));
        return filteredList;
    };

    const getOverdueTodos = (todosList) => {
        let todaysDate = endOfDay(new Date());
        let filteredList = todosList.filter(todo => isPast(todo.getScheduleDate()));
        return filteredList;
    };

    // from currently selected filter get the filtered todos
    const getFilteredTodos = (todosList) => {
        let filterTimeSpan = filterSelect.value;
        let filteredList;
        switch (filterTimeSpan) {
            case "today":
                filteredList = getTodayTodos(todosList);
                break;
            case "next week":
                filteredList = getUpcomingWeekTodos(todosList);
                break;
            case "next thirty days":
                filteredList = getUpcomingMonthTodos(todosList);
                break;
            case "all":
                filteredList = todosList;
                break;
            case "overdue":
                filteredList = getOverdueTodos(todosList);
                break;
            default:
                break;
        }

        return filteredList;
    };

    return { getFilteredTodos };
}();

export default todosFilter;