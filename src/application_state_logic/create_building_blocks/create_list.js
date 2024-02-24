let createList = function() {
    let list = Object.create(createList.proto);
    list.setName("Default List");
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
        this.todos.append(todo);
    },
    removeTodo(index) {
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