import './App.css';
import Todoitem from './components/Todoitem';
import { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'Wake up', completed: false },
    { id: 2, title: 'Put on pants', completed: true },
    { id: 3, title: 'Make coffee', completed: false },
  ]);

  const toggleTaskCompleted = (id) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id !== id) return todo;
      return { ...todo, completed: !todo.completed };
    });
    setTodoList(newTodoList);
  };

  const deleteTask = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  return (
    <div>
      {todoList.map((todo) => (
        <Todoitem
          key={todo.id}
          todo={todo}
          toggleTaskCompleted={toggleTaskCompleted}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default App;
