import './NewExp.css'
import NewExpenseForm from './NewExpenseForm'
function NewExp(props) {

    function saveExpenseDataHandler(enteredDataVals) {
        // const expenseData = {
        //     ...enteredDataVals,
        // }
        // console.log(expenseData);
        // console.log(enteredDataVals);
        props.onRecieveExpenseData(enteredDataVals)

    }

    return (

        <div className="new-expense">
            <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
}

export default NewExp