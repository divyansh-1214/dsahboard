function Form() {
    return (
        <div className="flex flex-col items-center w-full max-w-2xl mx-auto p-6">
            <h1 className="text-5xl">Add Evidence</h1>
            <form className="w-full space-y-6 bg-white rounded-lg shadow-md p-8" action="" method="get">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="caseNumber" className="text-gray-700 font-medium">Case Number</label>
                        <input 
                            type="text" 
                            required 
                            id="caseNumber" 
                            placeholder="Enter Case Number"
                            className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="firNumber" className="text-gray-700 font-medium">FIR Number</label>
                        <input 
                            type="text" 
                            required 
                            id="firNumber" 
                            placeholder="Enter FIR Number"
                            className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="ipfs" className="text-gray-700 font-medium">IPFS</label>
                        <input 
                            type="text" 
                            required 
                            id="ipfs" 
                            placeholder="IPFS Hash"
                            className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="evidence" className="text-gray-700 font-medium">Add Evidence</label>
                        <input 
                            type="text" 
                            required 
                            id="evidence" 
                            placeholder="Enter Evidence"
                            className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                <div className="flex items-center space-x-2 py-4">
                    <input 
                        type="checkbox" 
                        id="publicAccess"
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="publicAccess" className="text-gray-700">Give Access to General Public</label>
                </div>

                <div className="flex flex-col space-y-4">
                    <button 
                        type="submit"
                        className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
                    >
                        Deploy to Blockchain
                    </button>
                    <button 
                        type="button"
                        className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors duration-200"
                    >
                        Connect with MetaMask
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Form;