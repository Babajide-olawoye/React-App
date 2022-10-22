import "./ExpenseItem.css"
import Date from "./Date";
import Card from "../UI/Card";

function ExpenseItem(props) {

    //Spliting up Date details 


    return (
        <Card className="expense-item">
            <div>
                <Date date = {props.date} />
            </div>

            <div className="expense-item__description">
                <h2>{props.title}</h2>
            </div>

            <div className="expense-item__price">
                ${props.amount}
            </div>
        </Card>
    );
}

export default ExpenseItem;