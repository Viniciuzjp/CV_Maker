

export default function Header() {
    return (
        <>
            <div className="bg-white flex justify-between items-center border w-full h-15">
                <h1 className="text-4xl font-bold ml-5">AdvenceWork</h1>
                <div className="userLog flex mr-3">
                <h3 className="mr-3">Login</h3>
                <h3>Register</h3>
                </div>
            </div>
        </>
    );
}