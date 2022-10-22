import "./ExpenseItem.css"
import Date from "./Date";

function ExpenseItem(props) {

    //Spliting up Date details 
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();


    return (
        <div className="expense-item">
            <div>
                <Date month={month} day={day} year={year} />
            </div>

            <div className="expense-item__description">
                <h2>{props.title}</h2>
            </div>
            
            <div className="expense-item__price">
                ${props.amount}
            </div>
        </div>
    );
}

export default ExpenseItem;