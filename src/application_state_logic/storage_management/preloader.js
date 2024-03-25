import createTodoPane from "../../ui/layout_component_outlines/todo_pane.js";
import selectiveListsUpdater from "../../ui/selective_items_updater/list_UI_updater.js";
import selectiveTodosUpdater from "../../ui/selective_items_updater/todo_UI_updater.js";
import listsManager from "../all_lists_management/lists_manager.js";
import createDefaultList from "../create_building_blocks/create_default_list.js";
import createList from "../create_building_blocks/create_list.js";
import createTodo from "../create_building_blocks/create_todo.js";
import storageManager from "./storage_manager.js";

let preloader = function () {
    const attachDefaultListPrototype = (list) => {
        Object.setPrototypeOf(list, createDefaultList.proto);
        return list;
    };

    const attachListPrototype = (list) => {
        Object.setPrototypeOf(list, createList.proto);
        return list;
    };

    const attachTodoPrototype = (todo) => {
        Object.setPrototypeOf(todo, createTodo.proto);
        return todo;
    };

    const populateInitialLists = () => {
        if (!localStorage.getItem("lists")) {
            createDefaultList();
            // Store default list in storage 
            storageManager.saveChanges();
            listsManager.addList(list);
            createTodoPane.setListHeading(list.getName());
        } else {
            storageManager.getAllLists().forEach((list, i) => {
                let listWithMethods;
                if (i === 0) {
                    listWithMethods = attachDefaultListPrototype(list);
                    createDefaultList(listWithMethods.getName(), listWithMethods.getColor());
                    createTodoPane.setListHeading(listWithMethods.getName());
                } else {
                    listWithMethods = attachListPrototype(list);
                }

                listWithMethods.getTodos().forEach(todo => {
                    todo = attachTodoPrototype(todo);
                });

                // Show default list todos in display after methods for todo are attached to be used in addTodoDisplay method
                listsManager.addList(listWithMethods);
            });

            // After the list is added to the manager todos can be shown where a search can be performed within the lists manager for finding the list a todo belongs in
            selectiveTodosUpdater.showListTodos(listsManager.getList(0));

        }
    };

    const updateDisplayWithLists = () => {
        selectiveListsUpdater.clearDisplay();
        selectiveListsUpdater.showAllLists();
    };

    populateInitialLists();
    updateDisplayWithLists();
}();

export default preloader;