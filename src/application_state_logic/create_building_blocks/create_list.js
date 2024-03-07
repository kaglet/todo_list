let createList = function(name) {
    let list = Object.create(createList.proto);
    list.setName(name);
    list.todos = [];

    return list;
};

createList.proto = {
    setName(name) {
        this.name = name;
    },
    getName() {
        return this.name;
    },
    addTodo(todo) {
        this.todos.push(todo);
    },
    removeTodo(todo) {
        let index = this.todos.indexOf(todo);
        this.todos.splice(index, 1);
    },
    getTodos() {
        return this.todos;
    },
    getTodo(index) {
        return this.todos[index];
    },
};

export default createList;