import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import { useState } from 'react';

function Expenses(props) {

  const [expensesYearFilter, setExpensesYearFilter] = useState("2022")

  const handleChangeYear = (year) => {
    setExpensesYearFilter(year)
    console.log("this is from expenses.js")
    console.log(expensesYearFilter)
  }

  return (
    <Card className="expenses">
      <ExpensesFilter handleChangeYear={handleChangeYear} selectedYear={expensesYearFilter} />
      {props.items.map((item) => <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />)}
    </Card>
  );
}

export default Expenses;