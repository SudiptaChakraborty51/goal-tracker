import React, { useState } from "react";
// import styled from 'styled-components';
import styles from './GoalInputs.module.css';

// const Button = styled.button`
//     width: 100%;
//     font: inherit;
//     padding: 0.5rem 1.5rem;
//     border: 2px solid #2563eb;
//     color: white;
//     background: #2563eb;
//     box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//     cursor: pointer;

//     &:focus {
//     outline: none;
//     }

//     &:hover,
//     &:active {
//     background: #3b82f6;
//     border-color: #3b82f6;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//     }

//     @media(min-width: 768px) {
//         width: auto;
//     }
// `;

// const FormControl = styled.div`
//     margin: 0.5rem 0;

//     & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     font-size: x-large;
//     color: ${props=>props.invalid? '#dc2626' : 'black'};
//     }

//     & input {
//     display: block;
//     width: 100%;
//     height: 2rem;
//     border: 2px solid ${props=>props.invalid? '#dc2626' : '#bfdbfe'};
//     background-color: ${props=>props.invalid? '#fac0c0' : 'transparent'};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//     }

//     & input:focus {
//     outline: none;
//     background: #bfdbfe;
//     border-color: #2563eb;
//     }
// `;

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
            <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
                <label>Goal</label>
                <input type="text" value={enteredGoalInput} onChange={goalInputChangeHandler} placeholder='write your goal here'/>
            </div>
            <button type="submit" className={styles.button}>Add Goal</button>
        </form>
    )
}

export default GoalInputs;