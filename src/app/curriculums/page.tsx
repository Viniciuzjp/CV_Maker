"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CurriculumTypeProps from "./interface";
import { Button, Card, Flex, Spinner, Text } from "@av-digital/components";
import { API_BASE_URL } from "@/app/config";

type FetchStatus = "loading" | "success" | "error";

export default function Curriculums() {
  const router = useRouter();
  const [curriculums, setCurriculums] = useState<CurriculumTypeProps[]>([]);
  const [status, setStatus] = useState<FetchStatus>("loading");

  useEffect(() => {
    axios
      .get(API_BASE_URL)
      .then((response) => {
        setCurriculums(response.data || []);
        setStatus("success");
      })
      .catch(() => setStatus("error"));
  }, []);

  function handleEdit(curriculum: CurriculumTypeProps) {
    const { _id, ...resumeData } = curriculum;
    localStorage.setItem("resume", JSON.stringify(resumeData));
    router.push("/");
  }

  return (
    <div className="h-screen w-full px-4 overflow-y-auto">
      <div className="w-[90%] mx-auto mt-10 mb-6">
        <Text variant="title" size="xl" weight="bold">
          Currículos Recentes
        </Text>
        <Text variant="caption" classname="text-gray-400">
          Veja os currículos mais recentes salvos neste app
        </Text>
      </div>

      {status === "loading" && (
        <Flex justify="center" align="center" className="h-[50vh]">
          <Spinner variant="primary" />
        </Flex>
      )}

      {status === "error" && (
        <Flex direction="column" align="center" gap="sm" className="h-[50vh]" justify="center">
          <Text variant="body" weight="bold" classname="text-gray-500">
            Não foi possível carregar os currículos.
          </Text>
          <Text variant="caption" classname="text-gray-400">
            Verifique se o servidor da API está rodando e tente novamente.
          </Text>
        </Flex>
      )}

      {status === "success" && curriculums.length === 0 && (
        <Flex direction="column" align="center" gap="sm" className="h-[50vh]" justify="center">
          <Text variant="body" weight="bold" classname="text-gray-500">
            Nenhum currículo salvo ainda.
          </Text>
          <Text variant="caption" classname="text-gray-400">
            Crie um novo currículo e clique em Save para vê-lo aqui.
          </Text>
        </Flex>
      )}

      {status === "success" && curriculums.length > 0 && (
        <Flex wrap justify="center" align="center" gap="lg" className="pb-16">
          {curriculums.map((curriculum) => (
            <Flex
              key={curriculum._id}
              direction="column"
              justify="center"
              align="center"
            >
              <Card
                spacing="sm"
                className="flex w-[21.59rem] max-w-full aspect-[210/297] text-[0.5rem] overflow-hidden"
              >
                <div
                  style={{ backgroundColor: curriculum.background || "#333" }}
                  className="w-[8px] shrink-0"
                ></div>
                <div
                  style={{ fontFamily: curriculum.fontFamily }}
                  className="flex flex-col p-2 mt-2 flex-wrap overflow-hidden"
                >
                  <h1 className="font-bold">{curriculum.name || "Sem nome"}</h1>
                  <p>{curriculum.address}</p>
                  <p>{curriculum.email}</p>
                  <p>{curriculum.telephone}</p>
                  {curriculum.objective && (
                    <>
                      <p
                        style={{ color: curriculum.colorText }}
                        className="mt-3 font-bold"
                      >
                        Objective
                      </p>
                      <p className="mb-2">{curriculum.objective}</p>
                    </>
                  )}
                  {curriculum.experiences?.length > 0 && (
                    <>
                      <p
                        style={{ color: curriculum.colorText }}
                        className="mt-3 font-bold"
                      >
                        Experience
                      </p>
                      {curriculum.experiences.slice(0, 2).map((exp) => (
                        <div key={exp.id} className="flex justify-between">
                          <p className="mb-1">{exp.title}</p>
                          <p>{exp.date}</p>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </Card>
              <Button
                onClick={() => handleEdit(curriculum)}
                variant="primary"
                className="mt-4 mb-10 rounded"
              >
                Editar
              </Button>
            </Flex>
          ))}
        </Flex>
      )}
    </div>
  );
}
