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