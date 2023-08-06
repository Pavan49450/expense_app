import "./ExpenseFilter.css"
import Card from "../Card"
const ExpenseFilter = (props) =>{

    // const [expenseYear,setExpenseYear] = useState('2023');
    const dropdownChangeHandler = (event) =>{
        props.onSelectingYear(event.target.value);

    };

    return(
        <Card className="ExpenseFilter">
            <div className="ExpenseFilter__bars">
            <label> Filter by year
                <select onChange={dropdownChangeHandler} value={props.InitialYear}>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2030">2030</option>
                </select>
            </label>
            </div>
        </Card>

    );
}

export default ExpenseFilter;