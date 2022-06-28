import React, { useState } from 'react';
import './App.css';
import GoalsList from './Components/GoalsList';
import GoalInputs from './Components/GoalInputs';

const DUMMY_GOALS = [
  {text: 'Do all assignments!', id: 'g1'},
  {text: 'Learn State', id: 'g2'}
];

function App() {
  const [goals, setGoals] = useState(DUMMY_GOALS);

  const addGoalsHandler = (enteredgoals) => {
      setGoals(prevGoals => {
      const newGoals = [...prevGoals];
      newGoals.unshift({ text: enteredgoals, id: Math.random().toString() });
      return newGoals;
    })
  }

  const deleteGoalsHandler = (goalId) => {
    setGoals(prevGoals => {
      const newGoals = prevGoals.filter(goal => goal.id !== goalId);
      return newGoals;
    })
  }

  let content = (
    <p style={{ textAlign: 'center', color: 'red' }}>No goals found. Are you willing to add one?</p>
  )

  if(goals.length > 0){
    content = (
      <GoalsList items={goals} onDeleteGoal={deleteGoalsHandler} />
    );
  }
  
  return (
    <div className="App">
      <h1 className='heading'>List your Goals</h1>
      <section id="goal-form">
        <GoalInputs  onAddGoals = {addGoalsHandler}/>
      </section>
      <section id="goals">
        {content}
      </section>
    </div>
  );
}

export default App;
