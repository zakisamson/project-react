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
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
  );
}

export default Expenses;