import { useResume } from "@/app/hooks/useResumeContext";

export function useResumeInputs() {
  const { resume } = useResume();

  const Inputs = [
    {
      id: 1,
      type: "text",
      name: "name",
      placeholder: "Enter your name",
      value: resume.name,
    },
    {
      id: 2,
      type: "text",
      name: "address",
      placeholder: "Enter your city",
      value: resume.address,
    },
    {
      id: 3,
      type: "text",
      name: "email",
      placeholder: "Enter your E-mail",
      value: resume.email,
    },
    {
      id: 4,
      type: "text",
      name: "telephone",
      placeholder: "Enter your telephone number",
      value: resume.telephone,
    },
    {
      id: 5,
      type: "text",
      name: "linkedin",
      placeholder: "Enter your Linkedin",
      value: resume.linkedin,
      wrapperId: "linkedin",
      addCardId: "addLinkedinCard",
      // onAdd: handleAddLinkedin,
      onDelete: "",
    },
    {
      id: 6,
      type: "text",
      name: "github",
      placeholder: "Enter your Github",
      value: resume.github,
      wrapperId: "github",
      addCardId: "addGithubCard",
      // onAdd: handleAddGit,
      onDelete: "",
    },
  ];

  const EducationInputs = [
    {
      id: 1,
      kind: "text",
      elId: "inputEducation",
      name: "education",
      placeholder: "Your Education",
      value: resume.education,
    },
    {
      id: 2,
      kind: "textarea",
      elId: "inputSkills",
      name: "skills",
      placeholder: "Your skills",
      value: resume.skills,
    },
    {
      id: 3,
      kind: "text",
      elId: "inputLanguages",
      name: "languages",
      placeholder: "Your languages",
      value: resume.languages,
    },
    {
      id: 4,
      kind: "text",
      elId: "inputProjects",
      name: "projects",
      placeholder: "Your projects",
      value: resume.projects,
    },
  ];

  const ExperienceInputs = [
    {
      id: 1,
      kind: "text",
      name: "objective",
      placeholder: "Say more about your objective",
      value: resume.objective,
    },
    {
      id: 2,
      kind: "text",
      name: "experience",
      placeholder: "Your Experience",
      value: resume.experience,
    },
    {
      id: 3,
      kind: "text",
      name: "experienceDate",
      placeholder: "Date",
      value: resume.experienceDate,
    },
    {
      id: 4,
      kind: "textarea",
      elId: "txtAreaExperience",
      name: "experienceDescription",
      value: resume.experienceDescription,
    },
    {
      id: 5,
      kind: "text",
      name: "experience2",
      placeholder: "Your Experience",
      value: resume.experience2,
    },
    {
      id: 6,
      kind: "text",
      name: "experienceDate2",
      placeholder: "Date",
      value: resume.experienceDate2,
    },
    {
      id: 7,
      kind: "textarea",
      elId: "txtAreaExperience2",
      name: "experienceDescription2",
      value: resume.experienceDescription2,
    },
  ];

  return { Inputs, EducationInputs, ExperienceInputs };
}