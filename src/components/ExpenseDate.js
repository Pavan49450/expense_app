import "./ExpenseDate.css"
import Card from "./Card"
function ExpenseDate(props){
    const month = props.date.toLocaleString('en-US',{month:'long'});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-US',{day:'2-digit'});
    return(
        <div className="expenseDate">
            <div className="expenseDateMonth"><b>{month}</b></div>
           <div className="expenseDateYear">{year}</div>
           <div className="expenseDateday"><b>{day}</b></div>
        </div>
    );
}

export default ExpenseDate;