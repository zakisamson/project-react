import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import { useState } from 'react';
import ExpensesList from './ExpensesList';

function Expenses(props) {
  const [expensesYearFilter, setExpensesYearFilter] = useState()

  const handleChangeYear = (year) => {
    setExpensesYearFilter(year)
  }

  const filteredExpenses = props.items.filter(item => item.date.getFullYear() == expensesYearFilter)

  return (
    <Card className="expenses">
      <ExpensesFilter handleChangeYear={handleChangeYear} selectedYear={expensesYearFilter} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;