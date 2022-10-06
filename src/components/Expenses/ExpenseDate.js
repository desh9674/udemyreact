import "./ExpenseDate.css";

function ExpenseDate(props) {
  const Day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const Month = props.date.toLocaleString("en-US", { month: "long" });
  const Year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__day">{Day}</div>
      <div className="expense-date__month">{Month}</div>
      <div className="expense-date__year">{Year}</div>
    </div>
  );
}
//const expenseDate = new Date(2022, 5, 20);
//const expenseTitle = "Car Insurance";
//const expensePrice = 29.4;

export default ExpenseDate;
