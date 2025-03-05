// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import './App.scss';

console.clear();

class Task {
    id: number;                 // Уникальный номер задачи (целое число с 1)
    checked: boolean;           // Выделена ли задача
    text_task: string;          // Текст задачи
    parent: Task | null;        // Ссылка на родительскую задачу, null для корневых задач
    children: Task[];           // Все подзадачи текущей задачи

    constructor(id: number, checked: boolean, text_task: string, parent: Task | null = null, children: Task[] = []) {
        this.id = id;
        this.checked = checked;
        this.text_task = text_task;
        this.parent = parent;
        this.children = children;
    }
}

// Здесь будут храниться все задачи первого уровня
let arrOfAllTasks_1lvl: Task[] = [];


function App() {
    return (
        <div>
            <h2>Начальный текст</h2>
            <GenerateListOfTask  arrOfAllTasks_1lvl={arrOfAllTasks_1lvl} />
        </div>
    );
}

function PushLiElement(current_element: any, i:number) {
    return(
        <li key={i}>
            <input type="checkbox" />
            {current_element.text_task}
        </li>
    );
}

function GenerateListOfTask({ arrOfAllTasks_1lvl }: { arrOfAllTasks_1lvl: Task[] }) {
    const body_ul = [];

    for (let i = 0; i < arrOfAllTasks_1lvl.length; i++) {        
        body_ul.push(
            PushLiElement(arrOfAllTasks_1lvl[i], i)
        );
    }

    return <ul className="mainList">{body_ul}</ul>;
}


// function GenerateListOfTask() {
//     // Используем значения из массива arrOfAllTasks_1lvl

//     return(
//         <ul className="mainList">
//             <li><input type="checkbox"/>Задача 1</li>
//             {/* <li><input type="checkbox" checked={true}/>Задача 2 */}
//             <li><input type="checkbox"/>Задача 2
//                 <ul>
//                     <li> <input type="checkbox"/>Подзадача 1</li>
//                     <li>Подзадача 2
//                         <ul>
//                             <li>Подзадача 1</li>
//                         </ul>
//                     </li>
//                     <li>Подзадача 3</li>
//                 </ul>
//             </li>
//             <li>Задача 3
//                 <ul>
//                     <li>Подзадача 1
//                         <ul>
//                             <li>Подзадача 1</li>
//                         </ul>
//                     </li>
//                 </ul>
//             </li>
//         </ul>
//     );
// }


// Создадим структуру списка для тестирования:

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
let subtask2_1 = new Task(3, true, "2_1", null, []);
let subtask2_2_1 = new Task(4, true, "2_2_1", null, []);
let subtask2_2 = new Task(5, true, "2_2", null, [subtask2_2_1]);
let subtask2_3 = new Task(6, true, "2_3", null, []);

// Создаем задачу 2 с подзадачами
let task2 = new Task(2, true, "2", null, [subtask2_1, subtask2_2, subtask2_3]);

// Создаем подзадачи для задачи 3
let subtask3_1_1 = new Task(8, true, "3_1_1", null, []);
let subtask3_1 = new Task(7, true, "3_1", null, [subtask3_1_1]);

// Создаем задачу 3 с подзадачами
let task3 = new Task(9, true, "3", null, [subtask3_1]);

// Создаем задачу 1 (без подзадач)
let task1 = new Task(1, true, "1", null, []);

// Итоговая структура
arrOfAllTasks_1lvl = [task1, task2, task3];


console.log("Все существующие задачи:");
for (let i = 0; i < arrOfAllTasks_1lvl.length; i++) {
    console.log(arrOfAllTasks_1lvl[i]);
}








































export default App