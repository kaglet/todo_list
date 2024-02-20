import createList from "./create_list";

// Allows user capabilities of interacting with task creation and management functionality
let listManager = function() {
    let lists = []; 
    
    // Method clear about what it does, not more
    const addList = (list) => {
        lists.append(list);
    };

    const removeList = (index) => {
        lists.splice(index, 1);
    };

    // Getting the lists is not the problem of anything else
    // Lists more deeply can have their sub-units accessible in the arrays with functionality exposed there
    const getLists = () => {
        return lists;
    };

    const selectList = (index) => {
        return lists[index];
    };

    // displayListItems = () => {
    //     return lists[index].getTodos();
    // };

    return { addList, removeList, getLists, selectList };
}();

// We can access that list and it's methods

export default listManager;