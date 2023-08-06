import "./AddExpense.css" 
import ExpenseForm from "./ExpenseForm"
import Card from "../Card"
import {useState} from "react"
import "../button.css"

function AddExpense(props) {

    const [IsEditing, SetIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id : Math.round(Math.random()*5+1).toString()
        };
        props.onAddExpense(expenseData);
    };

    const startEditingHandler = (IsEditing) =>{
        SetIsEditing(true);
    };
    const stopEditingHandler = (IsEditing) =>{
        SetIsEditing(false);
    };

    return(
        <Card className="AddExpense">
            {(!IsEditing) && (<button className="btn" onClick={startEditingHandler}>Add New Expense</button>)}
            {(IsEditing) && (<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}></ExpenseForm>)}
        </Card>
    );
};

export default AddExpense;