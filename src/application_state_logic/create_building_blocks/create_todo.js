let createTodo = function(name) {
    let todo = Object.create(createTodo.proto);
    todo.setName(name);
    todo.subtasks = [];
    todo.complete = false;
    
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
    setScheduleDate(scheduleDate) {
        this.scheduleDate = scheduleDate;
    },
    getScheduleDate() {
        return this.scheduleDate;
    },
    setDescription(desc) {
        this.description = desc;
    },
    toggleComplete() {
        this.complete = this.complete === true ? false : true; 
    },
    getCompletionStatus() {
        return this.complete;
    },
};

export default createTodo;

