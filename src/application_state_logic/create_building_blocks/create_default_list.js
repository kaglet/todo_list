import createList from "./create_list";
import listsManager from "../all_lists_management/lists_manager";
import createTodoPane from "../../ui/layout_component_outlines/todo_pane";

// This method must only be executed once to add only one default list with index 0
let createDefaultList = function(name = "All", color = "FE5F55") {
    let list = Object.create(createDefaultList.proto);
    list.setName(name);
    list.setColor(color);
    list.todos = [];

    return list;
};

createDefaultList.proto = {
    getAllListsTodos() {
        let allTodos = [];
        // Return stitched up results of todos from all lists merged together
        listsManager.getLists().forEach(list => {
            allTodos = [...allTodos, ...list.getTodos()];
        });
        return allTodos;
    },
};

Object.setPrototypeOf(createDefaultList.proto, createList.proto);

export default createDefaultList;