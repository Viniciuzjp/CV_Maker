import { TemplateProps } from "./interface";
import React from "react";

const TemplateMain: React.FC<TemplateProps> = ({
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
      className="flex relative top-7 left-1/2 transform -translate-x-1/2 flex-col flex-wrap w-[33.59rem] h-[42.7rem] shadow-lg items-center"
    >
      <div
        id="lineCV"
        style={{ backgroundColor: about.background }}
        className="h-[42rem] w-[8px] mt-1"
      ></div>
      <div className="h-10/20 mt-3 w-9/10 items-center">
        <p style={{ color: about.colorText }} className="text-1xl font-bold">
          {about.name}
        </p>
        <div className="flex justify-between flex-wrap">
          <div className="flex items-center">
            {renderLocation()}
            <p className="ml-1 text-[0.7rem]">{about.adress}</p>
          </div>
          <div className="flex">
            {renderEmail()}
            <p className="ml-1 text-[0.7rem]">{about.email}</p>
          </div>
          <div className="flex items-center">
            {renderPhone()}
            <p className="ml-1 text-[0.7rem]">{about.telephone}</p>
          </div>
          <div className="flex items-center">
            {renderLinkedin()}
            <p className="ml-1 text-[0.7rem]">{about.linkedin}</p>
          </div>
          <div className="flex items-center">
            {renderGithub()}
            <p className="ml-1 text-[0.7rem]">{about.github}</p>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div id="Topic" className="flex items-center">
            <div
              style={{ backgroundColor: about.background }}
              className="mt-3 h-[1rem] w-[5px] mr-1"
            ></div>
            <p
              style={{ color: about.colorText }}
              className="mt-3 text-[0.7rem] font-bold"
            >
              Objective
            </p>
          </div>
          <p className="text-[0.7rem]">{about.objective}</p>
          <div id="Topic" className="flex items-center">
            <div
              style={{ backgroundColor: about.background }}
              className="mt-3 h-[1rem] w-[5px] mr-1"
            ></div>
            <p
              style={{ color: about.colorText }}
              className="mt-3 text-[0.7rem] font-bold"
            >
              Experience
            </p>
          </div>
          <div className="flex-wrap">
            <div className="flex justify-between">
              <p className="text-[0.7rem]">{about.experience}</p>
              <p className="text-[0.7rem]">{about.experienceDate}</p>
            </div>
          </div>
          <div className="flex flex-col ml-3 w-auto">
            <ul>
              {about.experienceDescription.split("\n").map((item, index) => (
                <li key={index} className="text-[0.7rem] flex items-center">
                  <span id="Topic" className="mr-1">
                    •
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-wrap">
            <div className="flex justify-between">
              <p className="text-[0.7rem]">{about.experience2}</p>
              <p className="text-[0.7rem]">{about.experienceDate2}</p>
            </div>
          </div>
          <div className="flex flex-col ml-3 w-auto">
            <ul>
              {about.experienceDescription2.split("\n").map((item, index) => (
                <li key={index} className="text-[0.7rem] flex items-center">
                  <span id="Topic" className="mr-1">
                    •
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div id="containerEdu">
            <div id="Topic" className="flex items-center">
              <div
                style={{ backgroundColor: about.background }}
                className="mt-3 h-[1rem] w-[5px] mr-1"
              ></div>
              <p
                style={{ color: about.colorText }}
                className="mt-3 text-[0.7rem] font-bold"
              >
                Education
              </p>
            </div>
            <p className="text-[0.7rem]">{about.education}</p>
            <div id="Topic" className="flex items-center">
              <div
                style={{ backgroundColor: about.background }}
                className="mt-3 h-[1rem] w-[5px] mr-1"
              ></div>
              <p
                style={{ color: about.colorText }}
                className="mt-3 text-[0.7rem] font-bold"
              >
                Skills
              </p>
            </div>
            <div className="flex flex-col ml-3 w-auto">
              <ul>
                {about.skills.split("\n").map((item, index) => (
                  <li key={index} className="text-[0.7rem] flex items-center">
                    <span id="Topic" className="mr-1">
                      •
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div id="Topic" className="flex items-center">
              <div
                style={{ backgroundColor: about.background }}
                className="mt-3 h-[1rem] w-[5px] mr-1"
              ></div>
              <p
                style={{ color: about.colorText }}
                className="mt-3 text-[0.7rem] font-bold"
              >
                Languages
              </p>
            </div>
            <p className="text-[0.7rem]">{about.languages}</p>
            <div id="Topic" className="flex items-center">
              <div
                style={{ backgroundColor: about.background }}
                className="mt-3 h-[1rem] w-[5px] mr-1"
              ></div>
              <p
                style={{ color: about.colorText }}
                className="mt-3 text-[0.7rem] font-bold"
              >
                Projects
              </p>
              <div></div>
            </div>
            <p className="text-[0.7rem]">{about.projects}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TemplateMain;
