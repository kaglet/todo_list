let createTodo = function(name, list) {
    let todo = Object.create(createTodo.proto);
    todo.setName(name);
    todo.subtasks = [];
    todo.list = list;
    
    return todo;
};

createTodo.proto = {
    setName(name) {
        this.name = name;
    },
    getName() {
        return this.name;
    },
    addSubtask(subtask) {
        this.subtasks.push(subtask);
    },
    removeSubtask(subtask) {
        let index = this.subtasks.indexOf(subtask);
        this.subtasks.splice(index, 1);
    },
    getSubtasks() {
        // return todo list
        return this.subtasks;
    },
    setPriority(priority) {
        this.priority = priority;
    },
    getPriority() {
        return this.priority;
    },
    setScheduleDate(dueDate) {
        this.dueDate = dueDate;
    },
    getScheduleDate() {
        return this.scheduleDate;
    },
    setDescription(desc) {
        this.description = desc;
    },
    getContainingList() {
        return this.list;
    }
};

export default createTodo;

