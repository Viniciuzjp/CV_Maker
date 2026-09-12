'use client';
import axios from "axios";
import { useEffect, useState } from "react";
import CurriculumTypeProps from "./interface";
import { Button, Card, Flex, Spinner, Text } from "@av-digital/components";

export default function Curriculums() {
    const [curriculums, setCurriculums] = useState<CurriculumTypeProps[]>([]);

    useEffect(() => {
        axios.get("http://localhost:3001")
        .then((response) => setCurriculums(response.data))
        .catch((error) => console.log(error))
    }, [])

    return (
        <>
    <Flex wrap justify="center" align="center" className="max-h-screen overflow-y-scroll">
    <div className="w-[90%] mx-auto mt-10">
        <Text variant="title" size="xl" weight="bold">Currículos Recentes</Text>
        <Text variant="caption" classname="text-gray-400">veja os curriculos mais recentes</Text>
    </div>
    {curriculums.length > 0 ? (
      curriculums.map((curriculum) => (
      <Flex key={curriculum._id} direction="column" justify="center" align="center" className="max-h-screen overflow-y-scroll">
        <Card
          spacing="sm"
          className="flex w-[21.59rem] max-w-full aspect-[210/297] mt-10 mb-2 text-[0.5rem]"
        >
          <div style={{ backgroundColor: "black" }} className="w-[8px]"></div>
          <div style={{ fontFamily: curriculum.fontFamily }} className="flex flex-col p-2 mt-2 flex-wrap">
          <h1>{curriculum.name}</h1>
          <p>{curriculum.adress}</p>
          <p>{curriculum.email}</p>
          <p>{curriculum.telephone}</p>
          <p>{curriculum.linkedin}</p>
          <p>{curriculum.github}</p>
          <div className="flex flex-col">
            <div className="flex">
              <div style={{ backgroundColor: "black" }} className="mt-3 h-[1rem] w-[5px] mr-1"></div>
              <p style={{ color: curriculum.colorText }} className="mt-3 text-[0.7rem] font-bold">Objective</p>
            </div>
              <p className="mb-2">{curriculum.objective}</p>
              <div className="flex">
              <div style={{ backgroundColor: "black" }} className="mt-3 h-[1rem] w-[5px] mr-1"></div>
              <p style={{ color: curriculum.colorText }} className="mt-3 text-[0.7rem] font-bold">Experience</p>
            </div>
            <div className="flex justify-between">
              <p className="mb-2">{curriculum.experience}</p>
              <p>{curriculum.experienceDate}</p>
            </div>
            <div className="flex">
            <span className="mr-1">•</span>
              <p className="mb-2">{curriculum.experienceDescription}</p>
            </div>
          </div>
          <p>{curriculum.education}</p>
          <p>{curriculum.skills}</p>
          <p>{curriculum.languages}</p>
          <p>{curriculum.projects}</p>
          <p>{curriculum.color1}</p>
        </div>
        </Card>
        <Button variant="primary" className="mt-4 mb-10 rounded">Editar</Button>
      </Flex>
      ))
    ) : (
      <Flex justify="center" align="center" className="h-screen">
        <Flex direction="column" align="center">
          <Spinner variant="primary" />
        </Flex>
      </Flex>
    )}
  </Flex>
        </>
    );
  }