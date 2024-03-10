import listsManager from "../../application_state_logic/all_lists_manager/lists_manager";

let listValidator = function() {
    const isInvalidOnQuickAdd = (name) => {
        return isNameInvalid(name);
    };

    const isInvalidOnCustomAdd = (name, date) => {
        return isNameInvalid(name) || isDateInvalid(date);
    };

    const isInvalidOnEdit = (name, date) => {
        return isNameInvalid(name) || isDateInvalid(date);
    };

    const isNameInvalid = (name) => {
        const isNameEmpty = () => {
            return name.trim() === "";
        };
    
        const isNameTaken = () => {
            return listsManager.getLists().some(list => list.getName() === name);
        };
        
        return isNameEmpty() || isNameTaken();
    };

    const isDateInvalid = (date) => {
        return false;
    };

    return { isInvalidOnCustomAdd, isInvalidOnEdit, isInvalidOnQuickAdd };
}();

export default listValidator;