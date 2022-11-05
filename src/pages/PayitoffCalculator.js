import React from 'react'
import Result from '../components/Result'
import FormWrapper from '../components/FormWrapper'

// passprops for user info 
// add on click fucntion here
function PayitoffCalculator(){
    return(
        <main>
            <br></br>
             {/* Form should bring FormWrapper and LoanContainer form the components */}
            <section>
                 <FormWrapper/>
                 <button className='focus:outline-none text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 calculate-btn'>Calculate <i className="fa-solid fa-money-bill"></i></button>
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