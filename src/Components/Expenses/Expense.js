import { useState } from 'react'
import Card from '../UI/Card'
import './Expense.css'
import ExpensesFilter from './ExpenseFillter'
import ExpenseItem from './ExpenseItem'

function Expense(props) {

    // console.log(props.arrOfExpenses[1].title +props.arrOfExpenses[1].date +props.arrOfExpenses[1].amount)
    const [initialYearVal, setYearVal] = useState('2020')
    
    function onChangeYearHandler(selectedVal){
        setYearVal(selectedVal)
    }

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={initialYearVal} onChangeYear ={onChangeYearHandler}></ExpensesFilter>
            <ExpenseItem title={props.arrOfExpenses[0].title} date={props.arrOfExpenses[0].date}
                amount={props.arrOfExpenses[0].amount} />
            <ExpenseItem title={props.arrOfExpenses[1].title} date={props.arrOfExpenses[1].date}
                amount={props.arrOfExpenses[1].amount} />
            <ExpenseItem title={props.arrOfExpenses[2].title} date={props.arrOfExpenses[2].date}
                amount={props.arrOfExpenses[2].amount} />
            <ExpenseItem title={props.arrOfExpenses[3].title} date={props.arrOfExpenses[3].date}
                amount={props.arrOfExpenses[3].amount} />
        </Card>
    )


}
export default Expense