import { isToday, differenceInCalendarDays, endOfDay, addDays } from "date-fns";
import createTodoPane from "../layout_component_outlines/todo_pane";

let todosFilter = function () {
    const getUpcomingWeekTodos = (todosList) => {
        let todaysDate = endOfDay(new Date());
        const daysDifference = 7;

        let filteredList = todosList.filter(todo => differenceInCalendarDays(todo.getScheduleDate(), todaysDate) <= daysDifference);
        console.log("Before and after filter");
        console.log(todosList);
        console.log(filteredList);

        return filteredList;
    };

    const getUpcomingMonthTodos = (todosList) => {
        let todaysDate = endOfDay(new Date());
        const daysDifference = 30;

        let filteredList = todosList.filter(todo => differenceInCalendarDays(todo.getScheduleDate(), todaysDate) <= daysDifference);

        return filteredList;
    };

    const getTodayTodos = (todosList) => {
        let filteredList = todosList.filter(todo => isToday(todo.getScheduleDate()));
        return filteredList;
    };

    // from currently selected filter get the filtered todos
    const getFilteredTodos = (todosList) => {
        let filterTimeSpan = createTodoPane.getFilterSelect().value;
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
            default:
                break;
        }

        return filteredList;
    };

    return { getFilteredTodos };
}();

export default todosFilter;