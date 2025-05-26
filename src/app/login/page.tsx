'use client';
import { FaUser } from "react-icons/fa";
import React, { use } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

export default function Register() {

    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const handleSetData = (e:any) => {
        e.preventDefault()

        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const [user, setUser] = useState({
        _id: "",
        username: "",
        email: "",
    })

    if (user && user.username) {
      const username = localStorage.setItem("username", user.username);
      const email = localStorage.setItem("email", user.email);
      const id = localStorage.setItem("id", user._id);
    }

    const handleSubmit = (e:any) => {
        e.preventDefault()
        if(data.email == "" || data.password == ""){
            alert("Por favor, preencha todos os campos")
        }
        axios.post('http://localhost:3001/login', data)
        .then((response) => setUser(response.data))
        .catch((error) => console.log(error))
    }

    return (
        <>
        <div className="h-screen w-screen flex justify-center items-center">
            <div className="h-auto w-[500px] animate-pulse shadow-2xl p-10 rounded-md gap-3 flex flex-col justify-center items-center">
                <div className="flex justify-center items-center text-2xl font-bold text-blue-400"><h1>Login</h1></div>
                <div className="flex flex-col">
                <label className="text-gray-500 mb-1" htmlFor="email">E-mail</label>
                <input
                id="email"
                onChange={handleSetData}
                type="email"
                name="email"
                placeholder="E-mail"
                className="h-10 w-100 border placeholder-gray-400 border-gray-300 rounded-md p-2 mb-2 outline-gray-400"
                />
                </div>
                <div className="flex flex-col">
                <label className="text-gray-500 mb-1" htmlFor="password">Password</label>
                <input
                id="password"
                onChange={handleSetData}
                type="password"
                name="password"
                placeholder="Password"
                className="h-10 w-100 border placeholder-gray-400 border-gray-300 rounded-md p-2 mb-2 outline-gray-400"
                />
                </div>
                <button onClick={handleSubmit} className="h-10 w-100 bg-blue-400 text-white rounded-md">Login</button>
                <Link href="/register" className="ml-[250px]">
                <button className="h-10 text-blue-400 rounded-md">Não tem uma conta?</button>
                </Link>
            </div>
        </div>
        </>
    );
}