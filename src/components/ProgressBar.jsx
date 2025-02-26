import "./ProgressBar.css";

const ProgressBar = ({ label, value, max, total }) => {
  let x = "0%";
  if (max) {
    x = (value / max) * 100 + "%";
  }
  return (
    <div className="stat-bar">
      <div className="stat-bar__inner">
        <div className="stat-bar__fill" style={{ height: x }}></div>
      </div>
      <div className="stat-bar__label">{label}</div>
    </div>
  );
};

export default ProgressBar;
