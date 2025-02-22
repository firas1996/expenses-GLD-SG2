import "./ProgressBar.css";

const ProgressBar = ({ label, value }) => {
  return (
    <div className="stat-bar">
      <div className="stat-bar__inner">
        <div className="stat-bar__fill"></div>
      </div>
      <div className="stat-bar__label">{label}</div>
    </div>
  );
};

export default ProgressBar;
