import Card from "./UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
const ExpenseItem = (props) => {
  const clickHandler = ()=> {
    console.log('Clicked!!!!!')
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item_description'>
        <h2>{props.title}</h2>
        <div className='expense-item_price'>${props.amount}</div>
        <button onClick={clickHandler}>Delete Expense </button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
