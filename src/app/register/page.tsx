"use client";
import { FaUser } from "react-icons/fa";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Register() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const handleSetData = (e: any) => {
    e.preventDefault();

    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleStyle = (e: any) => {
    const icon = document.getElementById("icon");
    if (icon) {
      icon.style.marginRight = "350px";
      icon.style.transition = "margin-right 0.5s";
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (
      data.username == "" ||
      data.email == "" ||
      data.password == "" ||
      data.password2 == ""
    ) {
      alert("Por favor, preencha todos os campos");
    } else if (data.password != data.password2) {
      alert("As senhas não são iguais");
    }
    if (data.password.length < 6) {
      alert("A senha deve ter no mínimo 6 caracteres");
    }
    axios
      .post("http://localhost:3001/register", data)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  };
  console.log(data);
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="h-auto w-[500px] animate-pulse shadow-2xl p-10 rounded-md gap-3 flex flex-col justify-center items-center">
          <div className="flex justify-center items-center">
            <FaUser id="icon" className="mb-5" size={50} color="#dadada" />
          </div>
          <div className="h-5 w-70 mt-[-80px]">
            <p className="text-gray-500">{data.username}</p>
            <p className="text-gray-500 text-sm">{data.email}</p>
          </div>
          <div className="flex flex-col mt-8">
            <label className="text-gray-500 mb-1" htmlFor="username">
              Username
            </label>
            <input
              onFocus={handleStyle}
              onChange={handleSetData}
              id="username"
              type="text"
              name="username"
              placeholder="Username"
              className="h-10 w-100 border placeholder-gray-400 border-gray-300 rounded-md p-2 mb-2 outline-gray-400"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-500 mb-1" htmlFor="email">
              E-mail
            </label>
            <input
              onChange={handleSetData}
              id="email"
              type="email"
              name="email"
              placeholder="E-mail"
              className="h-10 w-100 border placeholder-gray-400 border-gray-300 rounded-md p-2 mb-2 outline-gray-400"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-500 mb-1" htmlFor="password">
              Password
            </label>
            <input
              onChange={handleSetData}
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              className="h-10 w-100 border placeholder-gray-400 border-gray-300 rounded-md p-2 mb-2 outline-gray-400"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-500 mb-1" htmlFor="password2">
              Confirm Password
            </label>
            <input
              onChange={handleSetData}
              id="password2"
              type="password"
              name="password2"
              placeholder="Confirm Password"
              className="h-10 w-100 border placeholder-gray-400 border-gray-300 rounded-md p-2 mb-2 outline-gray-400"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="h-10 w-100 bg-blue-400 text-white rounded-md"
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
}
