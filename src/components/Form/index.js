import React from 'react'
import LoanContainer from '../LoanConainter'

function Form({userLoanInfo,setUserLoanInfo}){
    return (
        <>
            <LoanContainer userLoanInfo={userLoanInfo} setUserLoanInfo={setUserLoanInfo}/>

        </>
    )
}

export default Form;