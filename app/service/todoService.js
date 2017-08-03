"use strict";
exports.__esModule = true;
var model_1 = require("./../model/model");
var _lastId = 0;
var generateTodoId = function () {
    return _lastId += 1;
};
var clone = function (src) {
    var clone = JSON.stringify(src);
    return JSON.parse(clone);
};
var TodoService = (function () {
    function TodoService(todos) {
        var _this = this;
        this.todos = [];
        if (todos) {
            todos.forEach(function (todo) { return _this.add(todo); });
        }
    }
    TodoService.prototype.add = function (input) {
        var todo = {
            id: generateTodoId(),
            name: null,
            state: model_1.TodoState.Active
        };
        if (typeof input === 'string') {
            todo.name = input;
        }
        else if (typeof input.name === 'string') {
            todo.name = input;
        }
        else {
            throw 'Invalid ToDo name!';
        }
        this.todos.push(todo);
        return todo;
    };
    TodoService.prototype.clearComplete = function () {
        this.todos = this.todos.filter(function (x) { return x.state == model_1.TodoState.Active; });
    };
    TodoService.prototype.getAll = function () {
        return clone(this.todos);
    };
    ;
    TodoService.prototype.getById = function (todoId) {
        var todo = this._find(todoId);
        return todo;
    };
    TodoService.prototype.toggle = function (todoId) {
        var todo = this._find(todoId);
        if (!todo)
            return;
        switch (todo.state) {
            case model_1.TodoState.Active:
                todo.state = model_1.TodoState.Complete;
                break;
            case model_1.TodoState.Complete:
                todo.state = model_1.TodoState.Active;
                break;
        }
    };
    TodoService.prototype._find = function (todoId) {
        var filtered = this.todos.filter(function (x) { return x.id == todoId; });
        if (filtered.length)
            return filtered[0];
        return null;
    };
    return TodoService;
}());
exports["default"] = TodoService;
