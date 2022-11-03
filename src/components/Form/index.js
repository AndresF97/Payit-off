import React from 'react'
import LoanContainer from '../LoanConainter'

function Form(){
    return (
        <>
            <br></br>
            <h1>Debt Payment Calculator</h1>
            <label for="typeOfDebt">Type of debt:</label>
            <input type="text" name='typeOfDebt'></input>
            <br></br>
            <label for='minimumPayment'>Minimum Payment:</label>
            <input name="minimumPayment" type="text"></input>
            <br></br>
            <label for="balance">Balance:</label>
            <input name="balance" type="text"></input>
            <br></br>
            <label for="ineterestRate">Interest Rate:</label>
            <input type="text" name='ineterestRate'></input>
            <LoanContainer/>

        </>
    )
}

export default Form;