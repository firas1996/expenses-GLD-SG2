import "./ExpensesFilter.css";

const ExpensesFilter = ({ years, filtredYear, setFiltredYear }) => {
  return (
    <div className="expenses-filter">
      <label>Filter By Year :</label>
      <select
        value={filtredYear}
        onChange={(event) => {
          setFiltredYear(event.target.value);
        }}
      >
        {years.map((item) => {
          return (
            <option value={item} key={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default ExpensesFilter;
