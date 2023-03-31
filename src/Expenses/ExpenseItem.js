import React, { useState } from "react";
import Card from "./UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  console.log('ExpenseItem evaluted by React');
 
  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item_description'>
        <h2>{title}</h2>
        <div className='expense-item_price'>${props.amount}</div>
        <button onClick={clickHandler}>Change Title </button>
      </div>
    </Card>
  );
}

export default ExpenseItem; 
