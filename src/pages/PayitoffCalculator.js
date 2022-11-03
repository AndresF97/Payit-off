import React from 'react'
import Result from '../components/Result'
import FormWrapper from '../components/FormWrapper'


function PayitoffCalculator(){
    return(
        <main>
            <br></br>
             {/* Form should bring FormWrapper and LoanContainer form the components */}
            <section>
                 <FormWrapper/>
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