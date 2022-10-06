import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    setEditing(false)
    props.onAddExpense(expenseData);

    //console.log(expenseData);
  };

  

  const [isEditinng, setEditing] = useState();

  const editingStateHandler = () => {
    setEditing(true);
  }
 
  const editinStopHandler = () => {
    setEditing(false)
  }
  
      
  return (
    <div className="new-expense">
      {!isEditinng && <button onClick={editingStateHandler}>Add new Expense</button>}
      {isEditinng && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={editinStopHandler}/>}
    </div>
  );
};

export default NewExpense;
