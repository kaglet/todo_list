import createList from "../create_building_blocks/create_list.js";

let listsManager = function() {
    let lists = []; 
    
    const addList = (list) => {
        lists.push(list);
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

    const createAllList = () => {
        let list = createList("All");

        return list;
    };

    addList(createAllList());
    

    return { addList, removeList, getLists, getList };
}();

export default listsManager;