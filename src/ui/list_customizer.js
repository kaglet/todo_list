import createList from "../application_state_logic/create_list";

let listAdditionController = function () {
    const showCustomizerPane = () => {

    } 

    const hideCustomizerPane = () => {

    };

    const addQuickList = (name) => {
        let list = createList();
        list.setName(name);
        // TODO: Store list somewhere after creating (maybe list storage not vague task manager which is only for list management anyway)
    };
}();

export default listAdditionController;