let todoValidator = function() {
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
            return name === "";
        };
        
        return isNameEmpty();
    };

    const isDateInvalid = (date) => {
        return false;
    };

    return { isInvalidOnCustomAdd, isInvalidOnEdit, isInvalidOnQuickAdd };
}();

export default todoValidator;