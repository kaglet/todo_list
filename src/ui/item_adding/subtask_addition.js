import createSubtask from "../../application_state_logic/create_building_blocks/create_subtask";

let subtaskAdditionController = function() {
    let addButton = document.querySelector('');

    const addSubtask = () => {
        let name;
        if (name.trim() === "") return;

        createSubtask(name);
    };
    // TODO: Update UI with new subtask block only if one was entered i.e. name (operation should not complete without it)

    addButton.addEventListener('click', addSubtask);
}();