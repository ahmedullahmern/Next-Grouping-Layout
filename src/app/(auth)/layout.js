function Authlayout({ children }) {
    return (
        <main className="flex min-h-screen">
            <div className="w-1/2 flex justify-center items-center bg-teal-300">
                <h1>Image</h1>
            </div>
            <div className="flex-grow">
                {children}
            </div>
        </main>
    )
}

export default Authlayout