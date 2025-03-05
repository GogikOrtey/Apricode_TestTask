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

// let task1_1 = CreateTask(1, true, "task1_1", null, []);
// let task1 = CreateTask(1, true, "task1", null, [task1_1]);

// arrOfAllTasks_1lvl.push(task1);


/*
    Задача 1
    Задача 2
    - Подзадача 1
    - Подзадача 2
    - - Подзадача 1
    - Подзадача 3
    Задача 3
    - Подзадача 1
    - - Подзадача 1
*/


// Создаем подзадачи для задачи 2
let subtask2_1 = CreateTask(3, true, "2_1", null, []);
let subtask2_2_1 = CreateTask(4, true, "2_2_1", null, []);
let subtask2_2 = CreateTask(5, true, "2_2", null, [subtask2_2_1]);
let subtask2_3 = CreateTask(6, true, "2_3", null, []);

// Создаем задачу 2 с подзадачами
let task2 = CreateTask(2, true, "2", null, [subtask2_1, subtask2_2, subtask2_3]);

// Создаем подзадачи для задачи 3
let subtask3_1_1 = CreateTask(8, true, "3_1_1", null, []);
let subtask3_1 = CreateTask(7, true, "3_1", null, [subtask3_1_1]);

// Создаем задачу 3 с подзадачами
let task3 = CreateTask(9, true, "3", null, [subtask3_1]);

// Создаем задачу 1 (без подзадач)
let task1 = CreateTask(1, true, "1", null, []);

// Итоговая структура
arrOfAllTasks_1lvl = [task1, task2, task3];


console.log("Все существующие задачи:");
for(let i = 0; i < arrOfAllTasks_1lvl.length; i++) {
    console.log(arrOfAllTasks_1lvl[i]);
}










































export default App