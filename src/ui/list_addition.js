import createList from "../application_state_logic/create_list";
import listManager from "../application_state_logic/list_manager";

let listAdditionController = function () {
    let nameInput = document.querySelector('input.list.name');
    let quickAddButton = document.querySelector('button.list.quick.add');
    let customAddButton = document.querySelector('button.list.custom.add');
    let showCustomizerButton = document.querySelector('button.list.customizer.show');
    let closeCustomizerButton = document.querySelector('button.list.customizer.close');

    const showCustomizerPane = () => {
        // TODO: Create and show dialog with all the inputs and options (basic for now)
    }; 

    const hideCustomizerPane = () => {
        // TODO: Close dialog modal and wipe form inputs
    };

    const addQuickList = () => {
        let name = nameInput.textContent;
        if (name.trim() === "") return;
        let list = createList();
        list.setName(name);
        listManager.addList(list);
        // TODO: Store list somewhere after creating (maybe list storage not vague task manager which is only for list management anyway)
    };

    const getCustomDetails = () => {
        // Get rest of custom details
        name;
        return {name};
    };

    const addCustomList = () => {
        let {name} = getCustomDetails();
        let list = createList();
        list.setName(name);
        listManager.addList(list);
    };

    quickAddButton.addEventListener('click', addQuickList);
    customAddButton.addEventListener('click', addCustomList);
    showCustomizerButton.addEventListener('click', showCustomizerPane);
    closeCustomizerButton.addEventListener('click', hideCustomizerPane);
}();

export default listAdditionController;