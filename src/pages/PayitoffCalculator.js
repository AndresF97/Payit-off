import {React,useState} from 'react'
import Result from '../components/Result'
import FormWrapper from '../components/FormWrapper'

// [X]passprops for user info 
// [ ]add on click fucntion here
function PayitoffCalculator(){
    // Setting up date 
    let today = new Date()
    let day = String(today.getDate()).padStart(2, '0');
    let month = String(today.getMonth() + 1).padStart(2, '0');
    let year = today.getFullYear();
    // setting up user state
    const [userLoanInfo, setUserLoanInfo] = useState({
        typeOfDebt:'the big one',
        minimumPayment:'very minimum',
        balance:'1 trillion dollars',
        ineterestRate:'100%',
        date:`${year}-${month}-${day}`,
        extraMonth:' 1 months',
        payOfMethod:'must set up dropdown',
        diseredMonth:'now'
    })
    // setting up button event listener
    const FormSubmit = async(event)=>{
        console.log('hello')
    }


    return(
        <main>
            <br></br>
             {/* Form should bring FormWrapper and LoanContainer form the components */}
            <section>
                 <FormWrapper userLoanInfo={userLoanInfo} setUserLoanInfo={setUserLoanInfo}/>
                 <button onClick={()=>{FormSubmit()}} className='focus:outline-none text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 calculate-btn'>Calculate <i className="fa-solid fa-money-bill"></i></button>
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