import createList from "./create_list";
import listsManager from "../all_lists_manager/lists_manager";

let createDefaultList = function() {
    let list = Object.create(createList.proto);
    list.setName("All");
    list.todos = [];

    listsManager.addList(list);

    return list;
}();

createDefaultList.proto = {
    getAllListsTodos() {
        // TODO: Return stitched up results from all lists with todos merged together
        listsManager.getLists().forEach(list => {

        });
        return ;
    }
};

Object.setPrototypeOf(createDefaultList.proto, createList.proto);

export default createDefaultList;