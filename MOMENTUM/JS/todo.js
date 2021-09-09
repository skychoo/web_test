const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY ="todos";
let toDos = [];

function fn_saveToDos()
{
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function fn_deleteToDo(event)
{
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id != parseInt(li.id));
    fn_saveToDos();
}

function fn_paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
   
    button.innerText = "X";
    button.addEventListener("click", fn_deleteToDo);
    li.appendChild(span);
    li.appendChild(button);    
    toDoList.appendChild(li);
}

function fn_handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id : Date.now(),
    };
    toDos.push(newTodoObj);
    fn_paintToDo(newTodoObj);
    fn_saveToDos();
}

toDoForm.addEventListener("submit", fn_handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos != null)
{
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(fn_paintToDo);
}