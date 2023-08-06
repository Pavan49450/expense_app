import Chart from "./Chart/Chart"
const ExpensesChart = props =>{
    const chartDataPoints = [
        { label:'Jan', value:0 ,color:'#065fd4'},
        { label:'Feb', value:0 ,color:'#f00'},
        { label:'Mar', value:0 ,color:'#990412'},

        { label:'Apr', value:0 ,color:'teal'},
        { label:'May', value:0 ,color:'maroon'},
        { label:'Jun', value:0 ,color:'green'},
        { label:'Jul', value:0 ,color:'orange'},
        { label:'Aug', value:0 ,color:'violet'},
        { label:'Sep', value:0 ,color:'grey'},
        { label:'Oct', value:0 ,color:'silver'},
        { label:'Nov', value:0 ,color:'lime'},
        { label:'Dec', value:0 ,color:'purple'}
    ];
    for(const expense of props.expenses){
        const expenseMonth = expense.date.getMonth();
        chartDataPoints[expenseMonth].value += expense.price;
    }

    return(
        <Chart dataPoints={chartDataPoints}></Chart>
    );
}

export default ExpensesChart;