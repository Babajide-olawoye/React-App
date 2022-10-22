import "./ExpenseItem.css"
import Date from "./Date";
import Card from "../UI/Card";
import { useState } from "react";

function ExpenseItem(props) {
    const [initialTitle, setTitle] = useState(props.title);

    const clickHandler = () =>{
        setTitle(initialTitle +' Updated versions')
    }


    return (
        <Card className="expense-item">
            <div>
                <Date date={props.date} />
            </div>

            <div className="expense-item__description">
                <h2>{initialTitle}</h2>
            </div>

            <div className="expense-item__price">
                ${props.amount}
            </div>
            <button onClick={clickHandler}>Click me</button>
        </Card>
    );
}

export default ExpenseItem;