import { useState } from "react";
import "./AddExpenseForm.css";

const AddExpenseForm = () => {
  const thisYear = new Date().getFullYear();
  const minDate = thisYear - 2 + "-01-01";
  const maxDate = `${thisYear + 2}-12-31`;
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    date: "",
  });
  const titleChangeHandler = (event) => {
    setFormData({ ...formData, title: event.target.value });
  };
  const priceChangeHandler = (event) => {
    setFormData({ ...formData, price: event.target.value });
  };
  const dateChangeHandler = (event) => {
    setFormData({ ...formData, date: event.target.value });
  };

  const inputChnageHandler = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      title: "",
      price: "",
      date: "",
    });
  };
  return (
    <div className="add-expense">
      <form onSubmit={submitHandler}>
        <div className="add-expense__controls">
          <div className="add-expense__control">
            <label>Title</label>
            <input
              required
              name="title"
              placeholder="Title"
              onChange={inputChnageHandler}
            />
          </div>
          <div className="add-expense__control">
            <label>Price</label>
            <input
              required
              name="price"
              type="number"
              placeholder="Price"
              min="0"
              step="0.01"
              onChange={inputChnageHandler}
            />
          </div>
          <div className="add-expense__control">
            <label>Date</label>
            <input
              required
              name="date"
              type="date"
              min={minDate}
              max={maxDate}
              onChange={inputChnageHandler}
            />
          </div>
        </div>
        <div className="add-expense__actions">
          <button type="button">Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default AddExpenseForm;
