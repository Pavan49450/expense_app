import { useState } from "react";
import "./App.css";
import Card from "./components/Card"
import Expenses from "./components/Expenses"
import AddExpense from "./components/AddExpense/AddExpense"
const dummyExpense = [
    {
        id:1,
        title:'Toilet paper',
        price:45.6,
        date: new Date(2020,1,9)
    },
    {
        id:2,
        title:'Car Insurance',
        price:145.66,
        date: new Date(2020,2,9)
    },
    {
        id:3,
        title:'Bike Repair',
        price:423.4,
        date: new Date(2020,3,9)
    },
    {
        id:4,
        title:'Party Expense',
        price:120.96,
        date: new Date(2020,4,9)
    },
    {
        id:5,
        title:'Cab Charges',
        price:34.8,
        date: new Date(2020,5,9)
    },
    {
        id:6,
        title:'Cab Charges',
        price:34.8,
        date: new Date(2020,6,9)
    },
    {
        id:7,
        title:'Cab Charges',
        price:34.8,
        date: new Date(2020,7,9)
    },
    {
        id:8,
        title:'Cab Charges',
        price:34.8,
        date: new Date(2020,8,9)
    },
    {
        id:9,
        title:'Cab Charges',
        price:34.8,
        date: new Date(2020,9,9)
    },
    {
        id:10,
        title:'Cab Charges',
        price:34.8,
        date: new Date(2020,10,9)
    },
    {
        id:11,
        title:'Cab Charges',
        price:34.8,
        date: new Date(2020,11,9)
    },
    {
        id:12,
        title:'Cab Charges',
        price:34.8,
        date: new Date(2019,12,9)
    },
    {
        id:13,
        title:'Cab Charges',
        price:34.8,
        date: new Date(2019,12,9)
    },
    {
        id:14,
        title:'Cab Charges',
        price:34.8,
        date: new Date(2019,12,9)
    },
    ];
    console.log(dummyExpense);

function App() {

    const [expenses,setExpenses] = useState(dummyExpense);

    const addExpenseHandler = (expense) =>{
        setExpenses((prevExpense) => {
            return [expense, ...prevExpense];
        }
        );
    };
    return (
        <div>
        <Card className="App">
            <AddExpense onAddExpense={addExpenseHandler}></AddExpense>
            <Expenses Ebox={expenses}/>
        </Card>
        </div>
    );
}

export default App;


