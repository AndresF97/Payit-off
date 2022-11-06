import React from 'react'
import Form from '../Form'

function FormWrapper({userLoanInfo}){
    return(
        <>
            <form>
                <Form userLoanInfo={userLoanInfo}/>
            </form>
        </>
    )
}

export default FormWrapper;
