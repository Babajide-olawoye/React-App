import { useState } from 'react';
import './ExpenseForm.css'


function NewExpenseForm() {

    function titleChangeHandle(event) {
        setEnteredTitle(event.target.value);
        console.log(event.target.value);
    }

    function amountChangeHandle(event) {
        setEnteredAmount(event.target.value);
    }

    function dateChangeHandle(event) {
        setEnteredDate(event.target.value);
    }


    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    function SubmitHandler(event){
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            data: enteredDate
        }

        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
        console.log(expenseData);
    }

    return (
        <form onSubmit={SubmitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandle} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01"value={enteredAmount} onChange={amountChangeHandle}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2222-01-12" value={enteredDate} onChange={dateChangeHandle}/>
                </div>


            </div>

            <div className='new-expense__actions'>
                <button type='submit'>Add Expense </button>
            </div>

        </form>
    )
}

export default NewExpenseForm