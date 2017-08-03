"use strict";
exports.__esModule = true;
var todoService_1 = require("../service/todoService");
var TodoListComponent_1 = require("./TodoListComponent");
var TodoApp = (function () {
    function TodoApp(el, todos) {
        this.todoService = new todoService_1["default"](todos);
        this.init(el);
    }
    TodoApp.prototype.renderTodos = function () {
        var todos = this.todoService.getAll();
        this.todoList.render(todos);
    };
    TodoApp.prototype.addTodo = function (todoName) {
        this.todoService.add(todoName);
    };
    TodoApp.prototype.clearComplete = function () {
        this.todoService.clearComplete();
        this.renderTodos();
    };
    TodoApp.prototype.toggleTodoState = function (todoId) {
        this.todoService.toggle(todoId);
        this.renderTodos();
    };
    TodoApp.prototype.init = function (el) {
        var addTodoFormEl = el.getElementsByClassName('add-todo')[0];
        var addTodoNameEl = addTodoFormEl.getElementsByTagName('input')[0];
        var todoListEl = el.getElementsByClassName('todo-list')[0];
        var clearCompleteEl = el.getElementsByClassName('clear-completed')[0];
        this.eventHandler({ addTodoFormEl: addTodoFormEl, addTodoNameEl: addTodoNameEl, todoListEl: todoListEl, clearCompleteEl: clearCompleteEl });
        this.todoList = new TodoListComponent_1["default"](todoListEl);
        this.renderTodos();
    };
    TodoApp.prototype.eventHandler = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _a = args[0], addTodoFormEl = _a.addTodoFormEl, addTodoNameEl = _a.addTodoNameEl, todoListEl = _a.todoListEl, clearCompleteEl = _a.clearCompleteEl;
        addTodoFormEl.addEventListener('submit', function (e) {
            _this.addTodo(addTodoNameEl.value);
            addTodoNameEl.value = '';
            e.preventDefault();
        });
        todoListEl.addEventListener('todo-toggle', function (e) {
            var todoId = e.details.todoId;
            _this.todoService.toggle(todoId);
            _this.renderTodos();
        });
        clearCompleteEl.addEventListener('click', function (e) {
            _this.clearComplete();
        });
    };
    return TodoApp;
}());
exports["default"] = TodoApp;
