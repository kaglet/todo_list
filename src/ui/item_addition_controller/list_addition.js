let listAdditionController = function() {
    let nameInput = document.querySelector('input.list.name');
    let quickAddButton = document.querySelector('button.list.quick.add');
    let customAddButton = document.querySelector('button.list.custom.add');

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