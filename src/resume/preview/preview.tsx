"use client";
import { useResume, TemplateId } from "@/app/hooks/useResumeContext";
import TemplateTwoColumns from "@/components/Templates/TemplateColum/curriculum";
import TemplateOneColumn from "@/components/Templates/TemplateMain/curriculum";
import TemplateMinimal from "@/components/Templates/TemplateMinimal/curriculum";
import TemplateHeaderBand from "@/components/Templates/TemplateHeaderBand/curriculum";
import TemplateSidebarRight from "@/components/Templates/TemplateSidebarRight/curriculum";
import { Button, Flex } from "@av-digital/components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { TbTextSize } from "react-icons/tb";
import generatePDF, { Resolution } from "react-to-pdf";

const templateComponents: Record<TemplateId, React.ComponentType> = {
  default: TemplateOneColumn,
  two: TemplateTwoColumns,
  minimal: TemplateMinimal,
  band: TemplateHeaderBand,
  "sidebar-right": TemplateSidebarRight,
};

export const Preview = () => {
  const {
    handleClear,
    handleFontChange,
    handleFontSizeChange,
    handleSave,
    selectedTemplate,
  } = useResume();

  const [font] = useState({
    Roboto: "Roboto",
    Poppins: "Poppins",
    Regular: "Regular",
    Arial: "Arial",
    Helvetica: "Helvetica",
    Verdana: "Verdana",
    Tahoma: "Tahoma",
    Georgia: "Georgia",
    Times: "Times",
    Courier: "Courier",
    Impact: "Impact",
    Comic: "Comic",
    Lucida: "Lucida",
    sansSerif: "sansSerif",
    monospace: "monospace",
    cursive: "cursive",
    fantasy: "fantasy",
    serif: "serif",
    systemUi: "systemUi",
    timesNewRoman: "timesNewRoman",
    georgia: "georgia",
    comicSans: "comicSans",
    impact: "impact",
    lucidaConsole: "lucidaConsole",
    lucidaSans: "lucidaSans",
    lucidaSansTypewriter: "lucidaSansTypewriter",
    lucidaTypewriter: "lucidaTypewriter",
    lucidaHandwriting: "lucidaHandwriting",
    lucidaCalligraphy: "lucidaCalligraphy",
  });

  const ActiveTemplate = templateComponents[selectedTemplate];

  const handleDownload = () => {
    const getTargetElement = () => document.getElementById("cv");
    generatePDF(getTargetElement, {
      filename: "curriculo.pdf",
      resolution: Resolution.HIGH,
      page: { format: "a4", orientation: "portrait" },
    });
  };

  const [countLine, setCountLine] = useState(0);
  const handleShowLineCV = () => {
    const lineCV = document.getElementById("lineCV");
    const iconCheck = document.getElementById("iconCheck");
    if (lineCV && iconCheck) {
      lineCV.style.display = "none";
      iconCheck.style.color = "green";
      setCountLine(countLine + 1);
    }
    if (lineCV && iconCheck && countLine === 1) {
      lineCV.style.display = "flex";
      setCountLine(countLine - 1);
      iconCheck.style.color = "#6e6e6e";
    }
  };

  return (
    <>
      <div className="w-1/2 min-w-0 px-10 max-md:w-full ">
        <Flex className="w-full h-[30px] max-md:h-auto max-md:flex-col max-md:items-stretch max-md:gap-2 max-md:py-3 shadow-md">
          <select
            name="fontFamily"
            id="font"
            className="outline-0 max-md:w-full max-md:py-1"
            onChange={(e) => handleFontChange(e.target.value)}
          >
            {Object.keys(font).map((fontName, index) => (
              <option
                key={index}
                style={{ fontFamily: fontName }}
                value={fontName}
              >
                {fontName}
              </option>
            ))}
          </select>
          <Flex className="ml-3 max-md:ml-0">
            <TbTextSize size={25} color="gray" className="mt-1 max-md:mt-0" />
            <input
              onChange={(e) => handleFontSizeChange(e.target.value)}
              type="text"
              name="fontSize"
              defaultValue={"12px"}
              className="border-b border-gray-300 pl-5 outline-0 mt-1 ml-2 w-3/10 max-md:mt-0 max-md:ml-2 max-md:w-full placeholder:text-gray-400 text-gray-500"
            />
          </Flex>
        </Flex>
        <Flex align="center" justify="center" className="w-full py-4">
        <AnimatePresence mode="wait">
          <div id="pdfElement" className="w-full">
            <motion.div
              key={selectedTemplate}
              className="w-full"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
            >
              <ActiveTemplate />
            </motion.div>
          </div>
        </AnimatePresence>
        </Flex>

        <Flex justify="center" align="center" gap="sm" className="mt-10 h-auto w-full max-md:px-4 max-md:pb-4">
          <Button onClick={handleDownload} variant="primary">
            Download
          </Button>
          <Button onClick={handleSave} variant="primary">
            Save
          </Button>
          <Button onClick={handleClear} variant="secondary">
            Clear
          </Button>
        </Flex>
        <div className="fixed md:top-[110px] right-0 md:h-[100vh] max-md:h-auto max-md:py-4 md:w-[10rem] max-md:w-full max-md:relative">
          <div className="flex max-md:justify-center md:flex-col items-center h-4/10 gap-5">
            <Flex direction="column" align="center">
              <button
                onClick={handleShowLineCV}
                className="h-7 w-7 border-2 border-[#aaaaaa] rounded-md flex justify-center items-center"
              >
                <FaCheck id="iconCheck" size={20} color="#6e6e6e" />
              </button>
            </Flex>
          </div>
        </div>
      </div>
    </>
  );
};
