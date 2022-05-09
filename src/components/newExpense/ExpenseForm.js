import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  // const [Title, setTitle] = useState("");
  // const [Amount, setAmount] = useState("");
  // const [Date, setDate] = useState("");
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = (event) => {
    // setUserInput({
    //     ...userInput,
    //     title: event.target.value
    // })

    //this is the better way to get previous state,
    //because react scheduling might fucks up the last state.
    //this way it's guaranteed to get the super latest update
    setUserInput((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    // setUserInput({
    //     ...userInput,
    //     amount: event.target.value
    // })

    setUserInput((prevState) => {
      return { ...prevState, amount: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    // setUserInput({
    //     ...userInput,
    //     date: event.target.value
    // })
    setUserInput((prevState) => {
      return { ...prevState, date: event.target.value };
    });
  };
  return (
    <form className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" onChange={titleChangeHandler} />
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          onChange={amountChangeHandler}
        />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input
          type="date"
          min="2019-01-01"
          max="2050-12-31"
          onChange={dateChangeHandler}
        />
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
