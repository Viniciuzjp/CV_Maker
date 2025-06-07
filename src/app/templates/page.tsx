'use client';
import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment";

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
        data: string
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
    <div className="w-[90%] m-[0 auto] mt-10">
        <h2 className="text-3xl font-bold">Currículos Recentes</h2>
        <p className="text-gray-400">veja os curriculos mais recentes</p>
    </div>
    <div className="flex flex-wrap gap-10 w-[90%] m-[0 auto] mt-10">
    {curriculums.length > 0 ? (
      curriculums.map((curriculum) => (
      <div key={curriculum._id} className="flex">
        <div className="flex flex-col gap-2">
        <div className="flex w-[300px] h-[270px] bg-white rounded-lg shadow-md p-4 justify-center items-center">
          <div style={{ fontFamily: curriculum.fontFamily }} className="flex hover:w-[220px] hover:h-[270px] transition-ease-in duration-300 w-[205px] h-[250px]  shadow-2xl p-1 text-[0.5rem]">
          <div style={{ backgroundColor: "black" }} className="h-9/10 w-[1px] mt-2"></div>
          <div className="flex flex-col p-2 mt-2 flex-wrap">
          <h1>{curriculum.name}</h1>
          <p className="text-[0.3rem]">{curriculum.adress}</p>
          <p className="text-[0.3rem]">{curriculum.email}</p>
          <p className="text-[0.3rem]">{curriculum.telephone}</p>
          <p className="text-[0.3rem]">{curriculum.linkedin}</p>
          <p className="text-[0.3rem]">{curriculum.github}</p>
          <div className="flex flex-col">
            <div className="flex">
              <div style={{ backgroundColor: "black" }} className="mt-3 h-[0.4rem] w-[2px] mr-1"></div>
              <p style={{ color: curriculum.colorText }} className="mt-3 text-[0.4rem] font-bold">Objective</p>
            </div>
              <p className="mb-2 text-[0.3rem]">{curriculum.objective}</p>
              <div className="flex">
              <div style={{ backgroundColor: "black" }} className="mt-3 h-[0.4rem] w-[2px] mr-1"></div>
              <p style={{ color: curriculum.colorText }} className="mt-3 text-[0.4rem] font-bold">Experience</p>
            </div>
            <div className="flex justify-between">
              <p className="mb-2 text-[0.3rem]">{curriculum.experience}</p>
              <p className="mb-2 text-[0.3rem]">{curriculum.experienceDate}</p>
            </div>
            <div className="flex">
            <span className="mr-1 text-[0.3rem]">•</span>
              <p className="mb-2 text-[0.3rem]">{curriculum.experienceDescription}</p>
            </div>
          </div>
          <p className="text-[0.3rem]">{curriculum.education}</p>
          <p className="text-[0.3rem]">{curriculum.skills}</p>
          <p className="text-[0.3rem]">{curriculum.languages}</p>
          <p className="text-[0.3rem]">{curriculum.projects}</p>
          <p className="text-[0.3rem]">{curriculum.color1}</p>
        </div>
        </div>
        </div>
        <div>
        <h1 className="font-bold text-[#353535]">{curriculum.name}</h1>
        <p className="text-gray-400 text-[15px]">{moment(curriculum.data).format('LLL')}</p>
        </div>
      </div>
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
  </div>
        </>
    );
  }