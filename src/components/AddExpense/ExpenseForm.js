import "./ExpenseForm.css";
import { useState } from "react";
import {confirmable} from "react-confirm";

function ExpenseForm(props){

    const [EnteredTitle , SetEnteredTitle] = useState('');
    const [EnteredPrice , SetEnteredPrice] = useState('');
    const [EnteredDate , SetEnteredDate] = useState('');

    const titleChangeHandler = (events) =>{
        SetEnteredTitle(events.target.value)
    };

    const priceChangeHandler = (events) =>{
        SetEnteredPrice(events.target.value)
    };
    
    const dateChangeHandler = (events) =>{
        SetEnteredDate(events.target.value)
    };

    const submitHandler = (events) => {
        events.preventDefault();
        const expenseData = {
            title:EnteredTitle,
            price:+EnteredPrice,
            date: new Date(EnteredDate)
        };
    console.log("expenseData",expenseData);
    props.onSaveExpenseData(expenseData);
    SetEnteredTitle('');
    SetEnteredPrice('');
    SetEnteredDate('');
};
    const msgPrompt=()=>{
        confirmable('Caution! cannot be edit this form agian. Do want to continue?');
    };

    return(
        <form onSubmit={submitHandler}>
            <div className="Add-expense__controls">
                <div className="Add-expense__control" >
                    <label>Title</label>
                    <input type="text" value={EnteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="Add-expense__control">
                    <label>Price</label>
                    <input type="number" value={EnteredPrice} min="0.01" step="0.01" onChange={priceChangeHandler}/>
                </div>
                <div className="Add-expense__control">
                    <label>Date</label>
                    <input type="date" value={EnteredDate} min="2000-01-01" max="2024-01-01" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="Add-expense__actions">
                <button className="btn" onClick={props.onCancel}>Cancel</button>
                <button className="btn" onClick={msgPrompt} type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;