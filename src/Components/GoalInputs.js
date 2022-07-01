import React, { useState } from "react";
import styled from 'styled-components';

function GoalInputs(props) {
    const Button = styled.button`
        font: inherit;
        padding: 0.5rem 1.5rem;
        border: 2px solid #2563eb;
        color: white;
        background: #2563eb;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
        cursor: pointer;
    
        &:focus {
        outline: none;
        }
    
        &:hover,
        &:active {
        background: #3b82f6;
        border-color: #3b82f6;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
        }
    `;

    const FormControl = styled.div`
        margin: 0.5rem 0;
    
        & label {
        font-weight: bold;
        display: block;
        margin-bottom: 0.5rem;
        font-size: x-large;
        }
    
        & input {
        display: block;
        width: 100%;
        height: 2rem;
        border: 2px solid #bfdbfe;
        font: inherit;
        line-height: 1.5rem;
        padding: 0 0.25rem;
        }
    
        & input:focus {
        outline: none;
        background: #bfdbfe;
        border-color: #2563eb;
        }
    
        &.invalid input {
        border-color: #dc2626;
        background-color: #fac0c0;
        }
    
        &.invalid label {
        color: #dc2626;
        }
    `;
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
            <FormControl className={!isValid && 'invalid'}>
                <label>Goal</label>
                <input type="text" value={enteredGoalInput} onChange={goalInputChangeHandler} placeholder='write your goal here'/>
            </FormControl>
            <Button type="submit">Add Goal</Button>
        </form>
    )
}

export default GoalInputs;