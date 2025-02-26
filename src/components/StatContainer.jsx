import ProgressBar from "./ProgressBar";
import "./StatContainer.css";

const StatContainer = ({ data }) => {
  const statData = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "Mai", value: 0 },
    { label: "Jui", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  for (const expense of data) {
    statData[expense.date.getMonth()].value += expense.price;
  }
  const vals = statData.map((el) => el.value);
  const max = Math.max(...vals);
  const total = vals.reduce((res, x) => res + x);
  return (
    <div className="stat">
      {statData.map((item) => {
        return (
          <ProgressBar
            key={item.label}
            label={item.label}
            value={item.value}
            max={max}
            total={total}
          />
        );
      })}
    </div>
  );
};

export default StatContainer;
