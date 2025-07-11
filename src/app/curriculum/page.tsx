"use client";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import generatePDF, { Options } from "react-to-pdf";
import { AnimatePresence, motion } from "framer-motion";

import { HiOutlineMail } from "react-icons/hi";

import { FaLocationDot } from "react-icons/fa6";

import {
  FaRegEyeSlash,
  FaTrashAlt,
  FaLinkedin,
  FaGithub,
  FaCheck,
} from "react-icons/fa";

import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineLibraryBooks } from "react-icons/md";

import { TbDeviceImacPlus, TbTextSize } from "react-icons/tb";

import { CiCirclePlus } from "react-icons/ci";
import { RiFileCheckFill } from "react-icons/ri";

import ColorPickerWrapper from "@/components/ColorPickerWrapper/ColorPickerWrapper";
import InputComponent from "@/components/input/input";
import TemplateTwo from "@/components/Templates/TemplateColum/curriculum";
import TemplateMain from "@/components/Templates/TemplateMain/curriculum";

import { toPng } from "html-to-image";
import jsPDF from "jspdf";

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
    experience2: "",
    experienceDate2: "",
    experienceDescription2: "",
    education: "",
    skills: "",
    languages: "",
    projects: "",
    color1: "#d2d2d2",
    background: "",
    colorText: "#000000",
    fontFamily: " ",
  });

  // Functions
  const handleChange = (e: any) => {
    setAbout({
      ...about,
      [e.target.name]: e.target.value,
    });
    if (about.name == "") {
      var Topic = document.getElementById("Topic");
      if (Topic) {
        Topic.style.display = "none";
      }
    } else {
      let Topic = document.getElementById("Topic");
      if (Topic) {
        Topic.style.display = "flex";
      }
    }
  };
  const handleColorPickerChange = (e: any) => {
    setAbout({
      ...about,
      background: e.hex,
    });
  };
  const renderEmail = () => {
    if (about.email) {
      return <HiOutlineMail size={15} color="gray" />;
    }
  };

  const renderLocation = () => {
    if (about.adress) {
      return <FaLocationDot size={12} color="gray" />;
    }
  };

  const renderPhone = () => {
    if (about.telephone) {
      return <BsFillTelephoneFill size={12} color="gray" />;
    }
  };

  const renderLinkedin = () => {
    if (about.linkedin) {
      return <FaLinkedin size={12} color="gray" />;
    }
  };

  const renderGithub = () => {
    if (about.github) {
      return <FaGithub size={12} color="gray" />;
    }
  };

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
    lucidaCalligraphy: "lucidaCalligraphy",
  });

  const handleFontChange = (e: any) => {
    setAbout({
      ...about,
      fontFamily: e.target.value,
    });
  };

  const [textSize, setTextSize] = useState({
    fontSize: "",
  });

  const handleFontSizeChange = (e: any) => {
    setTextSize({
      ...textSize,
      fontSize: e.target.value,
    });
  };
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
      experience2: "",
      experienceDate2: "",
      experienceDescription2: "",
      education: "",
      skills: "",
      languages: "",
      projects: "",
      color1: "#87CEEB",
      background: "#b9b9b9",
      colorText: "#000",
      fontFamily: " ",
    });
  };

  const [modalSuccess, setModalSuccess] = useState(false);

  const handleSave = () => {
    axios
      .post("http://localhost:3001/curriculum", about)
      .then(() => setModalSuccess(true))
      .catch((error) => console.log(error));
  };
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/login")
      .then((response) => setUser(response.data));
  }, []);
  console.log(user);
  const handleShowModal = () => {
    if (modalSuccess === true) {
      setTimeout(() => {
        handleDeleteModal();
      }, 3000);
      return (
        <div>
          <div
            id="modalSuccess"
            className="absolute top-[20%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[200px] w-[300px] gap-1 bg-white flex flex-col justify-center items-center border-dashed border-2 border-gray-300 rounded-2xl text-center"
          >
            <h1 className="text-2xl font-bold text-gray-400">Success</h1>
            <RiFileCheckFill size={50} color="#74e839" />
            <p className="text-gray-500">
              Your Curriculum has been saved successfully
            </p>
          </div>
        </div>
      );
    }
  };
  const handleDeleteModal = () => {
    document.getElementById("modalSuccess")?.remove();
    setModalSuccess(false);
  };

  const [count2, setCount2] = useState(0);
  const hiddenClassObj = () => {
    const objective = document.getElementById("objective");
    const inputs = objective?.querySelectorAll("input");
    const txtArea = objective?.querySelectorAll("textarea");
    const icon2 = document.getElementById("eyeIcon2");
    if (icon2) {
      icon2.style.color = "gray";
    }

    if (count2 === 0) {
      setCount2(count2 + 1);
      inputs?.forEach((input) => {
        input.disabled = true;
      });
      txtArea?.forEach((input) => {
        input.disabled = true;
      });
    }
    if (count2 === 1) {
      inputs?.forEach((input) => {
        input.disabled = false;
        setCount2(count2 - 1);
      });
      txtArea?.forEach((input) => {
        input.disabled = false;
      });
      if (icon2) {
        icon2.style.color = "black";
      }
    }
  };
  const [count, setCount] = useState(0);
  const hiddenClassEdu = () => {
    const education = document.getElementById("education");
    const inputs = education?.querySelectorAll("input");
    const txtArea = education?.querySelectorAll("textarea");
    const icon = document.getElementById("eyeIcon");
    const container = document.getElementById("containerEdu");
    if (icon) {
      icon.style.color = "gray";
    }

    if (count === 0) {
      setCount(count + 1);
      container?.classList.add("hidden");
      inputs?.forEach((input) => {
        input.disabled = true;
      });
      txtArea?.forEach((input) => {
        input.disabled = true;
      });
    }
    if (count === 1) {
      inputs?.forEach((input) => {
        input.disabled = false;
        setCount(count - 1);
        container?.classList.remove("hidden");
      });
      txtArea?.forEach((input) => {
        input.disabled = false;
      });
      if (icon) {
        icon.style.color = "black";
      }
    }
  };

  const [countLinkd, setCountLinkd] = useState(0);
  const handleDeleteLinkd = () => {
    const LinkedinElement = document.getElementById("linkedin");
    const addLinkedinCard = document.getElementById("addLinkedinCard");
    if (LinkedinElement) {
      LinkedinElement.style.display = "none";
      about.linkedin = "";
    }
    if (addLinkedinCard) {
      addLinkedinCard.style.display = "flex";
    }
    setCountLinkd(countLinkd + 1);
  };
  function handleAddLinkedin() {
    const LinkedinElement = document.getElementById("linkedin");
    const addLinkedinCard = document.getElementById("addLinkedinCard");
    if (LinkedinElement) {
      LinkedinElement.style.display = "flex";
    }
    if (addLinkedinCard) {
      addLinkedinCard.style.display = "none";
    }
    setCountLinkd(countLinkd - 1);
  }

  const [countLine, setCountLine] = useState(0);
  const handleShowLineCV = () => {
    const lineCV = document.getElementById("lineCV");
    const iconCheck = document.getElementById("iconCheck");
    if (lineCV && iconCheck) {
      lineCV.style.display = "none";
      iconCheck.style.color = "green";
      setCountLine(countLine + 1);
    }
    if (lineCV && iconCheck && countLine === 1) {
      lineCV.style.display = "flex";
      setCountLine(countLine - 1);
      iconCheck.style.color = "#6e6e6e";
    }
  };

  const [countGit, setCountGit] = useState(0);
  const handleDeleteGit = () => {
    const GithubElement = document.getElementById("github");
    const addGithubCard = document.getElementById("addGithubCard");
    if (GithubElement) {
      GithubElement.style.display = "none";
      about.github = "";
    }
    if (addGithubCard) {
      addGithubCard.style.display = "flex";
    }
    setCountGit(countGit + 1);
  };
  function handleAddGit() {
    const GithubElement = document.getElementById("github");
    const addGithubCard = document.getElementById("addGithubCard");
    if (GithubElement) {
      GithubElement.style.display = "flex";
    }
    if (addGithubCard) {
      addGithubCard.style.display = "none";
    }
    setCountGit(countGit - 1);
  }

  const customization: Options = {
    method: "save",
    page: {
      format: "A4",
      orientation: "portrait",
    },
    canvas: {
      mimeType: "image/png",
      qualityRatio: 1,
    },
  };

  const handleDownload = async () => {
    const element = pdfRef.current;
    if (!element) return;

    try {
      const dataUrl = await toPng(element, {
        quality: 1,
        cacheBust: true,
        pixelRatio: 2,
      });

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: [element.offsetWidth, element.offsetHeight],
      });

      pdf.addImage(
        dataUrl,
        "PNG",
        0,
        0,
        element.offsetWidth,
        element.offsetHeight
      );
      pdf.save("curriculo.pdf");
    } catch (error) {
      console.error("Erro ao gerar PDF:", error);
    }
  };

  const [selectedTemplate, setSelectedTemplate] = useState<"default" | "two">(
    "default"
  );

  const pdfRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <main className="flex max-md:flex-col h-screen w-screen max-md:block max-md:overflow-y-scroll max-md:overflow-hidden">
        {handleShowModal()}
        <section
          id="main"
          className="flex bg-gray-100 flex-col w-full max-h-[100vh] pt-50 justify-center items-center overflow-y-scroll max-md:max-w-full overflow-fidden"
        >
          <div
            id="about"
            className="bg-white pt-5 flex flex-col w-9/10 h-auto justify-center items-center mb-2 shadow-md mt-290"
          >
            <InputComponent
              onChange={handleChange}
              type="text"
              name="about"
              placeholder="About me:"
              value={about.about}
            />
            <InputComponent
              onChange={handleChange}
              type="text"
              name="name"
              placeholder="Enter your name"
              value={about.name}
            />
            <InputComponent
              onChange={handleChange}
              type="text"
              name="adress"
              placeholder="Enter your city"
              value={about.adress}
            />
            <div className="flex w-9/10 h-12 mb-5 gap-5">
              <InputComponent
                onChange={handleChange}
                type="text"
                name="email"
                placeholder="Enter your E-mail"
                value={about.email}
              />
              <InputComponent
                onChange={handleChange}
                type="text"
                name="telephone"
                placeholder="Enter your telephone number"
                value={about.telephone}
              />
            </div>
            <div>
              <CiCirclePlus
                onClick={handleAddLinkedin}
                id="addLinkedinCard"
                size={30}
                color="gray"
                style={{ display: "none", marginBottom: "10px" }}
              />
            </div>
            <div id="linkedin" className="flex w-9/10 h-12 mb-5">
              <InputComponent
                onChange={handleChange}
                type="text"
                name="linkedin"
                placeholder="Enter your Linkedin"
                value={about.linkedin}
              />
              <FaTrashAlt
                id="deleteIcon"
                onClick={handleDeleteLinkd}
                style={{ position: "relative", right: "40px", top: "13px" }}
                size={25}
                color="gray"
              />
            </div>
            <div>
              <CiCirclePlus
                onClick={handleAddGit}
                id="addGithubCard"
                size={30}
                color="gray"
                style={{ display: "none", marginBottom: "10px" }}
              />
            </div>
            <div id="github" className="flex w-9/10 h-12 mb-5">
              <InputComponent
                onChange={handleChange}
                type="text"
                name="github"
                placeholder="Enter your Github"
                value={about.github}
              />
              <FaTrashAlt
                onClick={handleDeleteGit}
                style={{ position: "relative", right: "40px", top: "13px" }}
                size={25}
                color="gray"
              />
            </div>
          </div>
          <div
            id="objective"
            className="flex flex-col bg-white shadow-md pt-5 w-9/10 h-auto justify-center items-center mt-10 mb-10  flex-grow placeholder:text-gray-400 text-gray-500"
          >
            <div className="flex justify-between">
              <TbDeviceImacPlus
                size={30}
                color="gray"
                className="relative right-60 mb-5 max-md:hidden"
              />
              <FaRegEyeSlash
                id="eyeIcon2"
                onClick={hiddenClassObj}
                size={30}
                color="black"
                className="relative left-60 max-md:hidden"
              />
            </div>
            <InputComponent
              id="inputObjective"
              onChange={handleChange}
              type="text"
              name="objective"
              placeholder="Say more about your objective"
              value={about.objective}
            />
            <div className="w-9/10 h-12 flex mb-5 gap-5">
              <InputComponent
                onChange={handleChange}
                type="text"
                name="experience"
                placeholder="Your Experience"
                value={about.experience}
              />
              <InputComponent
                onChange={handleChange}
                type="text"
                name="experienceDate"
                placeholder="Date"
                value={about.experienceDate}
              />
            </div>
            <div className="flex w-9/10 h-auto mb-5">
              <textarea
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    const textoAtual = (e.target as HTMLTextAreaElement).value;
                    (e.target as HTMLTextAreaElement).value = textoAtual + "\n";
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
            <div className="w-9/10 h-12 flex mb-5 gap-5">
              <InputComponent
                onChange={handleChange}
                type="text"
                name="experience2"
                placeholder="Your Experience"
                value={about.experience2}
              />
              <InputComponent
                onChange={handleChange}
                type="text"
                name="experienceDate2"
                placeholder="Date"
                value={about.experienceDate2}
              />
            </div>
            <div className="flex w-9/10 h-auto mb-5">
              <textarea
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    const textoAtual = (e.target as HTMLTextAreaElement).value;
                    (e.target as HTMLTextAreaElement).value = textoAtual + "\n";
                    const textarea = e.target as HTMLTextAreaElement;
                    textarea.style.height = `${textarea.scrollHeight}px`;
                  }
                }}
                onChange={handleChange}
                defaultValue={""}
                className="block w-10/10 border mb-5 pb-5 pt-3 pl-5 rounded-md overflow-hidden outline-0 border-gray-300 placeholder:text-gray-400 text-gray-500"
                name="experienceDescription2"
                id="txtArea"
              />
            </div>
          </div>
          <div
            id="education"
            className="flex bg-white flex-col shadow-md border-gray-400 pt-5 w-9/10 h-auto justify-center items-center mt-10 mb-20 flex-grow placeholder:text-gray-400 text-gray-500"
          >
            <div className="flex justify-between mb-5">
              <MdOutlineLibraryBooks
                size={30}
                color="gray"
                className="relative right-60 max-md:hidden"
              />
              <FaRegEyeSlash
                id="eyeIcon"
                onClick={hiddenClassEdu}
                size={30}
                color="black"
                className="relative left-60 max-md:hidden"
              />
            </div>
            <InputComponent
              id="inputEducation"
              onChange={handleChange}
              type="text"
              name="education"
              placeholder="Your Education"
              value={about.education}
            />
            <textarea
              id="inputSkills"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  const textoAtual = (e.target as HTMLTextAreaElement).value;
                  (e.target as HTMLTextAreaElement).value = textoAtual + "\n";
                  const textarea = e.target as HTMLTextAreaElement;
                  textarea.style.height = `${textarea.scrollHeight}px`;
                }
              }}
              onChange={handleChange}
              name="skills"
              placeholder="Your skills"
              className="w-9/10 h-12 border-2 mb-5 pl-5 rounded-md outline-0 border-gray-300 placeholder:text-gray-400 text-gray-500"
            ></textarea>
            <InputComponent
              id="inputLanguages"
              onChange={handleChange}
              type="text"
              name="languages"
              placeholder="Your languages"
              value={about.languages}
            />
            <InputComponent
              id="inputProjects"
              onChange={handleChange}
              type="text"
              name="projects"
              placeholder="Your projects"
              value={about.projects}
            />
          </div>
          <div className="md:hidden pb-10 flex itens-center justify-center">
            <h1 className="text-2xl font-bold">Customization</h1>
          </div>
          <div className="mb-[100px]">
            <ColorPickerWrapper onChangeComplete={handleColorPickerChange} />
          </div>
          <div className="flex flex-col items-center mb-[100px]">
            <div className="flex gap-4 mb-4">
              <button
                onClick={() => setSelectedTemplate("default")}
                className={`px-4 py-2 rounded ${
                  selectedTemplate === "default"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200"
                }`}
              >
                Modelo Original
              </button>
              <button
                onClick={() => setSelectedTemplate("two")}
                className={`px-4 py-2 rounded ${
                  selectedTemplate === "two"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200"
                }`}
              >
                Modelo Duas Colunas
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center mb-[100px]"></div>
        </section>
        <div className="w-full justify-center align-center">
          <div className="flex w-10/10 h-[30px] shadow-md">
            <select
              name="fontFamily"
              id="font"
              className="outline-0"
              onChange={handleFontChange}
            >
              {Object.keys(font).map((fontName, index) => (
                <option
                  key={index}
                  style={{ fontFamily: fontName }}
                  value={fontName}
                >
                  {fontName}
                </option>
              ))}
            </select>
            <div className="ml-3 flex">
              <TbTextSize size={25} color="gray" className="mt-1" />
              <input
                onChange={handleFontSizeChange}
                type="text"
                name="fontSize"
                defaultValue={"12px"}
                className="border-b border-gray-300 pl-5 outline-0 mt-1 ml-2 w-3/10 placeholder:text-gray-400 text-gray-500"
              />
            </div>
          </div>
          <AnimatePresence mode="wait">
            <div ref={pdfRef} id="pdfElement">
              {selectedTemplate === "default" ? (
                <motion.div
                  key="template-1"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.4 }}
                >
                  <TemplateMain
                    about={about}
                    textSize={textSize}
                    renderLocation={renderLocation}
                    renderEmail={renderEmail}
                    renderPhone={renderPhone}
                    renderLinkedin={renderLinkedin}
                    renderGithub={renderGithub}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="template-2"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4 }}
                >
                  <TemplateTwo
                    about={about}
                    textSize={textSize}
                    renderLocation={renderLocation}
                    renderEmail={renderEmail}
                    renderPhone={renderPhone}
                    renderLinkedin={renderLinkedin}
                    renderGithub={renderGithub}
                  />
                </motion.div>
              )}
            </div>
          </AnimatePresence>

          <section className="flex mt-10 h-12 w-full max-md:flex max-md:justify-center md:justify-center max-md:items-center">
            <button
              onClick={handleDownload}
              className="w-[100px] h-[40px] border-3 border-green-400 rounded-md float-end max-md:mr-5 mr-5 max-md:ml-5 font-bold text-green-400 cursor-pointer"
            >
              Download
            </button>
            <button className="w-[100px] h-[40px] border-3 border-blue-400 rounded-md float-end mr-5 font-bold text-blue-500 cursor-pointer">
              Preview
            </button>
            <button
              onClick={handleClear}
              className="w-[100px] h-[40px] border-3 border-red-400 rounded-md float-end mr-5 font-bold text-red-400 cursor-pointer"
            >
              Clear
            </button>
            <button
              onClick={handleSave}
              className="w-[100px] h-[40px] border-3 border-green-400 rounded-md float-end mr-5 font-bold text-green-400 cursor-pointer"
            >
              Save
            </button>
          </section>
          <div className="fixed md:top-[110px] right-0 md:h-[100vh] max-md:h-[150px] max-md:mt-[50px] md:w-[10rem] max-md:w-full max-md:relative">
            <div className="flex max:-md:justify-center md:flex-col items-center h-4/10 gap-5">
              <div className="flex max-md:mr-3 flex-col items-center"></div>
              <div className="flex flex-col items-center">
                <button
                  onClick={handleShowLineCV}
                  className="h-7 w-7 border-2 border-[#aaaaaa] rounded-md flex justify-center items-center"
                >
                  <FaCheck id="iconCheck" size={20} color="#6e6e6e" />
                </button>
                <p className="text-1xl font-bold text-[#aaaaaa]">
                  Mostrar Linha
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}