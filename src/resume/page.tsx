"use client";
import { useState } from "react";
import { FaRegEyeSlash, FaTrashAlt } from "react-icons/fa";

import { MdOutlineLibraryBooks } from "react-icons/md";

import { TbDeviceImacPlus } from "react-icons/tb";

import { CiCirclePlus } from "react-icons/ci";
import { RiFileCheckFill } from "react-icons/ri";

import ColorPickerWrapper from "@/components/ColorPickerWrapper/ColorPickerWrapper";
import { ColorResult } from "react-color";
import InputComponent from "@/components/input/input";

import { Button, Flex, Text } from "@av-digital/components";
import { Preview } from "./preview/preview";
import { useResume } from "@/app/hooks/useResumeContext";
import { useResumeInputs } from "./preview/objects/inputs";

export default function Resume() {

  const { resume, UpdateResume, modalSuccess, handleDeleteModal } = useResume()
  const { Inputs, EducationInputs, ExperienceInputs } = useResumeInputs();

  const handleShowModal = () => {
    if (modalSuccess === true) {
      setTimeout(() => {
        handleDeleteModal();
      }, 3000);
      return (
        <div>
          <Flex
            direction="column"
            justify="center"
            align="center"
            gap="xs"
            className="fixed z-50 top-[20%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[200px] w-[300px] max-w-[90vw] px-4 bg-white border-dashed border-2 border-gray-300 rounded-2xl text-center"
          >
            <Text variant="title" size="xl" weight="bold" classname="text-gray-400">Success</Text>
            <RiFileCheckFill size={50} color="#74e839" />
            <Text variant="body" classname="text-gray-500">
              Your Curriculum has been saved successfully
            </Text>
          </Flex>
        </div>
      );
    }
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

  function handleDeleteLinkd() {
    const LinkedinElement = document.getElementById("linkedin");
    const addLinkedinCard = document.getElementById("addLinkedinCard");
    UpdateResume("linkedin", "");
    if (LinkedinElement) {
      LinkedinElement.style.display = "none";
    }
    if (addLinkedinCard) {
      addLinkedinCard.style.display = "flex";
    }
    setCountLinkd(countLinkd + 1);
  }

  const [countGit, setCountGit] = useState(0);

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

  function handleDeleteGit() {
    const GithubElement = document.getElementById("github");
    const addGithubCard = document.getElementById("addGithubCard");
    UpdateResume("github", "");
    if (GithubElement) {
      GithubElement.style.display = "none";
    }
    if (addGithubCard) {
      addGithubCard.style.display = "flex";
    }
    setCountGit(countGit + 1);
  }

  const { selectedTemplate, handleSelectTemplate } = useResume();

  function handleColorPickerChange(color: ColorResult) {
    UpdateResume("background", color.hex);
  }


  return (
    <>
      <main className="flex max-md:flex-col h-screen w-screen max-md:h-auto max-md:min-h-screen overflow-hidden max-md:overflow-visible">
        {handleShowModal()}
        <section
          id="main"
          className="flex bg-gray-100 flex-col w-1/2 min-w-0 px-8 max-md:px-4 max-h-[100vh] pt-10 justify-start items-center overflow-y-scroll max-md:w-full max-md:max-w-full max-md:max-h-none max-md:overflow-visible max-md:pt-6 overflow-fidden"
        >
          <Flex
            direction="column"
            justify="center"
            align="center"
            gap="sm"
            className="bg-white pt-5 pb-5 px-4 w-full h-auto mb-2 mt-10 shadow-md"
          >
            {Inputs.slice(0, 4).map((item) => (
              <InputComponent
                key={item.id}
                onChange={(e) => UpdateResume(e.target.name, e.target.value)}
                type={item.type}
                name={item.name}
                placeholder={item.placeholder}
                value={item.value}
              />
            ))}
            {Inputs.slice(4, 6).map((item) => (
              <div key={item.id} className="w-full">
                <div>
                  <CiCirclePlus
                    id={item.addCardId}
                    onClick={
                      item.name === "linkedin" ? handleAddLinkedin : handleAddGit
                    }
                    size={30}
                    color="gray"
                    style={{ display: "none", marginBottom: "10px" }}
                  />
                </div>
                <div id={item.wrapperId} className="flex items-center gap-2 w-full h-12">
                  <div className="flex-1 min-w-0">
                    <InputComponent
                      onChange={(e) => UpdateResume(e.target.name, e.target.value)}
                      type={item.type}
                      name={item.name}
                      placeholder={item.placeholder}
                      value={item.value}
                    />
                  </div>
                  <FaTrashAlt
                    onClick={
                      item.name === "linkedin" ? handleDeleteLinkd : handleDeleteGit
                    }
                    className="shrink-0"
                    size={25}
                    color="gray"
                  />
                </div>
              </div>
            ))}
          </Flex>
          <div id="objective" className="w-full">
            <Flex
              direction="column"
              align="center"
              gap="sm"
              className="bg-white w-full mt-10 mb-2 py-8 px-8 shadow-md"
            >
              <Flex justify="between" className="w-full">
                <TbDeviceImacPlus
                  size={30}
                  color="gray"
                  className="max-md:hidden"
                />
                <FaRegEyeSlash
                  id="eyeIcon2"
                  onClick={hiddenClassObj}
                  size={30}
                  color="black"
                  className="max-md:hidden"
                />
              </Flex>
              <InputComponent
                id="inputObjective"
                onChange={(e) => UpdateResume(e.target.name, e.target.value)}
                type={ExperienceInputs[0].kind}
                name={ExperienceInputs[0].name}
                placeholder={ExperienceInputs[0].placeholder}
                value={ExperienceInputs[0].value}
              />
              <Flex gap="lg" className="w-full h-12 max-md:flex-col max-md:h-auto max-md:gap-2">
                {ExperienceInputs.slice(1, 3).map((item) => (
                  <div key={item.id} className="flex-1 min-w-0 max-md:w-full">
                    <InputComponent
                      onChange={(e) => UpdateResume(e.target.name, e.target.value)}
                      type={item.kind}
                      name={item.name}
                      placeholder={item.placeholder}
                      value={item.value}
                    />
                  </div>
                ))}
              </Flex>
              <textarea
                onChange={(e) => UpdateResume(e.target.name, e.target.value)}
                value={ExperienceInputs[3].value}
                className="block w-full h-24 border pt-3 pl-5 rounded-md overflow-hidden outline-0 border-gray-300 placeholder:text-gray-400 text-gray-500"
                name={ExperienceInputs[3].name}
                id={ExperienceInputs[3].elId}
              />
              <Flex gap="lg" className="w-full h-12 max-md:flex-col max-md:h-auto max-md:gap-2">
                {ExperienceInputs.slice(4, 6).map((item) => (
                  <div key={item.id} className="flex-1 min-w-0 max-md:w-full">
                    <InputComponent
                      onChange={(e) => UpdateResume(e.target.name, e.target.value)}
                      type={item.kind}
                      name={item.name}
                      placeholder={item.placeholder}
                      value={item.value}
                    />
                  </div>
                ))}
              </Flex>
              <textarea
                onChange={(e) => UpdateResume(e.target.name, e.target.value)}
                value={ExperienceInputs[6].value}
                className="block w-full h-24 border pt-3 pl-5 rounded-md overflow-hidden outline-0 border-gray-300 placeholder:text-gray-400 text-gray-500"
                name={ExperienceInputs[6].name}
                id={ExperienceInputs[6].elId}
              />
            </Flex>
          </div>
          <div id="education" className="w-full">
            <Flex
              direction="column"
              align="center"
              gap="sm"
              className="bg-white w-full mt-10 mb-2 py-8 px-8 shadow-md"
            >
              <Flex justify="between" className="w-full">
                <MdOutlineLibraryBooks
                  size={30}
                  color="gray"
                  className="max-md:hidden"
                />
                <FaRegEyeSlash
                  id="eyeIcon"
                  onClick={hiddenClassEdu}
                  size={30}
                  color="black"
                  className="max-md:hidden"
                />
              </Flex>
              {EducationInputs.map((item) =>
                item.kind === "textarea" ? (
                  <textarea
                    key={item.id}
                    id={item.elId}
                    onChange={(e) => UpdateResume(e.target.name, e.target.value)}
                    value={item.value}
                    name={item.name}
                    placeholder={item.placeholder}
                    className="w-full h-24 border pt-2 pl-5 rounded-md outline-0 border-gray-300 placeholder:text-gray-400 text-gray-500"
                  ></textarea>
                ) : (
                  <InputComponent
                    key={item.id}
                    id={item.elId}
                    onChange={(e) => UpdateResume(e.target.name, e.target.value)}
                    type={item.kind}
                    name={item.name}
                    placeholder={item.placeholder}
                    value={item.value}
                  />
                )
              )}
            </Flex>
          </div>
          <Flex justify="center" align="center" className="md:hidden pb-10">
            <Text variant="title" size="xl" weight="bold">Customization</Text>
          </Flex>
          <div className="mb-[100px]">
            <ColorPickerWrapper
              color={resume.background}
              onChangeComplete={handleColorPickerChange}
            />
          </div>
          <Flex direction="column" align="center" className="mb-[100px]">
            <Flex gap="md" className="mb-4">
              <Button
                onClick={() => handleSelectTemplate("default")}
                variant={selectedTemplate === "default" ? "primary" : "secondary"}
                className="rounded"
              >
                Modelo Original
              </Button>
              <Button
                onClick={() => handleSelectTemplate("two")}
                variant={selectedTemplate === "two" ? "primary" : "secondary"}
                className="rounded"
              >
                Modelo Duas Colunas
              </Button>
            </Flex>
          </Flex>
        </section>
        <Preview/>
      </main>
    </>
  );
}