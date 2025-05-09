'use client';
import { useEffect, useState } from "react";
import { HiOutlineMail} from "react-icons/hi";
import { FaLocationDot, FaPlus } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { TbDeviceImacPlus } from "react-icons/tb";
import { FaRegEyeSlash } from "react-icons/fa6";
import { TbSettingsPlus } from "react-icons/tb";
import { FaTrashAlt } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import generatePDF, { Margin } from 'react-to-pdf';
import { Options } from 'react-to-pdf';
import axios from "axios";
import { RiFileCheckFill } from "react-icons/ri";

export default function AddTopics() {
  // State
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
    education: "",
    skills: "",
    languages: "",
    projects: "",
    color1: "#87CEEB",
    colorText: "#000",
    fontFamily: " "
  });

  // Functions
  const handleChange = (e: any) => {
    setAbout({
      ...about,
      [e.target.name]: e.target.value
    })
  }

  const handleColorChange = (e: any) => {
    setAbout({
      ...about,
      [e.target.name]: e.target.value
    })
    setAbout({
      ...about,
      colorText: e.target.value
    })
  }

  const renderEmail = () => {
    if (about.email) {
      return (
        <HiOutlineMail size={15} color="gray" />
      )
    }
  }

  const renderLocation = () => {
    if (about.adress) {
      return (
        <FaLocationDot size={12} color="gray" />
      )
    }
  }

  const renderPhone = () => {
    if (about.telephone) {
      return (
        <BsFillTelephoneFill size={12} color="gray" />
      )
    }
  }

  const renderLinkedin = () => {
    if (about.linkedin) {
      return (
        <FaLinkedin size={12} color="gray" />
      )
    }
  }

  const renderGithub = () => {
    if (about.github) {
      return (
        <FaGithub size={12} color="gray" />
      )
    }
  }

  const [font, setFont] = useState({
    Roboto: "Roboto",
    Poppins: "Poppins",
    Regular: "Regular",
    Arial: "Arial",
    Helvetica: "Helvetica",
    Verdana: "Verdana",
    Tahoma: "Tahoma",
    Georgia: "Georgia",
    Times: "Times",
    Courier: "Courier",
    Impact: "Impact",
    Comic: "Comic",
    Lucida: "Lucida",
    sansSerif: "sansSerif",
    monospace: "monospace",
    cursive: "cursive",
    fantasy: "fantasy",
    serif: "serif",
    systemUi: "systemUi",
    timesNewRoman: "timesNewRoman",
    georgia: "georgia",
    comicSans: "comicSans",
    impact: "impact",
    lucidaConsole: "lucidaConsole",
    lucidaSans: "lucidaSans",
    lucidaSansTypewriter: "lucidaSansTypewriter",
    lucidaTypewriter: "lucidaTypewriter",
    lucidaHandwriting: "lucidaHandwriting",
    lucidaCalligraphy: "lucidaCalligraphy"
  })

  const handleFontChange = (e: any) => {
    setAbout({
      ...about, fontFamily: e.target.value
    })
  }
  
  const [textSize, setTextSize] = useState({
    fontSize: "",
  });

  const handleFontSizeChange = (e: any) => {
    setTextSize({
      ...textSize, fontSize: e.target.value
    })
  }
  const handleClear = () => {
    setAbout({
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
      education: "",
      skills: "",
      languages: "",
      projects: "",
      color1: "#87CEEB",
      colorText: "#000",
      fontFamily: " "
    })
  }
  const [modalSuccess, setModalSuccess] = useState(false)


  const handleSave = () => {

    axios.post("http://localhost:3001/curriculum", about)
    .then(() => setModalSuccess(true))
    .catch((error) => console.log(error))
  }
  const [user, setUser] = useState([])
  useEffect(()=> {
    axios.get("http://localhost:3001/login")
    .then((response) => setUser(response.data))
  })
  console.log(user)
  const handleShowModal = () => {
    if (modalSuccess === true) {
      setTimeout(() => {handleDeleteModal()}, 3000)
      return (
        <div>
          <div id="modalSuccess" className="absolute top-[20%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[200px] w-[300px] gap-1 bg-white flex flex-col justify-center items-center border-dashed border-2 border-gray-300 rounded-2xl text-center">
              <h1 className="text-2xl font-bold text-gray-400">Success</h1>
              <RiFileCheckFill size={50} color="#74e839" />
              <p className="text-gray-500">Your Curriculum has been saved successfully</p>
          </div>
        </div>
      )
    } 
  }
  const handleDeleteModal = () => {
    document.getElementById("modalSuccess")?.remove()
    setModalSuccess(false)
  }

  const [count2, setCount2] = useState(0)
  const hiddenClassObj = () => {
    const objective = document.getElementById("objective");
    const inputs = objective?.querySelectorAll("input")
    const txtArea = objective?.querySelectorAll("textarea")
    const icon2 = document.getElementById("eyeIcon2");
    if (icon2) {
    icon2.style.color = "gray";
    }

    if (count2 === 0) {
      setCount2(count2 + 1)
      inputs?.forEach(input => {
        input.disabled = true
      })
      txtArea?.forEach(input => {
        input.disabled = true
      })
    }
    if (count2 === 1) {
    inputs?.forEach(input => {
      input.disabled = false
      setCount2(count2 - 1)
    })
    txtArea?.forEach(input => {
      input.disabled = false
    })
    if (icon2) {
      icon2.style.color = "black";
    }
  }
}
  const [count, setCount] = useState(0)
  const hiddenClassEdu = () => {
    const education = document.getElementById("education");
    const inputs = education?.querySelectorAll("input")
    const txtArea = education?.querySelectorAll("textarea")
    const icon = document.getElementById("eyeIcon");
    const container = document.getElementById("containerEdu");
    if (icon) {
    icon.style.color = "gray";
    }

    if (count === 0) {
      setCount(count + 1)
      container?.classList.add("hidden")
      inputs?.forEach(input => {
        input.disabled = true
      })
      txtArea?.forEach(input => {
        input.disabled = true
      })
    }
    if (count === 1) {
    inputs?.forEach(input => {
      input.disabled = false
      setCount(count - 1)
      container?.classList.remove("hidden")
    })
    txtArea?.forEach(input => {
      input.disabled = false
    })
    if (icon) {
      icon.style.color = "black";
    }
  }
}

