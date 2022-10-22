import "./ExpenseItem.css"

function ExpenseItem() {

    // const expenseDate = Date(2021, 6, 21)
    // const expenseTitle = 

    return (
        <div className="expense-item">
            <div>Date</div>
            <div className="expense-item__description">
                <h2>Title</h2>
            </div>
            <div className="expense-item__price">
                Amount
            </div>
        </div>
    );
}

export default ExpenseItem;