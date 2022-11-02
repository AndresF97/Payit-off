import React from 'react'
import Form from '../components/Form'
import Result from '../components/Result'


function PayitoffCalculator(){
    return(
        <main>
            <h1>PayitoffCalculator</h1>
            <br></br>
             {/* Form should bring FormWrapper and LoanContainer form teh components */}
            <section>
                 <Form/>
            </section>
            <br></br>
            <section>
                {/* Result should bring Instructions, Summary and Table from Components */}
                <Result/>
            </section>
        </main>
    )
}

export default PayitoffCalculator