const [countLinkd, setCountLinkd] = useState(0)
const handleDeleteLinkd = () => {
  const LinkedinElement = document.getElementById("linkedin");
  const addLinkedinCard = document.getElementById("addLinkedinCard");
  if (LinkedinElement) {
  LinkedinElement.style.display = "none";
  about.linkedin = ""
  }
  if (addLinkedinCard) {
    addLinkedinCard.style.display = "flex";
  }
  setCountLinkd(countLinkd + 1)
}
function handleAddLinkedin() {
  const LinkedinElement = document.getElementById("linkedin");
  const addLinkedinCard = document.getElementById("addLinkedinCard");
  if (LinkedinElement) {
  LinkedinElement.style.display = "flex";
  }
  if (addLinkedinCard) {
    addLinkedinCard.style.display = "none";
  }
  setCountLinkd(countLinkd - 1)
}

const [countGit, setCountGit] = useState(0)
const handleDeleteGit = () => {
  const GithubElement = document.getElementById("github");
  const addGithubCard = document.getElementById("addGithubCard");
  if (GithubElement) {
  GithubElement.style.display = "none";
  about.github = ""
  }
  if (addGithubCard) {
    addGithubCard.style.display = "flex";
  }
  setCountGit(countGit + 1)
}
function handleAddGit() {
  const GithubElement = document.getElementById("github");
  const addGithubCard = document.getElementById("addGithubCard");
  if (GithubElement) {
  GithubElement.style.display = "flex";
  }
  if (addGithubCard) {
    addGithubCard.style.display = "none";
  }
  setCountGit(countGit - 1)
}

const customization: Options = {
  method: "save",
  page: {
    // Margin: Medium, Large, XLarge
    // format: "a4', "legal", "letter", "a0", "a1", "a2", "a3", "a4", "a5", "a6",
    format: "A4",
    // orientation: "landscape", 
    orientation: "portrait",
  },
  canvas: {
    // default is 'image/jpeg' for better size performance
    mimeType: 'image/png',
    qualityRatio: 1
 },
 
};

