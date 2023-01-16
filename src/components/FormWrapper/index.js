import React from 'react'
import Form from '../Form'

function FormWrapper({userLoanInfo, setUserLoanInfo}){
    return(
        <>
            <form className='pt-2 pl-5 pr-5'>
                <Form userLoanInfo={userLoanInfo} setUserLoanInfo={setUserLoanInfo}/>
            </form>
        </>
    )
}

export default FormWrapper;
