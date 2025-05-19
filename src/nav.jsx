function Nav() {
    return ( 
        <div className="flex flex-col items-center gap-6 bg-white shadow-lg p-6 min-h-screen w-64">
            <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl font-bold text-amber-500">
                    Logo
                </span>
                <h1 className="text-xl font-semibold">Divyansh Srivastava</h1>
            </div>
            <nav className="w-full">
                <ul className="flex flex-col gap-3 w-full">
                    <li className="bg-amber-100 p-3 rounded-lg hover:bg-amber-200 cursor-pointer transition-colors">Dashboard</li>
                    <li className="p-3 hover:bg-amber-100 rounded-lg cursor-pointer transition-colors">Evidences</li>
                    <li className="p-3 hover:bg-amber-100 rounded-lg cursor-pointer transition-colors">Cases</li>
                    <li className="p-3 hover:bg-amber-100 rounded-lg cursor-pointer transition-colors">Reports</li>
                    <li className="p-3 hover:bg-amber-100 rounded-lg cursor-pointer transition-colors">Add Evidence</li>
                    <li className="p-3 hover:bg-amber-100 rounded-lg cursor-pointer transition-colors">Add Report</li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;