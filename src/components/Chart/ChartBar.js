import "./ChartBar.css"

const ChartBar = (props) => {
    let barHeightFill = '0%';
    let barColor = props.color;

    if(props.maxValue > 0){
        barHeightFill = Math.round((props.value/props.maxValue)*100) + '%';
        // console.log("barHeightFill->",barHeightFill,"for","Month->",props.label,"and Value->",props.value);
    }

    return(
        <div className="chart-bar">
                <div className="chart-bar__value">{barHeightFill}</div>
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" 
                    style={{height:barHeightFill ,backgroundColor:barColor}}>
                </div>
            </div>
                <div className="chart-bar__label">{props.label}</div>
        </div>
    );
};

export default ChartBar;