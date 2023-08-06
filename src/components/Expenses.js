import ExpenseItem from "./ExpenseItem"
import ExpenseList from "./ExpenseList"
import "./Expenses.css"
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter"
import { useState } from "react"
// import Card from "./Card"
import ExpensesChart from "./ExpensesChart"

function Expenses(props){

    const [FilteredYear,SetFilteredYear] = useState('2020');
    const filterChangeHandler = selectedYear => {
        // console.log(selectedYear);
        SetFilteredYear(selectedYear);
        
    };


    const filteredExpense = props.Ebox.filter((expense) => expense.date.getFullYear().toString() === FilteredYear);


    // const filteredList = filterByYear(props.Ebox);
    // console.log("Ebox->",props.Ebox.date.getFullYear);
    // console.log("filteredExpense-> and Year",filteredExpense,FilteredYear);


    return(
        <div className="expenses">
        <ExpenseFilter onSelectingYear={filterChangeHandler} InitialYear={FilteredYear}></ExpenseFilter>
        <ExpensesChart expenses={filteredExpense}/>
        <ExpenseList expenses={filteredExpense}/>
        </div>
    );
}

export default Expenses;