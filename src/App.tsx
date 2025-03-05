// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import './App.scss';

console.clear();

interface Task {
    id: number;		        // Уникальный номер задачи (целое число с 1)
    checked: boolean;	    // Выделена ли задача
    text_task: string;	    // Текст задачи
    parent: Task | null;    // Ссылка на родительскую задачу, null для корневых задач
    children: Task[];	    // Все подзадачи текущей задачи
}

function App() {
    return (
        <div>
            <h2>Начальный текст</h2>
        </div>
    );
}

console.log("123");

// Здесь будут храниться все задачи первого уровня
let arrOfAllTasks_1lvl = [];

// Функция, для более удобного создания задач
function CreateTask(inp_id:number, inp_checked:boolean, inp_text_task:string, inp_parent:any, inp_children:any): Task {
    let newTask: Task = {
        id: inp_id,
        checked: inp_checked,
        text_task: inp_text_task,
        parent: inp_parent,
        children: inp_children 
    };

    return newTask;
}

// // Создание нового объекта типа Task
// const newTask: Task = {
//     id: 1,
//     checked: false,
//     text_task: "Это моя первая задача",
//     parent: null,
//     children: [] // Пока без подзадач
// };

let task1_1 = CreateTask(1, true, "task1_1", null, []);
let task1 = CreateTask(1, true, "task1", null, [task1_1]);

arrOfAllTasks_1lvl.push(task1);

console.log("Все существующие задачи:");
for(let i = 0; i < arrOfAllTasks_1lvl.length; i++) {
    console.log("Созданная задача:", arrOfAllTasks_1lvl[i]);
}















































export default App