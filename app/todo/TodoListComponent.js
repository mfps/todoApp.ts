"use strict";
exports.__esModule = true;
var TodoListComponent = (function () {
    function TodoListComponent(el) {
        this.$el = el;
    }
    TodoListComponent.prototype.renderTodos = function (todo) {
        var template = document.createElement("<div class='todo-item list-group-item " + (todo.state == 2 ? 'completed' : '') + "'>\n                <div class='row'>\n                    <div class='col-md-2 text-center'>\n                        <i class='incomplete glyphicon glyphicon-unchecked text-muted text-giant'></i>\n                        <i class='completed-indicator completed glyphicon glyphicon-ok text-giant'></i>\n                    </div>\n                    <div class='col-md-10'>\n                        <span class='incomplete text-giant'>" + todo.name + "</span>\n                        <span class='completed text-strikethrough text-muted text-giant'>" + todo.name + "</span>\n                    </div>\n                </div>\n                <div class='clearfix'></div>\n            </div");
        template.addEventListener('click', function (e) {
            var event = document.createEvent('CustomEvent');
            event.initCustomEvent('todo-toggle', true, true, { todoId: todo.id });
            e.target.dispatchEvent(event);
        }, true);
        return template;
    };
    TodoListComponent.prototype.render = function (todos) {
        this.$el.innerHTML('');
        if (!todos.length) {
            var templateString = "<div class='list-group-item text-center text-giant'>\n                                        <strong>You've completed everything you needed to do!</strong>\n                                    </div>";
            this.$el.innerHTML(templateString);
            return;
        }
        for (var index in todos) {
            var todo = todos[index];
            var element = "" + this.renderTodos(todo) + this.$el;
            return element;
        }
    };
    return TodoListComponent;
}());
exports["default"] = TodoListComponent;
