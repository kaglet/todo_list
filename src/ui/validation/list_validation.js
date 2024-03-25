import listsManager from "../../application_state_logic/all_lists_management/lists_manager";

let listValidator = function() {
    const isInvalidOnQuickAdd = (name) => {
        return isNameInvalid(name);
    };

    const isInvalidOnCustomAdd = (name) => {
        return isNameInvalid(name);
    };

    const isInvalidOnEdit = (name) => {
        return isNameInvalid(name);
    };

    const isNameInvalid = (name) => {
        const isNameEmpty = () => {
            return name === "";
        };
    
        const isNameTaken = () => {
            return listsManager.getLists().some(list => list.getName() === name);
        };
        
        return isNameEmpty() || isNameTaken();
    };

    return { isInvalidOnCustomAdd, isInvalidOnEdit, isInvalidOnQuickAdd };
}();

export default listValidator;