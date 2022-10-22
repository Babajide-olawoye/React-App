import "./ExpenseItem.css"

function ExpenseItem(props) {

    // const expenseDate = Date(2021, 6, 21)
    // const expenseTitle = "Car Insurance"
    // const expenseAmount = 299;

    return (
        <div className="expense-item">
            <div>{props.date.toISOString()}</div>
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