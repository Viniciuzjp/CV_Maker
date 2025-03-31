import { FaRegPenToSquare } from "react-icons/fa6";
import { LuFilePlus2 } from "react-icons/lu";
import { GrDocumentText } from "react-icons/gr";
import Link from "next/link";
export default function Home() {
  return (
    <>
        <div className="h-screen w-screen flex flex-col justify-center items-center max-md:flex-col gap-10">
          <h1 className="text-4xl font-bold mb-5 text-blue-300">Choose The Best Version Of Yourself</h1>
          <div className="flex justify-center items-center gap-10">
            <div className="h-[300px] w-[300px] itens-center justify-center border-dashed border-2 border-gray-300 rounded-md text-center">
              <div className="h-10/10 w-10/10 flex justify-center items-center flex-col">
                <FaRegPenToSquare size={50} color="#949aa7" />
                <h4 className="text-gray-500 font-bold">Edit your Curriculum</h4>
              </div>
            </div>
            <div className="h-[300px] w-[300px] border-dashed border-2 border-gray-300 rounded-md">
              <Link href="/curriculum">
                <div className="h-10/10 w-10/10 flex justify-center items-center flex-col">
                  <LuFilePlus2 size={50} color="#949aa7" />
                  <h4 className="text-gray-500 font-bold">Create a new Curriculum</h4>
                </div>
              </Link>
            </div>
            <div className="h-[300px] w-[300px] border-dashed border-2 border-gray-300 rounded-md">
              <Link href="/curriculum">
                <div className="h-10/10 w-10/10 flex justify-center items-center flex-col">
                  <GrDocumentText size={50} color="#949aa7" />
                  <h4 className="text-gray-500 font-bold">View all yours Curriculums</h4>
                </div>
              </Link>
            </div>
          </div>
        </div>
    </>
  );
}
