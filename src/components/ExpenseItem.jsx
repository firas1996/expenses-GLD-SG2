import "./ExpenseItem.css";

const ExpenseItem = () => {
  return (
    <div className="expense-item">
      <div className="expense-date">
        <div className="expense-date__month">month</div>
        <div className="expense-date__year">year</div>
        <div className="expense-date__day">day</div>
      </div>
      <div className="expense-item__description">
        <h2>title</h2>
        <div className="expense-item__price">$ price</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
