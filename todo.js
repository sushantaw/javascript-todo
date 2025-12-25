// It's gonna be a todo list app that runs in the terminal.

const prompt = require('prompt-sync')({ sigint: true });

let todos = [];

function displayTodos() {
    console.log("Welcome to what seems to be a todo list app and it is a todo list app!");
    console.log("Here's some operations so you don't get lost:");
    console.log("1. View Todos");
    console.log("2. Add Todo");
    console.log("3. Remove Todo");
    console.log("4. Exit");
    console.log("-------------------------------");
}
let whateverThisIs = true;

function actualTodoApp() {
    while (whateverThisIs) {
        switch (prompt("Choose an operation (1-4): ")) {
            case "1":
                viewTodos();
                break;
            case "2":
                addTodo();
                break;
            case "3":
                removeTodo();
                break;
            case "4":
                whateverThisIs = false;
                exit();
                break;
            default:
                console.log("Invalid operation. Please choose a number between 1 and 4.");
        }
    }
}

function viewTodos() {
    console.log("Your Todos:");
    if (todos.length === 0) {
        console.log("No todos yet!");
    } else {
        todos.forEach((todo, index) => {
            console.log(`${index + 1}. ${todo}`);
        });
    }
}

function addTodo() {
    const newTodo = prompt("Enter a new todo: ");
    todos.push(newTodo);
    console.log(`Added todo: ${newTodo}`);
}

function removeTodo() {
    const todoIndex = prompt("Enter the index of the todo to remove: ");
    if (todoIndex >= 1 && todoIndex <= todos.length) {
        const removedTodo = todos.splice(todoIndex - 1, 1);
        console.log(`Removed todo: ${removedTodo}`);
    } else {
        console.log("Invalid index.");
    }
}

function exit() {
    console.log("Goodbye!");
}
// calls the function (forgot the first time to call lol)
displayTodos();
actualTodoApp();