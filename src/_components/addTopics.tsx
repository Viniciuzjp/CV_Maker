'use client';
import { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export default function AddTopics() {
  const [about, setAbout] = useState({
    about: "",
    name: "",
    adress: "",
    email: "",
    telephone: "",
    linkedin: "",
    github: "",
    objective: "",
    experience: "",
    experienceDate: "",
    experienceDescription: "",
  });

  const handleChange = (e:any) => {
    setAbout({
      ...about,
      [e.target.name]: e.target.value
    })
  }
 function renderEmail() {
  if(about.email) {
    return (
      <HiOutlineMail size={15} color="gray" />
    )
  }
 }

 function renderLocation() {
  if(about.adress) {
    return (
      <FaLocationDot size={12} color="gray" />
    )
  }
}
function renderPhone() {
  if(about.telephone) {
    return (
      <BsFillTelephoneFill size={12} color="gray" />
    )
  }
}
function renderLinkedin() {
  if(about.linkedin) {
    return (
      <FaLinkedin size={12} color="gray" />
    )
  }
}
function renderGithub() {
  if(about.linkedin) {
    return (
      <FaGithub size={12} color="gray" />
    )
  }
}
const [color, setColor] = useState({
  color1: "#87CEEB",
  color2: "",
  color3: "",
  color4: "",
  color5: ""
});
console.log(color.color3)
const handleColorChange = (e:any) => {
  setColor({
    ...color,
    [e.target.name]: e.target.value
  })
}


    return (
        <>
        <div className="flex">
        <div className="flex flex-col w-1/2 h-screen border justify-center items-center overflow-y-scroll">
          <div className="bg-white flex flex-col w-9/10 h-auto border justify-center items-center mt-40 mb-2 rounded-md">
            <input
            onChange={handleChange}
            type="text"
            name="about"
            defaultValue={"About me"}
            className="w-9/10 h-12 text-2xl font-bold border-b mb-5 pl-5 outline-0"
             />
            <input
            type="text"
            name="name"
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-9/10 h-12 border mb-5 pl-5 rounded-md"
            />
            <input
            onChange={handleChange}
            type="text"
            name="adress"
            placeholder="Enter your adress"
            className="w-9/10 h-12 border mb-5 pl-5 rounded-md"
            />
            <div className="flex w-9/10 h-12 mb-5">
            <input
            onChange={handleChange}
            type="text"
            name="email"
            placeholder="Enter your E-mail"
            className="w-7/10 h-12 border mb-5 pl-5 mr-5 rounded-md"
            />
            <input
            onChange={handleChange}
            type="text"
            name="telephone"
            placeholder="Enter your telephone number"
            className="w-3/10 h-12 border mb-5 pl-5 rounded-md"
            />
            </div>
            <input
            onChange={handleChange}
            type="text"
            name="linkedin"
            placeholder="Enter your LinkedIn"
            className="w-9/10 h-12 border mb-5 pl-5 rounded-md"
            />
            <input
            onChange={handleChange}
            type="text"
            name="github"
            placeholder="Enter your Github"
            className="w-9/10 h-12 border mb-5 pl-5 rounded-md"
            />
          </div>
          <div className="flex flex-col pt-5 w-9/10 h-auto justify-center items-center mt-10 mb-20 rounded-md flex-grow">
            <input
              onChange={handleChange}
              type="text"
              name="objective"
              placeholder="Say more about your objective"
              className="w-9/10 h-12 border mb-5 pl-5 rounded-md"
            />
            <div className="w-9/10 h-12 flex mb-5">
              <input
                onChange={handleChange}
                type="text"
                name="experience"
                placeholder="Your experience"
                className="w-7/10 h-12 border mb-5 pl-5 rounded-md"
              />
              <input
                onChange={handleChange}
                type="text"
                name="experienceDate"
                placeholder="Data"
                className="w-3/10 h-12 border mb-10 ml-5 pl-5 rounded-md"
              />
            </div>
            <div className="flex w-9/10 h-auto mb-5">
              <textarea
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    const textoAtual = (e.target as HTMLTextAreaElement).value;
                    (e.target as HTMLTextAreaElement).value = textoAtual + '\n';
                    const textarea = e.target as HTMLTextAreaElement;
                    textarea.style.height = `${textarea.scrollHeight}px`;
                  }
                }}
                onChange={handleChange}
                defaultValue={"• "}
                className="block w-10/10 border mb-5 pb-5 pt-3 pl-5 rounded-md overflow-hidden"
                name="experienceDescription"
                id="txtArea"
              />
            </div>
          </div>
          </div>
        </div>
        <div className=" w-1/2 h-screen fixed top-15 left-1/2">
            <div className="flex flex-col mt-15 ml-30 flex-wrap w-[21.59rem] h-[29.7rem] border items-center">
              <div style={{ backgroundColor: color.color1 }} className="h-[29rem] w-[8px] mt-1"></div>
              <div className="h-auto mt-3 w-9/10 items-center">
                  <p className="text-1xl font-bold">{about.name}</p>
                  <div className="flex justify-between flex-wrap">
                  <div className="flex items-center">
                  {renderLocation()}
                  <p className="ml-1 text-[0.6rem]">{about.adress}</p>
                  </div>
                  <div className="flex">
                  {renderEmail()}
                  <p className="ml-1 text-[0.6rem]">{about.email}</p>
                  </div>
                  <div className="flex items-center">
                  {renderPhone()}
                  <p className="ml-1 text-[0.6rem]">{about.telephone}</p>
                  </div>
                  <div className="flex items-center">
                  {renderLinkedin()}
                  <p className="ml-1 text-[0.6rem]">{about.linkedin}</p>
                  </div>
                  <div className="flex items-center">
                  {renderGithub()}
                  <p className="ml-1 text-[0.6rem]">{about.github}</p>
                  </div>
                  </div>
                  <div className="flex flex-col justify-between">
                  <div className="flex items-center">
                  <div style={{ backgroundColor: color.color1 }} className="mt-3 h-[1rem] w-[5px] mr-1"></div>
                  <p className="mt-3 text-[0.8rem] font-bold">Objective</p>
                  </div>
                  <p className="text-[0.6rem]">{about.objective}</p>
                  <div className="flex items-center">
                  <div style={{ backgroundColor: color.color1 }} className="mt-3 h-[1rem] w-[5px] mr-1"></div>
                  <p className="mt-3 text-[0.8rem] font-bold">Experience</p>
                  </div>
                  <div className="flex justify-between flex-wrap">
                  <div className="flex justify-between">
                  <p className="text-[0.6rem]">{about.experience}</p>
                  <p className="text-[0.6rem]">{about.experienceDate}</p>
                  </div>
                  </div>
                  <div className="flex flex-col ml-3 w-auto">
                    <ul>
                    {about.experienceDescription.split('\n').map((item, index) => (
                    <li key={index} className="text-[0.6rem] flex items-center">
                    <span className="mr-1">•</span>
                    {item}
                    </li>
                    ))}
                    </ul>
                  </div>
                  <div className="flex items-center">
                  <div style={{ backgroundColor: color.color1 }} className="mt-3 h-[1rem] w-[5px] mr-1"></div>
                  <p className="mt-3 text-[0.8rem] font-bold">Education</p>
                  </div>
                  <p className="text-[0.6rem]">{}</p>
                  <div className="flex items-center">
                  <div style={{ backgroundColor: color.color1 }} className="mt-3 h-[1rem] w-[5px] mr-1"></div>
                  <p className="mt-3 text-[0.8rem] font-bold">Skills</p>
                  </div>
                  <p className="text-[0.6rem]">{}</p>
                  <div className="flex items-center">
                  <div style={{ backgroundColor: color.color1 }} className="mt-3 h-[1rem] w-[5px] mr-1"></div>
                  <p className="mt-3 text-[0.8rem] font-bold">Languages</p>
                  </div>
                  <p className="text-[0.6rem]">{}</p>
                  </div>
              </div>
            </div>
            <div className="fixed top-[60px] right-0 h-[100vh] w-[10rem] border-l">
            <div className="flex flex-col items-center h-4/10">
            <input onChange={handleColorChange} name="color1" type="color" id="color" value={color.color1} className="color-input w-[50px] h-[50px] cursor-pointer" />
            <div className="flex flex-col items-center w-9/10">
              <button type="button" className="w-8/10 h-[50px] border-0 rounded-md bg-gray-100 cursor-pointer">Roboto</button>
              <button type="button" className="w-8/10 h-[50px] border-0 rounded-md bg-gray-100 cursor-pointer">Arial</button>
              <button type="button" className="w-8/10 h-[50px] border-0 rounded-md bg-gray-100 cursor-pointer">Poppins
              </button>
            </div>
            </div>
            </div>
        </div>
        </>
    );
}
