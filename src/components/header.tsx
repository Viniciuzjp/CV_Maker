

export default function Header() {
    return (
        <>
            <div className="bg-white flex justify-between items-center border border-gray-400 w-screen h-[80px]">
                <h1 className="text-4xl font-bold ml-5 mt-10">CvMaker</h1>
                <div className="userLog flex mr-3">
                <h3 className="mr-3 mt-10">Login</h3>
                <h3 className="mt-10">Register</h3>
                </div>
            </div>
        </>
    );
}