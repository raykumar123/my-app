import React, { useState } from "react";
import Card from "./UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [amount, setAmount] = useState(props.amount);
  console.log('ExpenseItem evaluted by React');
 
  const clickHandler = () => {
    setAmount('100$');
    console.log(amount);
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item_description'>
        <h2>{props.title}</h2>
        <div className='expense-item_price'>${amount}</div>
        <button onClick={clickHandler}>Change Amount </button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
