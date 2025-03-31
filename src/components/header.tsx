import Link from "next/link";

export default function Header() {
    return (
        <>
            <div className="bg-blue-400 text-white flex justify-between items-center border border-gray-400 w-screen h-[50px]">
                <Link href={"/"}>
                    <h1 className="text-4xl font-bold ml-5">CvMaker</h1>
                </Link>
                <div className="userLog flex mr-3">
                <h3 className="mr-3">Login</h3>
                <h3 className="">Register</h3>
                </div>
            </div>
        </>
    );
}