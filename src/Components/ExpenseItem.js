import "./ExpenseItem.css"
import Date from "./Date";

function ExpenseItem(props) {

    //Spliting up Date details 


    return (
        <div className="expense-item">
            <div>
                <Date date = {props.date} />
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