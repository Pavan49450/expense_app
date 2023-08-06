import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate"
import Card from "./Card"
import { useState } from "react"
function ExpenseItem(props) {



    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item_description">
                <div className="expenseTitle"><h2>{props.id}{props.title}</h2></div>
                <div className="expense-item__price"><h3>${props.price}</h3></div>
            </div>
        </Card>
    );
}

export default ExpenseItem;