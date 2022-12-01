import ChartBar from "./ChartBar.js";
import "./Chart.css";

const Chart = (props) => {
  const datapointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...datapointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;