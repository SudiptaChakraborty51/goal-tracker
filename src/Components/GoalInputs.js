import React, { useState } from "react";
import './GoalInputs.css';

function GoalInputs(props) {
    const [enteredGoalInput, setEnteredGoalInput] = useState('');

    const goalInputChangeHandler = event => {
        setEnteredGoalInput(event.target.value);
    }

    const formSubmitHandler = event =>  {
        event.preventDefault();
        props.onAddGoals(enteredGoalInput);
        setEnteredGoalInput('');
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="form-control">
                <label>Goal</label>
                <input type="text" value={enteredGoalInput} onChange={goalInputChangeHandler} />
            </div>
            <button type="submit" className="button">Add Goal</button>
        </form>
    )
}

export default GoalInputs;