import React from 'react';
import './GoalItems.css';

function GoalItems(props) {
    const deleteHandler = () => {
        props.onDelete(props.id);
    }
    return(
        <li className="goal-item" onClick={deleteHandler}>
            {props.children}
        </li>
    );
}

export default GoalItems;