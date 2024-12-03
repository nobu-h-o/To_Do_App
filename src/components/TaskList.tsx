import Task from './Task.tsx';
import { type Task as task } from '../App.tsx';

type TaskListProps = {
  tasks: task[];
  onDeleteTask: (id: number) => void;
};

export default function TaskList({
  tasks,
  onDeleteTask,
}: TaskListProps) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task id={task.id} title={task.title} onDelete={onDeleteTask}>
            <p>{task.description}</p>
          </Task>
        </li>
      ))}
    </ul>
  );
}
