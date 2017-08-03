import { Todo, TodoState } from './../model/model';
import TodoService, { ITodoService } from '../service/TodoService';
import TodoListComponent from './TodoListComponent';

export default class TodoApp {

    private todoService: ITodoService;
    private todoList: TodoListComponent;

    constructor(el, todos) {
        this.todoService = new TodoService(todos);
        this.init(el);
    }

    renderTodos() {
        const todos = this.todoService.getAll();
        this.todoList.render(todos);
    }

    addTodo(todoName) {
        this.todoService.add(todoName);
        this.renderTodos();
    }

    clearComplete() {

        this.todoService.clearComplete();
        this.renderTodos();
    }

    toggleTodoState(todoId) {
        this.todoService.toggle(todoId);
        this.renderTodos();
    }

    init(el) {
        const addTodoFormEl = el.getElementsByClassName('add-todo')[0];
        const addTodoNameEl = addTodoFormEl.getElementsByTagName('input')[0];
        const todoListEl = el.getElementsByClassName('todo-list')[0];
        const clearCompleteEl = el.getElementsByClassName('clear-completed')[0];

        this.eventHandler({ addTodoFormEl, addTodoNameEl, todoListEl, clearCompleteEl });

        this.todoList = new TodoListComponent(todoListEl);

        this.renderTodos();
    }

    eventHandler(...args) {

        const { addTodoFormEl, addTodoNameEl, todoListEl, clearCompleteEl } = args[0];

        addTodoFormEl.addEventListener('submit', (e) => {

            this.addTodo(addTodoNameEl.value);
            addTodoNameEl.value = '';
            e.preventDefault();
        });

        todoListEl.addEventListener('todo-toggle', (e) => {
            const todoId = e.detail.todoId;

            this.todoService.toggle(todoId);
            this.renderTodos();
        });

        clearCompleteEl.addEventListener('click', (e) => {
            this.clearComplete();
        });
    }
}