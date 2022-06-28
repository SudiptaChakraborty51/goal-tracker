import React from "react";
import GoalItems from './GoalItems';
import './GoalsList.css';

function GoalsList(props) {
    return (
        <ul className="goal-list">
            {props.items.map(goal => (
                <GoalItems
                    key={goal.id}
                    id={goal.id}
                    onDelete={props.onDeleteGoal}
                    >{goal.text}
                </GoalItems>
            ))}
        </ul>
    );
}

export default GoalsList;