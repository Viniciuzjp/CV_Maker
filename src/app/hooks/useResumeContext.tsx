"use client";
import { useState, useContext } from "react";
import { createContext } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaLocationDot } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import axios from "axios";

const initialResume = {
  about: "",
  name: "",
  address: "",
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
  fontFamily: "",
  fontSize: "",
};

const clearResume = {
  about: "",
  name: "",
  address: "",
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
  fontFamily: "",
  fontSize: "",
};

type FormContextType = {
  resume: typeof initialResume;
  fontName: string;
  selectedTemplate: string;
  RenderEmail: () => React.ReactNode;
  renderLocation: () => React.ReactNode;
  renderPhone: () => React.ReactNode;
  renderLinkedin: () => React.ReactNode;
  renderGithub: () => React.ReactNode;
  UpdateResume: (name: string, data: string) => void;
  handleClear: () => void;
  handleFontChange: (font: string) => void;
  handleFontSizeChange: (size: string) => void;
  handleSelectTemplate: (template: "default" | "two") => void;
  modalSuccess: boolean;
  handleSave: () => void;
  handleDeleteModal: () => void;
};
type ResumeContextType = {
  children: React.ReactNode;
};
export const ResumeContext = createContext<FormContextType | null>(null);

export function ResumeProvider({ children }: ResumeContextType) {
  const [resume, setResume] = useState(initialResume);
  const [selectedTemplate, setSelectedTemplate] = useState<"default" | "two">(
    "default",
  );
  const [fontName, setFont] = useState("");
  const [modalSuccess, setModalSuccess] = useState(false);

  function UpdateResume(name: string, data: string) {
    setResume((prev) => ({ ...prev, [name]: data }));
  }

  function RenderEmail() {
    if (resume.email) {
      return <HiOutlineMail size={15} color="gray" />;
    }
  }
  function renderLocation() {
    if (resume.address) {
      return <FaLocationDot size={12} color="gray" />;
    }
  }

  function renderPhone() {
    if (resume.telephone) {
      return <BsFillTelephoneFill size={12} color="gray" />;
    }
  }

  function renderLinkedin() {
    if (resume.linkedin) {
      return <FaLinkedin size={12} color="gray" />;
    }
  }

  function renderGithub() {
    if (resume.github) {
      return <FaGithub size={12} color="gray" />;
    }
  }
  function handleClear() {
    setResume(clearResume);
  }

  function handleFontChange(font: string) {
    setResume((prev) => ({
      ...prev,
      fontFamily: font,
    }));
  }

  function handleFontSizeChange(size: string) {
    setResume((prev) => ({
      ...prev,
      fontSize: size,
    }));
  }
  function handleSelectTemplate(template: "default" | "two") {
    setSelectedTemplate(template);
  }

  function handleSave() {
    axios
      .post("http://localhost:3001/curriculum", resume)
      .then(() => setModalSuccess(true))
      .catch((error) => console.log(error));
  }

  function handleDeleteModal() {
    setModalSuccess(false);
  }

  return (
    <ResumeContext.Provider
      value={{
        resume,
        fontName,
        selectedTemplate,
        UpdateResume,
        RenderEmail,
        renderGithub,
        renderLinkedin,
        renderPhone,
        renderLocation,
        handleClear,
        handleFontChange,
        handleFontSizeChange,
        handleSelectTemplate,
        modalSuccess,
        handleSave,
        handleDeleteModal,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
}

export function useResume() {
  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error("useResume must be used within a ResumeProvider");
  }
  return context;
}
