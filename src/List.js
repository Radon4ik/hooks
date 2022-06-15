import React from "react";
import PropTypes from "prop-types";


const List = ({tasks, deleteTask}) => {
    const deleteHandler = () => deleteTask(tasks.index);

    return (
        <ul>
        {tasks.map((task, index) => {
            return <li style={{
                textDecoration: task.isCompleted ? 'line-through' : 'none',
            }} key={index.toString()}>
                {task.name}  {task.description}
                <button onClick={deleteHandler}>x</button>
            </li>
        })}
    </ul>)
};


List.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        isCompleted: PropTypes.bool.isRequired,
    }).isRequired).isRequired,
    deleteTask: PropTypes.func.isRequired,
};

export default List;