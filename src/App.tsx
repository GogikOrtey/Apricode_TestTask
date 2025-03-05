// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import './App.scss';

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
            <p>Начальный текст</p>
        </div>
    );
}

export default App

console.log("123");

// Создание нового объекта типа Task
const newTask: Task = {
    id: 1,
    checked: false,
    text_task: "Это моя первая задача",
    parent: null,
    children: [] // Пока без подзадач
};

// Вывод объекта в консоль
console.log("Созданная задача:", newTask);