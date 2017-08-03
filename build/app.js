/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, TodoApp_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (function () {
        new TodoApp_1.default(document, [
            'Clean Batcave',
            'Save Gotham',
            'Do the dishes'
        ]);
    })();
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3), __webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, TodoService_1, TodoListComponent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TodoApp = (function () {
        function TodoApp(el, todos) {
            this.todoService = new TodoService_1.default(todos);
            this.init(el);
        }
        TodoApp.prototype.renderTodos = function () {
            var todos = this.todoService.getAll();
            this.todoList.render(todos);
        };
        TodoApp.prototype.addTodo = function (todoName) {
            this.todoService.add(todoName);
            this.renderTodos();
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
            this.todoList = new TodoListComponent_1.default(todoListEl);
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
                var todoId = e.detail.todoId;
                _this.todoService.toggle(todoId);
                _this.renderTodos();
            });
            clearCompleteEl.addEventListener('click', function (e) {
                _this.clearComplete();
            });
        };
        return TodoApp;
    }());
    exports.default = TodoApp;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, model_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
            return clone(todo);
        };
        TodoService.prototype.toggle = function (todoId) {
            console.log('toogle', todoId);
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
    exports.default = TodoService;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TodoState;
    (function (TodoState) {
        TodoState[TodoState["Active"] = 1] = "Active";
        TodoState[TodoState["Complete"] = 2] = "Complete";
    })(TodoState = exports.TodoState || (exports.TodoState = {}));
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TodoListComponent = (function () {
        function TodoListComponent(el) {
            this.$el = el;
        }
        TodoListComponent.prototype.renderTodo = function (todo) {
            var template = $("<div class='todo-item list-group-item " + (todo.state == 2 ? 'completed' : '') + "'>\n                <div class='row'>\n                    <div class='col-md-2 text-center'>\n                        <i class='incomplete glyphicon glyphicon-unchecked text-muted text-giant'></i>\n                        <i class='completed-indicator completed glyphicon glyphicon-ok text-giant'></i>\n                    </div>\n                    <div class='col-md-10'>\n                        <span class='incomplete text-giant'>" + todo.name + "</span>\n                        <span class='completed text-strikethrough text-muted text-giant'>" + todo.name + "</span>\n                    </div>\n                </div>\n                <div class='clearfix'></div>\n            </div");
            template.on('click', function () {
                var event = document.createEvent('CustomEvent');
                event.initCustomEvent('todo-toggle', true, true, { todoId: todo.id });
                this.dispatchEvent(event);
            });
            return template;
        };
        TodoListComponent.prototype.render = function (todos) {
            $(this.$el).html('');
            if (!todos.length) {
                var templateString = "<div class='list-group-item text-center text-giant'>\n                                        <strong>You've completed everything you needed to do!</strong>\n                                    </div>";
                $(this.$el).html(templateString);
                return;
            }
            for (var index in todos) {
                var todo = todos[index];
                this.renderTodo(todo).appendTo(this.$el);
            }
        };
        return TodoListComponent;
    }());
    exports.default = TodoListComponent;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map