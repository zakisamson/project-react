import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [Title, setTitle] = useState("");
  const [Amount, setAmount] = useState("");
  const [inputDate, setInputDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   title: "",
  //   amount: "",
  //   date: "",
  // });
  const [showDisplay, setShowDisplay] = useState(false)

  const titleChangeHandler = (event) => {
    setTitle(event.target.value)
    // setUserInput({
    //     ...userInput,
    //     title: event.target.value
    // })

    //this is the better way to get previous state,
    //because React scheduling might fucks up the last state.
    //this way it's guaranteed to get the super latest update
    // setUserInput((prevState) => {
    //   return { ...prevState, title: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value)
    // setUserInput({
    //     ...userInput,
    //     amount: event.target.value
    // })

    // setUserInput((prevState) => {
    //   return { ...prevState, amount: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    setInputDate(event.target.value)
    console.log()
    // setUserInput({
    //     ...userInput,
    //     date: event.target.value
    // })
    // setUserInput((prevState) => {
    //   return { ...prevState, date: new Date(event.target.value) };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // const expense = userInput;

    // props.onSaveExpenseData(expense)
    // setUserInput({
    //   title: "",
    //   amount: "",
    //   date: "",
    // });
    
    const expenseData = {
      title: Title,
      amount: +Amount,
      date: new Date(inputDate)
    }
    props.onSaveExpenseData(expenseData)

    setTitle("")
    setAmount("")
    setInputDate("")

    setShowDisplay(!showDisplay)
  };
  return (
    <div>
      {!showDisplay && <button onClick={() => setShowDisplay(!showDisplay)} >Add New Expense</button>}
      <form onSubmit={submitHandler} style={{ display: showDisplay ? "block" : "none" }}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={Title}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={Amount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2050-12-31"
              value={inputDate}
              onChange={dateChangeHandler}
            />
          </div>
          <div className="new-expense__actions">
            <button type="reset" onClick={() => setShowDisplay(!showDisplay)}>Cancel</button>
            <button type="submit">Add expense</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
