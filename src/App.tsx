import { useState } from 'react';

import TaskList from './components/TaskList.tsx';
import Header from './components/Header.tsx';
import NewTask from './components/NewTask.tsx';
import tasksImg from './assets/clipboard.png';

export type Task = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(task: string, summary: string) {
    setTasks((prevTasks) => {
      const newTask: Task = {
        id: Math.random(),
        title: task,
        description: summary,
      };
      return [...prevTasks, newTask];
    });
  }

  function handleDeleteTask(id: number) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  return (
    <main>
      <Header image={{ src: tasksImg, alt: 'A list of tasks' }}>
        <h1>Your Tasks</h1>
      </Header>
      <NewTask onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
    </main>
  );
}
