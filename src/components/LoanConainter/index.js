import {React,useState} from 'react'

function LoanContainer({userLoanInfo}) {
    const [input,setInput] = useState('')
    const handleInputChange = (e) =>{
        setInput(e.target.value)
    }  
    console.log(userLoanInfo.typeOfDebt)

    return (
        <>
            <h1>Debt Payment Calculator</h1>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label htmlFor="typeOfDebt" className="block mb-2 text-sm font-medium text-gray-900">Type of debt:</label>
                    <input 
                    type="text" 
                    name='typeOfDebt' 
                    id="typeOfDebt" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark"
                     placeholder="Loan"
                     onChange={handleInputChange} 
                     required />
                </div>
                <div>
                    <label htmlFor="minimumPayment" className="block mb-2 text-sm font-medium text-gray-900">Minimum Payment:</label>
                    <input 
                    type="text" 
                    id="minimumPayment"
                    name='minimumPayment'
                    onChange={handleInputChange} 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark" 
                    placeholder="$123.45" 
                    required />
                </div>
                <div>
                    <label htmlFor="balance" className="block mb-2 text-sm font-medium text-gray-900">Balance:</label>
                    <input 
                    type="text" 
                    id="balance"
                    onChange={handleInputChange} 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark" 
                    placeholder="$123.45" 
                    required />
                </div>
                <div>
                    <label htmlFor="ineterestRate" className="block mb-2 text-sm font-medium text-gray-900">Interest Rate:</label>
                    <input 
                    type="text" 
                    id="ineterestRate"
                    name='ineterestRate'
                    onChange={handleInputChange} 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark" 
                    placeholder="12%" 
                    required />
                </div>
            </div>
            <br></br>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900">Starting Date:</label>
                    <input 
                    type="date" 
                    id="date"
                    name='date' 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark" 
                    placeholder="Loan"
                    onChange={handleInputChange} 
                    required />
                </div>
                <div>
                    <h1>Pick one of the following:</h1>
                    <input className="m-3"type="checkbox"></input>
                    <label htmlFor="extraMonth" className="mb-2 text-sm font-medium text-gray-900">Extra Month Amount:</label>
                    <input 
                    type="text" 
                    id="extraMonth"
                    onChange={handleInputChange} 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark" 
                    placeholder="$123.45"
                    name='date'
                    required />
                </div>
                <div>
                    <label htmlFor="payOfMethod" className="block mb-2 text-sm font-medium text-gray-900">Pick Payoff Method:</label>
                    <input 
                    type="text" 
                    id="payOfMethod"
                    name='payOfMethod'
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark" 
                    placeholder="3" 
                    required />
                </div>
                <div>
                    <input className="m-3"type="checkbox"></input>
                    <label htmlFor="diseredMonth" className="mb-2 text-sm font-medium text-gray-900">Desired Months to pay off:</label>
                    <input 
                    type="text" 
                    id="ineterestRate"
                    name='ineterestRate'
                    onChange={handleInputChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark" 
                    placeholder="3" 
                    required />
                </div>
            </div>
        </>
    )
}
export default LoanContainer;