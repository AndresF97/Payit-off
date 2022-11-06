import React from 'react'
import Form from '../Form'

function FormWrapper({userLoanInfo, setUserLoanInfo}){
    return(
        <>
            <form>
                <Form userLoanInfo={userLoanInfo} setUserLoanInfo={setUserLoanInfo}/>
            </form>
        </>
    )
}

export default FormWrapper;
