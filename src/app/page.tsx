import { FaRegPenToSquare } from "react-icons/fa6";
import { LuFilePlus2 } from "react-icons/lu";
import { GrDocumentText } from "react-icons/gr";
import Link from "next/link";
export default function Home() {
  return (
    <>
        <div className="h-screen w-screen flex flex-col justify-center items-center max-md:flex-col gap-10">
          <div className="flex justify-center items-center gap-10">
            <div className="h-[300px] w-[300px] shadow-lg rounded-md">
              <Link href="/curriculum">
                <div className="h-10/10 w-10/10 flex justify-center items-center flex-col">
                  <LuFilePlus2 className="animate-pulse" size={50} color="#cdcdcd" />
                  <h4 className="text-gray-500 animate-pulse font-bold">Create a new Curriculum</h4>
                </div>
              </Link>
            </div>
            <div className="h-[300px] w-[300px] shadow-lg rounded-md">
              <Link href="/curriculums">
                <div className="h-10/10 w-10/10 flex justify-center items-center flex-col">
                  <GrDocumentText className="animate-pulse" size={50} color="#cdcdcd" />
                  <h4 className="text-gray-500 animate-pulse font-bold">View all yours Curriculums</h4>
                </div>
              </Link>
            </div>
          </div>
        </div>
    </>
  );
}
