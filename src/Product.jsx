function Product() {
    const products = {
        "Victim_name" :"Divyansh",
        "Victim_phone" : "9876543210",
        "Victim_address" : "123 Main Street",
        "Case_number" : "1234567890",
        "Case_description" : "This is a case description",
        "Case_status" : "Open",
        "Case_type" : "Murder",
        "Case_date" : "12/12/2020",
        IPFS:"2X8D2GhfbSXc",
        "Victim_image" : "URL_ADDRESS.google.com"
    }
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img 
                        src={products.Victim_image} 
                        alt="Victim Image" 
                        className="w-full h-96 object-cover"
                    />
                </div>
                <div className="flex flex-col space-y-6 bg-white p-6 rounded-lg shadow-lg">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-gray-500 text-sm font-medium">Victim Name</h3>
                                <p className="text-lg font-semibold">{products.Victim_name}</p>
                            </div>
                            <div>
                                <h3 className="text-gray-500 text-sm font-medium">Phone</h3>
                                <p className="text-lg">{products.Victim_phone}</p>
                            </div>
                            <div>
                                <h3 className="text-gray-500 text-sm font-medium">Address</h3>
                                <p className="text-lg">{products.Victim_address}</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-gray-500 text-sm font-medium">Case Number</h3>
                                <p className="text-lg font-mono">{products.Case_number}</p>
                            </div>
                            <div>
                                <h3 className="text-gray-500 text-sm font-medium">Case Type</h3>
                                <p className="text-lg font-medium text-red-600">{products.Case_type}</p>
                            </div>
                            <div>
                                <h3 className="text-gray-500 text-sm font-medium">Case Date</h3>
                                <p className="text-lg">{products.Case_date}</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2 border-t pt-4">
                        <h3 className="text-gray-500 text-sm font-medium">Case Description</h3>
                        <p className="text-lg leading-relaxed">{products.Case_description}</p>
                    </div>
                    <div className="space-y-2 border-t pt-4">
                        <h3 className="text-gray-500 text-sm font-medium">Case Status</h3>
                        <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${products.Case_status === 'Open' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                            {products.Case_status}
                        </span>
                    </div>
                    <div className="space-y-2 border-t pt-4">
                        <h3 className="text-gray-500 text-sm font-medium">IPFS Hash</h3>
                        <p className="text-lg font-mono bg-gray-50 p-2 rounded">{products.IPFS}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;