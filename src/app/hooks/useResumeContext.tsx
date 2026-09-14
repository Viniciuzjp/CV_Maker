"use client";
import { useState, useContext, useEffect } from "react";
import { createContext } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaLocationDot } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import axios from "axios";
import { API_BASE_URL } from "@/app/config";

export type ExperienceEntry = {
  id: number;
  title: string;
  date: string;
  description: string;
};

export type ProjectEntry = {
  id: number;
  text: string;
};

const defaultExperiences: ExperienceEntry[] = [
  { id: 1, title: "", date: "", description: "" },
  { id: 2, title: "", date: "", description: "" },
];

const defaultProjects: ProjectEntry[] = [{ id: 1, text: "" }];

const initialResume = {
  about: "",
  name: "",
  address: "",
  email: "",
  telephone: "",
  linkedin: "",
  github: "",
  objective: "",
  experiences: defaultExperiences,
  education: "",
  skills: "",
  languages: "",
  projects: defaultProjects,
  color1: "#87CEEB",
  background: "#dd2020",
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
  experiences: defaultExperiences,
  education: "",
  skills: "",
  languages: "",
  projects: defaultProjects,
  color1: "#87CEEB",
  background: "#b9b9b9",
  colorText: "#000",
  fontFamily: "",
  fontSize: "",
};

export type ResumeField = {
  [K in keyof typeof initialResume]: (typeof initialResume)[K] extends string
    ? K
    : never;
}[keyof typeof initialResume];

export type TemplateId =
  | "default"
  | "two"
  | "minimal"
  | "band"
  | "sidebar-right";

type FormContextType = {
  resume: typeof initialResume;
  fontName: string;
  selectedTemplate: TemplateId;
  RenderEmail: () => React.ReactNode;
  renderLocation: () => React.ReactNode;
  renderPhone: () => React.ReactNode;
  renderLinkedin: () => React.ReactNode;
  renderGithub: () => React.ReactNode;
  UpdateResume: (name: string, data: string) => void;
  handleClear: () => void;
  handleFontChange: (font: string) => void;
  handleFontSizeChange: (size: string) => void;
  handleSelectTemplate: (template: TemplateId) => void;
  modalSuccess: boolean;
  handleSave: () => void;
  handleDeleteModal: () => void;
  addExperience: () => void;
  removeExperience: (id: number) => void;
  updateExperience: (
    id: number,
    field: "title" | "date" | "description",
    value: string,
  ) => void;
  addProject: () => void;
  removeProject: (id: number) => void;
  updateProject: (id: number, value: string) => void;
};
type ResumeContextType = {
  children: React.ReactNode;
};
export const ResumeContext = createContext<FormContextType | null>(null);

export function ResumeProvider({ children }: ResumeContextType) {
  const [resume, setResume] = useState(initialResume);

  const [selectedTemplate, setSelectedTemplate] = useState<TemplateId>(
    "default",
  );
  const [fontName, setFont] = useState("");
  const [modalSuccess, setModalSuccess] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("resume");
      
      if (saved) setResume(JSON.parse(saved));
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("resume", JSON.stringify(resume));
  }, [resume]);

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
  function handleSelectTemplate(template: TemplateId) {
    setSelectedTemplate(template);
  }

  function handleSave() {
    axios
      .post(`${API_BASE_URL}/curriculum`, resume)
      .then(() => setModalSuccess(true))
      .catch((error) => console.log(error));
  }

  function handleDeleteModal() {
    setModalSuccess(false);
  }

  function addExperience() {
    setResume((prev) => ({
      ...prev,
      experiences: [
        ...prev.experiences,
        { id: Date.now(), title: "", date: "", description: "" },
      ],
    }));
  }

  function removeExperience(id: number) {
    setResume((prev) => ({
      ...prev,
      experiences: prev.experiences.filter((item) => item.id !== id),
    }));
  }

  function updateExperience(
    id: number,
    field: "title" | "date" | "description",
    value: string,
  ) {
    setResume((prev) => ({
      ...prev,
      experiences: prev.experiences.map((item) =>
        item.id === id ? { ...item, [field]: value } : item,
      ),
    }));
  }

  function addProject() {
    setResume((prev) => ({
      ...prev,
      projects: [...prev.projects, { id: Date.now(), text: "" }],
    }));
  }

  function removeProject(id: number) {
    setResume((prev) => ({
      ...prev,
      projects: prev.projects.filter((item) => item.id !== id),
    }));
  }

  function updateProject(id: number, value: string) {
    setResume((prev) => ({
      ...prev,
      projects: prev.projects.map((item) =>
        item.id === id ? { ...item, text: value } : item,
      ),
    }));
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
        addExperience,
        removeExperience,
        updateExperience,
        addProject,
        removeProject,
        updateProject,
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
