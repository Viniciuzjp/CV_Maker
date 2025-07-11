export interface AboutInfo {
  name: string;
  adress: string;
  email: string;
  telephone: string;
  linkedin: string;
  github: string;
  objective: string;
  experience: string;
  experienceDate: string;
  experienceDescription: string;
  experience2: string;
  experienceDate2: string;
  experienceDescription2: string;
  education: string;
  skills: string;
  languages: string;
  projects: string;
  background: string;
  colorText: string;
  fontFamily: string;
}

export interface TextSize {
  fontSize: string;
}
export interface TemplateProps {
  about: AboutInfo;
  textSize: TextSize;
  renderLocation: () => React.ReactNode;
  renderEmail: () => React.ReactNode;
  renderPhone: () => React.ReactNode;
  renderLinkedin: () => React.ReactNode;
  renderGithub: () => React.ReactNode;
}
