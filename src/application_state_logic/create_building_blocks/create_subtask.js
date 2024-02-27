import createTodo from "./createTodo";

let createSubtask = function(name) {
    let subtask = Object.create(createSubtask.proto);
    subtask.setName(name);

    return subtask;
};

createSubtask.proto = {
    setName(name) {
        this.name = name;
    },
    getName() {
        return this.name;
    },
};

Object.setPrototypeOf(createSubtask.proto, createTodo.proto);

export default createSubtask;