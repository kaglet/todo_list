import createList from "./create_list";

// Allows capturing and storing all lists in one central structure here and accessing each
// Storage for lists and their internal building blocks (via internal methods)
// Other methods get list data tracked for display
// All the services for the UI to use and application logic trackers are here, to supply to the UI
// These are all the possible services that are going to be needed, I don't know what else, within these getters and setters available on the object's themselves
let listsManager = function() {
    let lists = []; 
    
    const addList = (list) => {
        lists.append(list);
    };

    const removeList = (index) => {
        lists.splice(index, 1);
    };

    const getLists = () => {
        return lists;
    };

    const getList = (index) => {
        return lists[index];
    };

    return { addList, removeList, getLists, getList };
}();

export default listsManager;