let listsManager = function() {
    let lists = []; 
    
    const addList = (list) => {
        lists.push(list);
    };

    const removeList = (list) => {
        let index = lists.indexOf(list);
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