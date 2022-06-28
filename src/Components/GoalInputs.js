import React, { useState } from "react";
import './GoalInputs.css';

function GoalInputs(props) {
    const [enteredGoalInput, setEnteredGoalInput] = useState('');
    const [isValid, setIsValid] = useState(true);

    const goalInputChangeHandler = event => {
        setEnteredGoalInput(event.target.value);
        if(event.target.value.trim().length > 0) {
            setIsValid(true);
        }
    }

    const formSubmitHandler = event =>  {
        event.preventDefault();
        if(enteredGoalInput.trim().length === 0){
            setIsValid(false);
            return;
        }
        props.onAddGoals(enteredGoalInput);
        setEnteredGoalInput('');
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="form-control">
                <label style={{color: !isValid? '#dc2626' : 'black'}}>Goal</label>
                <input type="text" value={enteredGoalInput} onChange={goalInputChangeHandler} 
                       style={{borderColor: !isValid? '#dc2626' : '#bfdbfe', 
                       backgroundColor: !isValid? '#fca5a5' : 'transparent'}} 
                       placeholder='write your goal here'
                />
            </div>
            <button type="submit" className="button">Add Goal</button>
        </form>
    )
}

export default GoalInputs;