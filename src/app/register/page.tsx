"use client";
import { FaUser } from "react-icons/fa";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card, Flex, Stack, Text } from "@av-digital/components";
import { API_BASE_URL } from "@/app/config";

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
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (
      data.username == "" ||
      data.email == "" ||
      data.password == "" ||
      data.password2 == ""
    ) {
      alert("Por favor, preencha todos os campos");
      return;
    }
    if (data.password != data.password2) {
      alert("As senhas não são iguais");
      return;
    }
    if (data.password.length < 6) {
      alert("A senha deve ter no mínimo 6 caracteres");
      return;
    }
    axios
      .post(`${API_BASE_URL}/register`, data)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  };
  console.log(data);
  return (
    <>
      <Flex justify="center" align="center" className="h-screen w-screen px-4">
        <Card spacing="xl" className="h-auto w-[500px] max-w-full bg-white rounded-md">
          <Stack gap="md" classname="justify-center items-center">
            <Flex justify="center" align="center">
              <FaUser id="icon" className="mb-2" size={50} color="#dadada" />
            </Flex>
            {(data.username || data.email) && (
              <Flex direction="column" align="center" className="w-full">
                <Text variant="body" classname="text-gray-500">{data.username}</Text>
                <Text variant="caption" classname="text-gray-500">{data.email}</Text>
              </Flex>
            )}
            <Stack gap="sm">
              <label className="text-gray-500" htmlFor="username">
                Username
              </label>
              <input
                onChange={handleSetData}
                id="username"
                type="text"
                name="username"
                placeholder="Username"
                className="h-10 w-full border placeholder-gray-400 border-gray-300 rounded-md p-2 outline-gray-400"
              />
            </Stack>
            <Stack gap="sm">
              <label className="text-gray-500" htmlFor="email">
                E-mail
              </label>
              <input
                onChange={handleSetData}
                id="email"
                type="email"
                name="email"
                placeholder="E-mail"
                className="h-10 w-full border placeholder-gray-400 border-gray-300 rounded-md p-2 outline-gray-400"
              />
            </Stack>
            <Stack gap="sm">
              <label className="text-gray-500" htmlFor="password">
                Password
              </label>
              <input
                onChange={handleSetData}
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                className="h-10 w-full border placeholder-gray-400 border-gray-300 rounded-md p-2 outline-gray-400"
              />
            </Stack>
            <Stack gap="sm">
              <label className="text-gray-500" htmlFor="password2">
                Confirm Password
              </label>
              <input
                onChange={handleSetData}
                id="password2"
                type="password"
                name="password2"
                placeholder="Confirm Password"
                className="h-10 w-full border placeholder-gray-400 border-gray-300 rounded-md p-2 outline-gray-400"
              />
            </Stack>
            <Button
              onClick={handleSubmit}
              variant="primary"
              className="h-10 w-full rounded-md justify-center"
            >
              Register
            </Button>
          </Stack>
        </Card>
      </Flex>
    </>
  );
}
