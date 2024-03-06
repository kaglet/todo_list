import createList from "./create_list";
import listsManager from "../all_lists_manager/lists_manager";

let createDefaultList = function() {
    let list = Object.create(createDefaultList.proto);
    list.setName("All");
    list.todos = [];

    listsManager.addList(list);

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
    }
};

Object.setPrototypeOf(createDefaultList.proto, createList.proto);

createDefaultList();

export default createDefaultList;