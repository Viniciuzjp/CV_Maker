'use client';
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { Button, Card, Flex, Stack, Text } from "@av-digital/components";

export default function Login() {

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

    useEffect(() => {
      if (user && user.username) {
        localStorage.setItem("username", user.username);
        localStorage.setItem("email", user.email);
        localStorage.setItem("id", user._id);
      }
    }, [user]);

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
        <Flex justify="center" align="center" className="h-screen w-screen px-4">
            <Card spacing="xl" className="h-auto w-[500px] max-w-full bg-white rounded-md">
              <Stack gap="md" classname="justify-center items-center">
                <Flex justify="center" align="center">
                  <Text variant="title" size="xl" weight="bold" classname="text-blue-400">Login</Text>
                </Flex>
                <Stack gap="sm">
                <label className="text-gray-500" htmlFor="email">E-mail</label>
                <input
                id="email"
                onChange={handleSetData}
                type="email"
                name="email"
                placeholder="E-mail"
                className="h-10 w-full border placeholder-gray-400 border-gray-300 rounded-md p-2 outline-gray-400"
                />
                </Stack>
                <Stack gap="sm">
                <label className="text-gray-500" htmlFor="password">Password</label>
                <input
                id="password"
                onChange={handleSetData}
                type="password"
                name="password"
                placeholder="Password"
                className="h-10 w-full border placeholder-gray-400 border-gray-300 rounded-md p-2 outline-gray-400"
                />
                </Stack>
                <Button onClick={handleSubmit} variant="primary" className="h-10 w-full rounded-md justify-center">Login</Button>
                <Flex justify="end" className="w-full">
                  <Link href="/register">
                    <button className="h-10 text-blue-400 rounded-md">Não tem uma conta?</button>
                  </Link>
                </Flex>
              </Stack>
            </Card>
        </Flex>
        </>
    );
}