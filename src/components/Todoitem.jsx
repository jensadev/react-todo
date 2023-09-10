/* eslint-disable react/prop-types */
// import PropTypes from 'prop-types';

function TodoItem(props) {
  const { todo } = props;

  return (
    <div>
      <label>{todo.title}</label>
      <input
        id={todo.id}
        type="checkbox"
        checked={todo.completed}
        onChange={() => props.toggleTaskCompleted(todo.id)}
      />
      <button onClick={() => props.deleteTask(todo.id)}>Delete</button>
    </div>
  );
}

// TodoItem.propTypes = {
//   todo: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     completed: PropTypes.bool.isRequired,
//   }).isRequired,
//   toggleTaskCompleted: PropTypes.func.isRequired,
//   deleteTask: PropTypes.func.isRequired,
// };

export default TodoItem;
