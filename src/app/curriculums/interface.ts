interface ExperienceEntry {
  id: number;
  title: string;
  date: string;
  description: string;
}

interface ProjectEntry {
  id: number;
  text: string;
}

interface CurriculumTypeProps {
  _id: string;
  name: string;
  about: string;
  address: string;
  email: string;
  telephone: string;
  linkedin: string;
  github: string;
  objective: string;
  experiences: ExperienceEntry[];
  education: string;
  skills: string;
  languages: string;
  projects: ProjectEntry[];
  color1: string;
  background: string;
  colorText: string;
  fontFamily: string;
  fontSize: string;
}
export default CurriculumTypeProps
