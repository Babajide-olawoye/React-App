import Card from './Card'
import './Expense.css'
import ExpenseItem from './ExpenseItem'

function Expense(props) {

    return (
        <Card className='expenses'>
            <ExpenseItem title={props.arrOfExpenses[0].title} date={props.arrOfExpenses[0].date}
                amount={props.arrOfExpenses[0].amount} />
            <ExpenseItem title={props.arrOfExpenses[1].title} date={props.arrOfExpenses[1].date}
                amount={props.arrOfExpenses[0].amount} />
            <ExpenseItem title={props.arrOfExpenses[2].title} date={props.arrOfExpenses[2].date}
                amount={props.arrOfExpenses[2].amount} />
            <ExpenseItem title={props.arrOfExpenses[3].title} date={props.arrOfExpenses[3].date}
                amount={props.arrOfExpenses[3].amount} />
        </Card>
    )


}
export default Expense