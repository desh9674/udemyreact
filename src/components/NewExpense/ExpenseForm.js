import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  //   const [enteredTitle, setTitle] = useState("");
  //   const [enteredAmount, setAmount] = useState("");
  //   const [enteredDate, setDate] = useState("");
  //console.log(enteredAmount);

  //userState return 2 things, variable and funtion in an array
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  //console.log(userInput);

  // 2 ways to handle user Inputs => multiple states, singleState
  const TitleChangeHandler = (event) => {
    //setTitle(event.target.value)
    setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    });

    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const AmountChangeHandler = (event) => {
    //setAmount(event.target.value);
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    });
  };

  const DateChangeHandler = (event) => {
    //setDate(event.target.value);
    setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: userInput["enteredTitle"],
      amount: userInput["enteredAmount"],
      date: new Date(userInput["enteredDate"]),
    };
    setUserInput({ enteredTitle: "", enteredAmount: "", enteredDate: "" });
    // TitleChangeHandler("");
    // AmountChangeHandler("");
    // DateChangeHandler("");
    props.onSaveExpenseData(expenseData);
    //console.log(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput["enteredTitle"]}
            onChange={TitleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            onChange={AmountChangeHandler}
            type="number"
            value={userInput["enteredAmount"]}
            min="0.01"
            step="0.01"
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            onChange={DateChangeHandler}
            type="date"
            value={new Date(userInput["enteredDate"])}
            min="2019-01-01"
            max="2022-12-31"
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
