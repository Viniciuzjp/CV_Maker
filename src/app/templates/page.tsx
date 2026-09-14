"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment";
import { Card, Flex, Spinner, Text } from "@av-digital/components";
import { API_BASE_URL } from "@/app/config";

export default function Curriculums() {
  interface Curriculum {
    _id: string;
    name: string;
    about: string;
    adress: string;
    email: string;
    telephone: string;
    linkedin: string;
    github: string;
    objective: string;
    experience: string;
    experienceDate: string;
    experienceDescription: string;
    education: string;
    skills: string;
    languages: string;
    projects: string;
    color1: string;
    colorText: string;
    fontFamily: string;
    data: string;
  }
  const [curriculums, setCurriculums] = useState<Curriculum[]>([]);

  useEffect(() => {
    axios
      .get(API_BASE_URL)
      .then((response) => setCurriculums(response.data))
      .catch((error) => console.log(error));
  }, []);

  const [mensagem, setMensagem] = useState("");
  const mensagens = [
    "Estamos preparando a página para você...",
    "Aguarde um pouco mais, estamos quase lá...",
    "Carregando dados...",
    "Processando solicitação...",
    "Por favor, aguarde...",
  ];

  useEffect(() => {
    const intervalo = setInterval(() => {
      const indice = Math.floor(Math.random() * mensagens.length);
      setMensagem(mensagens[indice]);
    }, 4000);

    return () => clearInterval(intervalo);
  }, []);
  return (
    <>
      <Flex wrap justify="center" align="center" className="max-h-screen overflow-y-scroll">
        <div className="w-[90%] mx-auto mt-10">
          <Text variant="title" size="xl" weight="bold">Currículos Recentes</Text>
          <Text variant="caption" classname="text-gray-400">veja os curriculos mais recentes</Text>
        </div>
        <Flex wrap gap="xl" className="w-[90%] mx-auto mt-10">
          {curriculums.length > 0 ? (
            curriculums.map((curriculum) => (
              <Flex key={curriculum._id}>
                <Flex direction="column" gap="sm">
                  <Card spacing="md" className="flex w-[300px] max-w-full h-[270px] bg-white rounded-lg justify-center items-center">
                    <div
                      style={{ fontFamily: curriculum.fontFamily }}
                      className="flex hover:w-[220px] hover:h-[270px] transition-ease-in duration-300 w-[205px] h-[250px]  shadow-2xl p-1 text-[0.5rem]"
                    >
                      <div
                        style={{ backgroundColor: "black" }}
                        className="h-9/10 w-[1px] mt-2"
                      ></div>
                      <div className="flex flex-col p-2 mt-2 flex-wrap">
                        <h1>{curriculum.name}</h1>
                        <p className="text-[0.3rem]">{curriculum.adress}</p>
                        <p className="text-[0.3rem]">{curriculum.email}</p>
                        <p className="text-[0.3rem]">{curriculum.telephone}</p>
                        <p className="text-[0.3rem]">{curriculum.linkedin}</p>
                        <p className="text-[0.3rem]">{curriculum.github}</p>
                        <div className="flex flex-col">
                          <div className="flex">
                            <div
                              style={{ backgroundColor: "black" }}
                              className="mt-3 h-[0.4rem] w-[2px] mr-1"
                            ></div>
                            <p
                              style={{ color: curriculum.colorText }}
                              className="mt-3 text-[0.4rem] font-bold"
                            >
                              Objective
                            </p>
                          </div>
                          <p className="mb-2 text-[0.3rem]">
                            {curriculum.objective}
                          </p>
                          <div className="flex">
                            <div
                              style={{ backgroundColor: "black" }}
                              className="mt-3 h-[0.4rem] w-[2px] mr-1"
                            ></div>
                            <p
                              style={{ color: curriculum.colorText }}
                              className="mt-3 text-[0.4rem] font-bold"
                            >
                              Experience
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <p className="mb-2 text-[0.3rem]">
                              {curriculum.experience}
                            </p>
                            <p className="mb-2 text-[0.3rem]">
                              {curriculum.experienceDate}
                            </p>
                          </div>
                          <div className="flex">
                            <span className="mr-1 text-[0.3rem]">•</span>
                            <p className="mb-2 text-[0.3rem]">
                              {curriculum.experienceDescription}
                            </p>
                          </div>
                        </div>
                        <p className="text-[0.3rem]">{curriculum.education}</p>
                        <p className="text-[0.3rem]">{curriculum.skills}</p>
                        <p className="text-[0.3rem]">{curriculum.languages}</p>
                        <p className="text-[0.3rem]">{curriculum.projects}</p>
                        <p className="text-[0.3rem]">{curriculum.color1}</p>
                      </div>
                    </div>
                  </Card>
                  <div>
                    <h1 className="font-bold text-[#353535]">
                      {curriculum.name}
                    </h1>
                    <Text variant="caption" classname="text-gray-400 text-[15px]">
                      {moment(curriculum.data).format("LLL")}
                    </Text>
                  </div>
                </Flex>
              </Flex>
            ))
          ) : (
            <Flex justify="center" align="center" className="h-screen">
              <Flex direction="column" align="center">
                <Spinner variant="primary" />
                <Text variant="subtitle" size="lg" weight="bold" classname="mt-4 text-gray-600">
                  {mensagem}
                </Text>
              </Flex>
            </Flex>
          )}
        </Flex>
      </Flex>
    </>
  );
}
