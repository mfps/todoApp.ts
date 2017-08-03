import { Todo, TodoState } from './../model/model';

export interface ITodoService {
    add(todo: Todo): Todo;
    add(todo: string): Todo;
    clearComplete(): void;
    getAll(): Todo[];
    getById(todoId: number): Todo;
    toggle(todoId: number): void;
}

let _lastId = 0;

const generateTodoId = (): number => {
    return _lastId += 1;
}

const clone = <T>(src: T): T => {
    const clone = JSON.stringify(src);
    return JSON.parse(clone);
}

export default class TodoService implements ITodoService {

    private todos: Todo[] = [];

    constructor(todos: string[]) {
        if (todos) {
            todos.forEach(todo => this.add(todo));
        }
    }

    add(todo: Todo): Todo
    add(todo: string): Todo
    add(input): Todo {

        let todo: Todo = {
            id: generateTodoId(),
            name: null,
            state: TodoState.Active
        };

        if (typeof input === 'string') {

            todo.name = input;
        } else if (typeof input.name === 'string') {

            todo.name = input;
        } else {

            throw 'Invalid ToDo name!';
        }

        this.todos.push(todo);

        return todo;
    }

    clearComplete(): void {
        this.todos = this.todos.filter(x => x.state == TodoState.Active);
    }

    getAll(): Todo[] {
        return clone(this.todos);
    };

    getById(todoId: number): Todo {
        const todo = this._find(todoId);
        return clone(todo);
    }

    toggle(todoId: number): void {

        console.log('toogle', todoId);

        const todo = this._find(todoId);

        if (!todo) return;

        switch (todo.state) {
            case TodoState.Active:
                todo.state = TodoState.Complete;
                break;
            case TodoState.Complete:
                todo.state = TodoState.Active;
                break;
        }
    }

    private _find(todoId: number): Todo {
        const filtered = this.todos.filter(x => x.id == todoId);
        if (filtered.length) return filtered[0];
        return null;
    }
}