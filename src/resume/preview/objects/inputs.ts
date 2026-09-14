import { useResume, ResumeField } from "@/app/hooks/useResumeContext";

type FormField = {
  id: number;
  name: ResumeField;
  value: string;
  type?: string;
  kind?: string;
  placeholder?: string;
  elId?: string;
  wrapperId?: string;
  addCardId?: string;
};

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
    },
    {
      id: 6,
      type: "text",
      name: "github",
      placeholder: "Enter your Github",
      value: resume.github,
      wrapperId: "github",
      addCardId: "addGithubCard",
    },
  ] satisfies FormField[];

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
  ] satisfies FormField[];

  const ExperienceInputs = [
    {
      id: 1,
      kind: "text",
      name: "objective",
      placeholder: "Say more about your objective",
      value: resume.objective,
    },
  ] satisfies FormField[];

  return { Inputs, EducationInputs, ExperienceInputs };
}