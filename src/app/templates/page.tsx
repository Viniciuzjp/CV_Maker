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
    <div className="w-[90%] m-[0 auto] mt-10">
        <h2 className="text-3xl font-bold">Currículos Recentes</h2>
        <p className="text-gray-400">veja os curriculos mais recentes</p>
    </div>
    <div className="w-[90%] m-[0 auto] mt-10">
    {curriculums.length > 0 ? (
      curriculums.map((curriculum) => (
      <div key={curriculum._id} className="flex">
        <div className="flex gap-10">
        <div className="w-[300px] h-[300px] bg-white rounded-lg shadow-md p-4">
        </div>
        <h1>{curriculum.name}</h1>
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