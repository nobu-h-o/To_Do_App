import Task from './Task.tsx';
import { type Task as task } from '../App.tsx';

type CourseTaskListProps = {
  tasks: task[];
  onDeleteTask: (id: number) => void;
};

export default function TaskList({
  tasks,
  onDeleteTask,
}: CourseTaskListProps) {
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
