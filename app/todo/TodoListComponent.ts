import { Todo, TodoState } from './../model/model';

export default class TodoListComponent {

    private $el: HTMLElement;

    constructor(el: HTMLElement) {
        this.$el = el;

    }

    private renderTodo(todo) {
        const template = $(
            `<div class='todo-item list-group-item ${(todo.state == 2 ? 'completed' : '')}'>
                <div class='row'>
                    <div class='col-md-2 text-center'>
                        <i class='incomplete glyphicon glyphicon-unchecked text-muted text-giant'></i>
                        <i class='completed-indicator completed glyphicon glyphicon-ok text-giant'></i>
                    </div>
                    <div class='col-md-10'>
                        <span class='incomplete text-giant'>${ todo.name}</span>
                        <span class='completed text-strikethrough text-muted text-giant'>${ todo.name}</span>
                    </div>
                </div>
                <div class='clearfix'></div>
            </div`);

        template.on('click', function () {
            var event = document.createEvent('CustomEvent');

            event.initCustomEvent('todo-toggle', true, true, { todoId: todo.id });
            this.dispatchEvent(event);
        });

        return template;
    }

    render(todos) {
        $(this.$el).html('');

        if (!todos.length) {
            const templateString = `<div class='list-group-item text-center text-giant'>
                                        <strong>You've completed everything you needed to do!</strong>
                                    </div>`;

            $(this.$el).html(templateString);
            return;
        }

        for (const index in todos) {
            const todo = todos[index];
            this.renderTodo(todo).appendTo(this.$el);
        }
    }
}