import {React,useState} from 'react'

function LoanContainer({userLoanInfo,setUserLoanInfo}) {
    const handleInputChange = (e) =>{
        const {name,value} = e.target
        setUserLoanInfo({...userLoanInfo, [name]:value})
    }  

    return (
        <>
            <h1 className='m-10 text-xl text-left text-white'>Debt Payment Calculator</h1>
            {/* must work on styling this having label and input with eachother */}
            <div className="grid gap-6 mb-6 md:grid-cols-2 p-10 borders">
                <div className="inline-flex w-96">
                    <label  className="block mb-2 text-sm font-medium text-white">Type of debt:</label>
                    <select
                    name='typeOfDebt'
                    onChange={handleInputChange}
                    value={userLoanInfo.typeOfDebt}
                    className="text-dark text-center bg-gray-50 border border-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 w-full" 
                    >
                        <option
                        value="Credit">
                        Credit
                        </option>
                        <option
                        value="Loan">
                        Loan
                        </option>
                        <option
                        value="Loan Shark">
                        Loan Shark
                        </option>
                    </select>
                </div>
                <div className="inline-flex w-96">
                    <label htmlFor="minimumPayment" className="block mb-2 text-sm font-medium text-white">Minimum Payment:</label>
                    <input 
                    type="text" 
                    id="minimumPayment"
                    name='minimumPayment'
                    value={userLoanInfo.minimumPayment}
                    onChange={handleInputChange} 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark" 
                    placeholder="$123.45" 
                    required />
                </div>
                <div className="inline-flex w-96">
                    <label htmlFor="balance" className="block mb-2 text-sm font-medium text-white">Balance:</label>
                    <input 
                    type="text" 
                    id="balance"
                    name='balance'
                    value={userLoanInfo.balance}
                    onChange={handleInputChange} 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark" 
                    placeholder="$123.45" 
                    required />
                </div>
                <div className="inline-flex w-96">
                    <label htmlFor="ineterestRate" className="block mb-2 text-sm font-medium text-white">Interest Rate:</label>
                    <input 
                    type="text" 
                    id="ineterestRate"
                    name='ineterestRate'
                    value={userLoanInfo.ineterestRate}
                    onChange={handleInputChange} 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark" 
                    placeholder="12%" 
                    required />
                </div>
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-2 p-10">
                <div className="inline-flex w-96">
                    <label htmlFor="date" className="block mb-2 text-sm font-medium text-white">Starting Date:</label>
                    <input 
                    type="date" 
                    id="date"
                    name='date' 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark" 
                    value={userLoanInfo.date}
                    onChange={handleInputChange} 
                    required />
                </div>
                <div>
                    <h1 className='text-white font-semibold m-2'>Pick one of the following:</h1>
                    <div className="inline-flex w-96">
                        <input className="m-3"type="checkbox"></input>
                        <label htmlFor="extraMonth" className="mb-2 text-sm font-medium text-white">Extra Month Amount:</label>
                        <input 
                        type="text" 
                        id="extraMonth"
                        onChange={handleInputChange}
                        value={userLoanInfo.extraInfo} 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark" 
                        placeholder="$123.45"
                        name='date'
                        required />
                    </div>
                </div>
                <div className="inline-flex w-96">
                    <label htmlFor="payOfMethod" className="block mb-2 text-sm font-medium text-white">Pick Payoff Method:</label>

                    <select
                    name='payOfMethod'
                    onChange={handleInputChange}
                    value={userLoanInfo.payOfMethod}
                    className="text-dark text-center bg-gray-50 border border-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 w-full" 
                    id="cars">
                        <option
                        value="Snow Ball">
                        Snow Ball
                        </option>
                        <option
                        value="Avalancha">
                        Avalancha
                        </option>
                    </select>
                    <i className="uil uil-question-circle text-white text-lg"></i>
                </div>
                <div className="inline-flex w-96" aria-disabled>
                    <input className="m-3"type="checkbox"></input>
                    <label htmlFor="diseredMonth" className="mb-2 text-sm font-medium text-white">Desired Months to pay off:</label>
                    <input 
                    type="text" 
                    id="diseredMonth"
                    name='diseredMonth'
                    value={userLoanInfo.diseredMonth}
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