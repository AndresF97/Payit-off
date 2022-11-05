import React from 'react'

function LoanContainer(){
    return (
        <>
        <h1>Debt Payment Calculator</h1>
            <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label for="typeOfDebt" class="block mb-2 text-sm font-medium text-gray-900">Type of debt:</label>
            <input type="text" id="typeOfDebt" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark" placeholder="Loan" required/>
        </div>
        <div>
            <label for="minimumPayment" class="block mb-2 text-sm font-medium text-gray-900">Minimum Payment:</label>
            <input type="text" id="minimumPayment" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark" placeholder="$123.45" required/>
        </div>
        <div>
            <label for="balance" class="block mb-2 text-sm font-medium text-gray-900">Balance:</label>
            <input type="text" id="balance" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark" placeholder="$123.45" required/>
        </div>  
        <div>
            <label for="ineterestRate" class="block mb-2 text-sm font-medium text-gray-900">Interest Rate:</label>
            <input type="text" id="ineterestRate" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark" placeholder="12%"  required/>
        </div>
    </div>
    <br></br>
    <h1>Pick one of the following:</h1>
    <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label for="typeOfDebt" class="block mb-2 text-sm font-medium text-gray-900">Type of debt:</label>
            <input type="text" id="typeOfDebt" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark" placeholder="Loan" required/>
        </div>
        <div>
            <label for="minimumPayment" class="block mb-2 text-sm font-medium text-gray-900">Minimum Payment:</label>
            <input type="text" id="minimumPayment" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark" placeholder="$123.45" required/>
        </div>
        <div>
            <label for="balance" class="block mb-2 text-sm font-medium text-gray-900">Balance:</label>
            <input type="text" id="balance" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark" placeholder="$123.45" required/>
        </div>  
        <div>
            <label for="ineterestRate" class="block mb-2 text-sm font-medium text-gray-900">Interest Rate:</label>
            <input type="text" id="ineterestRate" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark" placeholder="12%"  required/>
        </div>
    </div>
        </>
    )
}
export default LoanContainer;