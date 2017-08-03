import TodoApp from './app/todo/TodoApp';

(function () {
    new TodoApp(document, [
        'Clean Batcave',
        'Save Gotham',
        'Do the dishes'
    ]);
})();