const targetRef = () => document.getElementById('pdfElement')!;
const handleDownload = () => {
  generatePDF(targetRef, customization)
}
    return (
        <>
        <div className="flex h-screen w-screen max-md:block max-md:overflow-y-scroll">
          {handleShowModal()}
        <section id="main" className="flex bg-gray-100 flex-col w-1/2 max-h-[100vh] pt-50 justify-center items-center overflow-y-scroll max-md:w-full">
          <div id="about" className="bg-white flex flex-col w-9/10 h-auto justify-center items-center mb-2 shadow-md mt-130">
            <input
            onChange={handleChange}
            type="text"
            name="about"
            defaultValue={"About me:"}
            className="w-9/10 h-12 text-2xl font-bold border-b mb-5 pl-5 outline-0 border-gray-300 text-gray-400"
             />
            <input
            type="text"
            name="name"
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-9/10 h-12 border mb-5 pl-5 rounded-md outline-0 border-gray-300 placeholder:text-gray-400 text-gray-500"
            />
            <input
            onChange={handleChange}
            type="text"
            name="adress"
            placeholder="Enter your adress"
            className="w-9/10 h-12 border mb-5 pl-5 rounded-md outline-0 border-gray-300 placeholder:text-gray-400 text-gray-500"
            />
            <div className="flex w-9/10 h-12 mb-5">
            <input
            onChange={handleChange}
            type="text"
            name="email"
            placeholder="Enter your E-mail"
            className="w-7/10 h-12 border mb-5 pl-5 mr-5 rounded-md outline-0 border-gray-300 placeholder:text-gray-400 text-gray-500"
            />
            <input
            onChange={handleChange}
            type="text"
            name="telephone"
            placeholder="Enter your telephone number"
            className="w-3/10 h-12 border mb-5 pl-5 rounded-md outline-0 border-gray-300 placeholder:text-gray-400 text-gray-500"
            />
            </div>
            <div>
              <CiCirclePlus onClick={handleAddLinkedin} id="addLinkedinCard" size={30} color="gray" style={{display: "none", marginBottom: "10px"}}/>
            </div>
            <div id="linkedin" className="flex w-9/10 h-12 mb-5">
            <input
            onChange={handleChange}
            type="text"
            name="linkedin"
            placeholder="Enter your LinkedIn"
            className="w-10/10 h-12 border mb-5 pl-5 rounded-md outline-0 border-gray-300 placeholder:text-gray-400 text-gray-500"
            />
            <FaTrashAlt id="deleteIcon" onClick={handleDeleteLinkd} style={{position: "relative", right: "40px", top: "13px"}} size={25} color="gray" />
            </div>
            <div>
              <CiCirclePlus onClick={handleAddGit} id="addGithubCard" size={30} color="gray" style={{display: "none", marginBottom: "10px"}}/>
            </div>
            <div id="github" className="flex w-9/10 h-12 mb-5">
            <input
            onChange={handleChange}
            type="text"
            name="github"
            placeholder="Enter your Github"
            className="w-10/10 h-12 border mb-5 pl-5 rounded-md outline-0 border-gray-300 placeholder:text-gray-400 text-gray-500"
            />
            <FaTrashAlt onClick={handleDeleteGit} style={{position: "relative", right: "40px", top: "13px"}} size={25} color="gray" />
            </div>
          </div>
          <div id="objective" className="flex flex-col bg-white shadow-md pt-5 w-9/10 h-auto justify-center items-center mt-10 mb-10  flex-grow placeholder:text-gray-400 text-gray-500">
          <div className="flex justify-between">
          <TbDeviceImacPlus size={30} color="gray" className="relative right-60 mb-5" />
        <FaRegEyeSlash id="eyeIcon2" onClick={hiddenClassObj} size={30} color="black" className="relative left-60"/>
          </div>
            <input
              onChange={handleChange}
              type="text"
              name="objective"
              placeholder="Say more about your objective"
              className="w-9/10 h-12 border mb-5 pl-5 rounded-md outline-0 border-gray-300 placeholder:text-gray-400 text-gray-500"
            />
            <div className="w-9/10 h-12 flex mb-5">
              <input
                onChange={handleChange}
                type="text"
                name="experience"
                placeholder="Your experience"
                className="w-7/10 h-12 border mb-5 pl-5 rounded-md outline-0 border-gray-300 placeholder:text-gray-400 text-gray-500"
              />
              <input
                onChange={handleChange}
                type="text"
                name="experienceDate"
                placeholder="Data"
                className="w-3/10 h-12 border mb-10 ml-5 pl-5 rounded-md outline-0 border-gray-300 placeholder:text-gray-400 text-gray-500"
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
                defaultValue={""}
                className="block w-10/10 border mb-5 pb-5 pt-3 pl-5 rounded-md overflow-hidden outline-0 border-gray-300 placeholder:text-gray-400 text-gray-500"
                name="experienceDescription"
                id="txtArea"
              />
            </div>
            </div>
            <div id="education" className="flex bg-white flex-col shadow-md border-gray-400 pt-5 w-9/10 h-auto justify-center items-center mt-10 mb-20 flex-grow placeholder:text-gray-400 text-gray-500">
            <div className="flex justify-between mb-5">
            <MdOutlineLibraryBooks size={30} color="gray" className="relative right-60" />
            <FaRegEyeSlash id="eyeIcon" onClick={hiddenClassEdu} size={30} color="black" className="relative left-60"/>
            </div>
            <input
            onChange={handleChange}
            type="text"
            name="education"
            placeholder="Your education"
            className="w-9/10 h-12 border mb-5 pl-5 rounded-md outline-0 border-gray-300 placeholder:text-gray-400 text-gray-500"
            />
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
            name="skills"
            placeholder="Your skills"
            className="w-9/10 h-12 border-2 mb-5 pl-5 rounded-md outline-0 border-gray-300 placeholder:text-gray-400 text-gray-500">
            </textarea>
            <input
            type="text"
            onChange={handleChange}
            name="languages"
            placeholder="Your languages"
            className="w-9/10 h-12 border mb-5 pl-5 rounded-md outline-0 border-gray-300 placeholder:text-gray-400 text-gray-500"
            />
            <input
            type="text"
            onChange={handleChange}
            name="projects"
            placeholder="Your projects"
            className="w-9/10 h-12 border mb-5 pl-5 rounded-md outline-0 border-gray-300 placeholder:text-gray-400 text-gray-500"
            />
          </div>
          <div className="md:hidden pb-10 flex itens-center justify-center">
                <h1 className="text-2xl font-bold">Customization</h1>
          </div>
        </section>
        <div className="md:w-1/2 max-md:w-full">
        <div className="flex w-10/10 h-[30px] shadow-md">
        <select className="outline-0" onChange={handleFontChange} >
        {Object.keys(font).map((fontName, index) => (
    <option key={index} style={{fontFamily: fontName}} value={fontName}>
      {fontName}
    </option>
  ))}
        </select>
        <div className="ml-3 flex">
            <p className="text-gray-400">Font-Size:</p>
            <input
            onChange={handleFontSizeChange}
            type="text"
            name="fontSize"
            defaultValue={"12px"}
            className="border-b border-gray-300 pl-5 outline-0 mb-2 ml-2 w-3/10 placeholder:text-gray-400 text-gray-500"
            />
        </div>
        </div>
            <div id="cv" style={{ fontFamily: about.fontFamily, fontSize: textSize.fontSize}} className="flex flex-col mt-10 ml-30 flex-wrap w-[21.59rem] h-[29.7rem] shadow-2xl items-center">
              <div style={{ backgroundColor: about.color1 }} className="h-[29rem] w-[8px] mt-1"></div>
              <div className="h-10/20 mt-3 w-9/10 items-center">
                  <p style={{ color: about.colorText }} className="text-1xl font-bold">{about.name}</p>
                  <div className="flex justify-between flex-wrap">
                  <div className="flex items-center">
                  {renderLocation()}
                  <p className="ml-1 text-[0.5rem]">{about.adress}</p>
                  </div>
                  <div className="flex">
                  {renderEmail()}
                  <p className="ml-1 text-[0.5rem]">{about.email}</p>
                  </div>
                  <div className="flex items-center">
                  {renderPhone()}
                  <p className="ml-1 text-[0.5rem]">{about.telephone}</p>
                  </div>
                  <div className="flex items-center">
                  {renderLinkedin()}
                  <p className="ml-1 text-[0.5rem]">{about.linkedin}</p>
                  </div>
                  <div className="flex items-center">
                  {renderGithub()}
                  <p className="ml-1 text-[0.5rem]">{about.github}</p>
                  </div>
                  </div>
                  <div className="flex flex-col justify-between">
                  <div className="flex items-center">
                  <div style={{ backgroundColor: about.color1 }} className="mt-3 h-[1rem] w-[5px] mr-1"></div>
                  <p style={{ color: about.colorText }} className="mt-3 text-[0.7rem] font-bold">Objective</p>
                  </div>
                  <p className="text-[0.5rem]">{about.objective}</p>
                  <div className="flex items-center">
                  <div style={{ backgroundColor: about.color1 }} className="mt-3 h-[1rem] w-[5px] mr-1"></div>
                  <p style={{ color: about.colorText }} className="mt-3 text-[0.7rem] font-bold">Experience</p>
                  </div>
                  <div className="flex-wrap">
                  <div className="flex justify-between">
                  <p className="text-[0.5rem]">{about.experience}</p>
                  <p className="text-[0.5rem]">{about.experienceDate}</p>
                  </div>
                  </div>
                  <div className="flex flex-col ml-3 w-auto">
                    <ul>
                    {about.experienceDescription.split('\n').map((item, index) => (
                    <li key={index} className="text-[0.5rem] flex items-center">
                    <span className="mr-1">•</span>
                    {item}
                    </li>
                    ))}
                    </ul>
                  </div>
                  <div id="containerEdu">
                  <div className="flex items-center">
                  <div style={{ backgroundColor: about.color1 }} className="mt-3 h-[1rem] w-[5px] mr-1"></div>
                  <p style={{ color:  about.colorText }} className="mt-3 text-[0.7rem] font-bold">Education</p>
                  </div>
                  <p className="text-[0.5rem]">{about.education}</p>
                  <div className="flex items-center">
                  <div style={{ backgroundColor: about.color1 }} className="mt-3 h-[1rem] w-[5px] mr-1"></div>
                  <p style={{ color: about.colorText }} className="mt-3 text-[0.7rem] font-bold">Skills</p>
                  </div>
                  <div className="flex flex-col ml-3 w-auto">
                    <ul>
                    {about.skills.split('\n').map((item, index) => (
                    <li key={index} className="text-[0.5rem] flex items-center">
                    <span className="mr-1">•</span>
                    {item}
                    </li>
                    ))}
                    </ul>
                  </div>
                  <div className="flex items-center">
                  <div style={{ backgroundColor: about.color1 }} className="mt-3 h-[1rem] w-[5px] mr-1"></div>
                  <p style={{ color: about.colorText }} className="mt-3 text-[0.7rem] font-bold">Languages</p>
                  </div>
                  <p className="text-[0.5rem]">{about.languages}</p>
                  <div className="flex items-center">
                  <div style={{ backgroundColor: about.color1 }} className="mt-3 h-[1rem] w-[5px] mr-1"></div>
                  <p style={{ color: about.colorText }} className="mt-3 text-[0.7rem] font-bold">Projects</p>
                  <div>
                  </div>
                  </div>
                  <p className="text-[0.5rem]">{about.projects}</p>
                  </div>
                  </div>
              </div>
            </div>
            <section className="mt-5 w-10/10 h-12 max-md:flex max-md:justify-center ">
                <button onClick={handleDownload} className="w-[100px] h-[40px] border-3 border-green-400 rounded-md float-end max-md:mr-5 md:mr-50 font-bold text-green-400 cursor-pointer">Download</button>
                <button className="w-[100px] h-[40px] border-3 border-blue-400 rounded-md float-end mr-5 font-bold text-blue-500 cursor-pointer">Preview</button>
                <button onClick={handleClear} className="w-[100px] h-[40px] border-3 border-red-400 rounded-md float-end mr-5 font-bold text-red-400 cursor-pointer">Clear</button>
                <button onClick={handleSave} className="w-[100px] h-[40px] border-3 border-green-400 rounded-md float-end mr-5 font-bold text-green-400 cursor-pointer">Save</button>
            </section>
            <div>
            </div>
            <div className="fixed md:top-[90px] right-0 md:h-[100vh] max-md:h-[150px] max-md:mt-[50px] md:w-[10rem] max-md:w-full max-md:relative">
            <div className="flex max:-md:justify-center md:flex-col items-center h-4/10">
            <div className="flex max-md:mr-3 flex-col items-center">
            <p className="text-1xl">Color Lines</p>
            <input onChange={handleColorChange} name="color1" type="color" id="color" value={about.color1} className="color-input w-[50px] h-[50px] cursor-pointer" />
            <input onChange={handleColorChange} style={{ color: about.color1, borderColor: about.color1 }} name="color1" defaultValue={about.color1} type="text" className="w-5/10 border-b outline-0" />
            </div>
            <div className="flex flex-col items-center">
            <p className="text-1xl">Color Text</p>
            <input onChange={handleColorChange} name="colorText" type="color" id="color" value={about.colorText} className="color-input w-[50px] h-[50px] cursor-pointer" />
            <input onChange={handleColorChange} style={{ color: about.colorText, borderColor: about.colorText }} name="colorText" defaultValue={about.colorText} type="text" className="w-5/10 border-b outline-0" />
            </div>
            </div>
            </div>
            </div>
        </div>
        <div id="pdfElement" style={{ fontFamily: about.fontFamily, fontSize: textSize.fontSize}} className="flex flex-col mt-10 h-[100vh] w-[100vh] flex-wrap shadow-lg items-center">
              <div style={{ backgroundColor: about.color1 }} className="h-[100vh] w-[8px] mt-1"></div>
              <div className="h-10/20 mt-3 w-9/10 items-center">
                  <p style={{ color: about.colorText }} className="text-2xl font-bold">{about.name}</p>
                  <div className="flex justify-between flex-wrap">
                  <div className="flex items-center">
                  {renderLocation()}
                  <p className="ml-1 text-[0.8rem]">{about.adress}</p>
                  </div>
                  <div className="flex">
                  {renderEmail()}
                  <p className="ml-1 text-[0.8rem]">{about.email}</p>
                  </div>
                  <div className="flex items-center">
                  {renderPhone()}
                  <p className="ml-1 text-[0.8rem]">{about.telephone}</p>
                  </div>
                  <div className="flex items-center">
                  {renderLinkedin()}
                  <p className="ml-1 text-[0.8rem]">{about.linkedin}</p>
                  </div>
                  <div className="flex items-center">
                  {renderGithub()}
                  <p className="ml-1 text-[0.8rem]">{about.github}</p>
                  </div>
                  </div>
                  <div className="flex flex-col justify-between">
                  <div className="flex items-center">
                  <div style={{ backgroundColor: about.color1 }} className="mt-3 h-[1rem] w-[5px] mr-1"></div>
                  <p style={{ color: about.colorText }} className="text-1xl font-bold">Objective</p>
                  </div>
                  <p className="text-[0.8rem]">{about.objective}</p>
                  <div className="flex items-center">
                  <div style={{ backgroundColor: about.color1 }} className="mt-3 h-[1rem] w-[5px] mr-1"></div>
                  <p style={{ color: about.colorText }} className="text-1xl font-bold">Experience</p>
                  </div>
                  <div className="flex-wrap">
                  <div className="flex justify-between">
                  <p className="text-[0.8rem]">{about.experience}</p>
                  <p className="text-[0.8rem]">{about.experienceDate}</p>
                  </div>
                  </div>
                  <div className="flex flex-col ml-3 w-auto">
                    <ul>
                    {about.experienceDescription.split('\n').map((item, index) => (
                    <li key={index} className="text-[0.8rem] flex items-center">
                    <span className="mr-1">•</span>
                    {item}
                    </li>
                    ))}
                    </ul>
                  </div>
                  <div id="containerEdu">
                  <div className="flex items-center">
                  <div style={{ backgroundColor: about.color1 }} className="mt-3 h-[1rem] w-[5px] mr-1"></div>
                  <p style={{ color: about.colorText }} className="text-1xl font-bold">Education</p>
                  </div>
                  <p className="text-[0.8rem]">{about.education}</p>
                  <div className="flex items-center">
                  <div style={{ backgroundColor: about.color1 }} className="mt-3 h-[1rem] w-[5px] mr-1"></div>
                  <p style={{ color: about.colorText }} className="text-1xl font-bold">Skills</p>
                  </div>
                  <div className="flex flex-col ml-3 w-auto">
                    <ul>
                    {about.skills.split('\n').map((item, index) => (
                    <li key={index} className="text-[0.8rem] flex items-center">
                    <span className="mr-1">•</span>
                    {item}
                    </li>
                    ))}
                    </ul>
                  </div>
                  <div className="flex items-center">
                  <div style={{ backgroundColor: about.color1 }} className="mt-3 h-[1rem] w-[5px] mr-1"></div>
                  <p style={{ color: about.colorText }} className="text-1xl font-bold">Languages</p>
                  </div>
                  <p className="text-[0.8rem]">{about.languages}</p>
                  <div className="flex items-center">
                  <div style={{ backgroundColor: about.color1 }} className="mt-3 h-[1rem] w-[5px] mr-1"></div>
                  <p style={{ color: about.colorText }} className="text-1xl font-bold">Projects</p>
                  <div>
                  </div>
                  </div>
                  <p className="text-[0.8rem]">{about.projects}</p>
                  </div>
                  </div>
              </div>
            </div>
        </>
    );
}
// Preview Button
