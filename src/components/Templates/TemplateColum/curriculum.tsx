import React from "react";
import { TemplateProps } from "./interface";

const TemplateTwo: React.FC<TemplateProps> = ({
  about,
  textSize,
  renderLocation,
  renderEmail,
  renderPhone,
  renderLinkedin,
  renderGithub,
}) => {
  return (
    <section
      id="cv"
      style={{
        fontFamily: about.fontFamily,
        fontSize: textSize.fontSize,
      }}
      className="flex relative top-7 left-1/2 transform -translate-x-1/2 w-[616px] h-[656px] shadow-lg"
    >
      <aside
        style={{ backgroundColor: about.background }}
        className="w-[35%] p-4 text-white flex flex-col gap-4"
      >
        <div>
          <p className="text-xl font-bold">{about.name}</p>
          <div className="mt-2 space-y-1 text-[0.7rem]">
            <div className="flex items-center">
              {renderLocation()}
              <span className="ml-1">{about.adress}</span>
            </div>
            <div className="flex items-center">
              {renderPhone()}
              <span className="ml-1">{about.telephone}</span>
            </div>
            <div className="flex items-center">
              {renderEmail()}
              <span className="ml-1">{about.email}</span>
            </div>
            <div className="flex items-center">
              {renderLinkedin()}
              <span className="ml-1">{about.linkedin}</span>
            </div>
            <div className="flex items-center">
              {renderGithub()}
              <span className="ml-1">{about.github}</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold mt-4">Skills</h3>
          <ul className="ml-2 mt-1 space-y-1 text-[0.7rem]">
            {about.skills.split("\n").map((item, idx) => (
              <li key={idx} className="flex items-center">
                <span className="mr-1">•</span> {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mt-4">Languages</h3>
          <p className="text-[0.7rem] ml-2 mt-1">{about.languages}</p>
        </div>
      </aside>

      {/* Conteúdo Principal */}
      <main className="w-[65%] p-6 flex flex-col gap-5">
        <section>
          <h2
            className="text-[0.8rem] font-bold mb-1"
            style={{ color: about.colorText }}
          >
            Objective
          </h2>
          <p className="text-[0.7rem]">{about.objective}</p>
        </section>

        <section>
          <h2
            className="text-[0.8rem] font-bold mb-1"
            style={{ color: about.colorText }}
          >
            Experience
          </h2>
          <div className="space-y-2">
            <div>
              <div className="flex justify-between text-[0.7rem]">
                <p>{about.experience}</p>
                <p>{about.experienceDate}</p>
              </div>
              <ul className="ml-4 mt-1 space-y-1 text-[0.7rem]">
                {about.experienceDescription.split("\n").map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="mr-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex justify-between text-[0.7rem]">
                <p>{about.experience2}</p>
                <p>{about.experienceDate2}</p>
              </div>
              <ul className="ml-4 mt-1 space-y-1 text-[0.7rem]">
                {about.experienceDescription2.split("\n").map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="mr-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2
            className="text-[0.8rem] font-bold mb-1"
            style={{ color: about.colorText }}
          >
            Education
          </h2>
          <p className="text-[0.7rem]">{about.education}</p>
        </section>

        <section>
          <h2
            className="text-[0.8rem] font-bold mb-1"
            style={{ color: about.colorText }}
          >
            Projects
          </h2>
          <p className="text-[0.7rem]">{about.projects}</p>
        </section>
      </main>
    </section>
  );
};

export default TemplateTwo;
