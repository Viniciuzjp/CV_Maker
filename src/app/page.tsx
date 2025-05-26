import { FaRegPenToSquare } from "react-icons/fa6";
import { motion } from 'framer-motion';
import Link from "next/link";


export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 text-white flex flex-col">
      <header className="w-full px-8 py-6 flex justify-between items-center bg-transparent">
        <h1 className="text-2xl font-bold">SheetSty</h1>
        <nav className="space-x-6 flex gap-5">
          <Link href="/about">
          <p>Como Funciona</p>
          </Link>
          <Link href="/curriculums">
          <p>Seus Curriculos</p>
          </Link>
          <Link href="/about">
          <p>Contatos</p>
          </Link>
        </nav>
      </header>
      <section className="flex-1 flex flex-col justify-center items-center text-center px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Destaque-se com um currículo profissional</h2>
        <p className="text-lg md:text-xl mb-8 max-w-xl">Modelos personalizados, elegantes e prontos para impressionar recrutadores.</p>
        <Link href={"/curriculum"}>
        <button
         className="bg-white text-black px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-200 transition-colors">
            <FaRegPenToSquare size={20} />
          Crie o Seu Agora
        </button>
        </Link>
      </section>
    </main>
  );
}