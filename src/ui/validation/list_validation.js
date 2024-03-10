import listsManager from "../../application_state_logic/all_lists_manager/lists_manager";

let listValidator = function() {
    const isValidOnQuickAdd = ({ name }) => {
        return isNameValid(name);
    };

    const isValidOnCustomAdd = ({ name, date }) => {
        return isNameValid(name) && isDateValid(date);
    };

    const isValidOnEdit = ({ name, date }) => {
        return isNameValid(name) && isDateValid(date);
    };

    const isNameValid = (name) => {
        const isNameFilled = () => {
            return name.trim() !== "";
        };
    
        const isNameNotTaken = () => {
            return !listsManager.getLists().some(list => list.getName() === name);
        };
        
        return isNameFilled() && isNameNotTaken();
    };

    const isDateValid = (date) => {
        return true;
    };

    return { isValidOnCustomAdd, isValidOnEdit, isValidOnQuickAdd };
}();

export default listValidator;