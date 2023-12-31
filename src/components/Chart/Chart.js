import "./Chart.css"
import ChartBar from "./ChartBar"
import Card from "../Card"
const Chart = (props) => {

    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaxValue = Math.max(...dataPointValues); 

    return (
        <Card className="chart">
            {props.dataPoints.map((dataPoint) => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaxValue}
                    label={dataPoint.label}
                    color={dataPoint.color}
            ></ChartBar>))}
        </Card>
    );


};

export default Chart;