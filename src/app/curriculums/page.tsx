'use client';
import axios from "axios";
import { useEffect, useState } from "react";

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
    }
    const [curriculums, setCurriculums] = useState<Curriculum[]>([]);

    useEffect(() => {
        axios.get("http://localhost:3001")
        .then((response) => setCurriculums(response.data))
        .catch((error) => console.log(error))
    },)

      const [mensagem, setMensagem] = useState('');
      const mensagens = [
        'Estamos preparando a página para você...',
        'Aguarde um pouco mais, estamos quase lá...',
        'Carregando dados...',
        'Processando solicitação...',
        'Por favor, aguarde...',
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
    <div className="flex flex-wrap max-h-screen justify-center items-center overflow-y-scroll">
    {curriculums.length > 0 ? (
      curriculums.map((curriculum) => (
      <div key={curriculum._id} className="flex flex-col max-h-screen justify-center items-center overflow-y-scroll'">
        <div style={{ fontFamily: curriculum.fontFamily }} className="flex w-[21.59rem] h-[29.7rem]  shadow-2xl p-3 m-20 text-[0.5rem]">
          <div style={{ backgroundColor: "black" }} className="h-[28rem] w-[8px] mt-2"></div>
          <div className="flex flex-col p-2 mt-2 flex-wrap">
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
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 mt-[-50px] mb-[70px] text-white font-bold py-2 px-4 rounded">Editar</button>
      </div>
      ))
    ) : (
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 border-8 border-gray-200 border-t-blue-500 rounded-full animate-spin">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-blue-500 rounded-full"></div>
          </div>
          <p className="text-2xl font-bold mt-4 text-gray-600">{mensagem}</p>
        </div>
      </div>
    )}
  </div>
        </>
    );
  }