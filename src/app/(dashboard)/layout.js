
function Dashboardlayout({ children }) {
    return (
        <div className="flex justify-center items-center  flex-col">
            <h1 className="text-9xl font-bold text-red-500">
                Dashboard
            </h1>
            <div className="text-orange-400 text-7xl">
                {children}
            </div>
        </div>
    )
}

export default Dashboardlayout