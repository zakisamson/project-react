import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import { useState } from 'react';

function Expenses(props) {

  const [expensesYearFilter, setExpensesYearFilter] = useState()

  const handleChangeYear = (year) => {
    setExpensesYearFilter(year)
  }

  const filteredExpenses = props.items.filter(item => item.date.getFullYear() == expensesYearFilter)

  return (
    <Card className="expenses">
      <ExpensesFilter handleChangeYear={handleChangeYear} selectedYear={expensesYearFilter} />
      {filteredExpenses.length === 0 && <p>No expenses found.</p>}
      {filteredExpenses.length > 0 && filteredExpenses.map((item) => <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />)}
    </Card>
  );
}

export default Expenses;