import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import {useState} from 'react'
import './ExpenseItem.css';

function ExpenseItem(props) {
  const [testing, setTesting] = useState(props.title)
  const clickHandler = () => {
    setTesting('testing')
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{testing}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button type='button' onClick={clickHandler}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;