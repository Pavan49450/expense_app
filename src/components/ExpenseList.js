import ExpenseItem from "./ExpenseItem"
import Card from "./Card"
import "./ExpenseList.css"

const ExpenseList=(props)=>{
    if(props.expenses.length === 0){
        return <Card className="status"><p>No Data found</p></Card>;
        }
    return(
            <ul>
            {props.expenses.map((expense) => <ExpenseItem
            key={expense.id}
            title={expense.title}
            price={expense.price}
            date={expense.date}/>)}
            </ul>
        );
    
    
};

export default ExpenseList;