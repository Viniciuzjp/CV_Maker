'use client';
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Card, Flex, Stack, Text } from "@av-digital/components";
import { API_BASE_URL } from "@/app/config";

export default function Login() {
    const router = useRouter();

    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const [errorMessage, setErrorMessage] = useState("");

    const handleSetData = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        router.push("/");
      }
    }, [user, router]);

    const handleSubmit = () => {
        setErrorMessage("");
        if (data.email === "" || data.password === "") {
            setErrorMessage("Por favor, preencha todos os campos");
            return;
        }
        axios.post(`${API_BASE_URL}/login`, data, { withCredentials: true })
        .then((response) => {
            if (!response.data || !response.data.username) {
                setErrorMessage("E-mail ou senha inválidos");
                return;
            }
            setUser(response.data);
        })
        .catch(() => setErrorMessage("Não foi possível entrar. Tente novamente."))
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
                {errorMessage && (
                  <Text variant="caption" classname="text-red-500">{errorMessage}</Text>
                )}
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