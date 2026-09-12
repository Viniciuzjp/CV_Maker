import Resume from "@/resume/page";
import { ResumeProvider } from "@/app/hooks/useResumeContext";


export default function Home() {
  return (
    <ResumeProvider>
      <Resume />
    </ResumeProvider>
  );
}
