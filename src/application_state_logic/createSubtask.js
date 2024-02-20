import createTodo from "./createTodo";

let createSubtask = function() {
    let subtask = Object.create(createSubtask.proto);

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