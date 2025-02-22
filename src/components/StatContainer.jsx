import ProgressBar from "./ProgressBar";
import "./StatContainer.css";

const StatContainer = () => {
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
  return (
    <div className="stat">
      {statData.map((item) => {
        return (
          <ProgressBar key={item.label} label={item.label} value={item.value} />
        );
      })}
    </div>
  );
};

export default StatContainer;
