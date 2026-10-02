"use client";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Card, Flex, Stack, Text } from "@av-digital/components";
import { API_BASE_URL } from "@/app/config";

export default function Register() {
  const router = useRouter();
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSetData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    setErrorMessage("");
    if (
      data.username === "" ||
      data.email === "" ||
      data.password === "" ||
      data.password2 === ""
    ) {
      setErrorMessage("Por favor, preencha todos os campos");
      return;
    }
    if (data.password !== data.password2) {
      setErrorMessage("As senhas não são iguais");
      return;
    }
    if (data.password.length < 6) {
      setErrorMessage("A senha deve ter no mínimo 6 caracteres");
      return;
    }
    setSubmitting(true);
    axios
      .post(`${API_BASE_URL}/register`, data, { withCredentials: true })
      .then((response) => {
        if (!response.data || typeof response.data === "string") {
          setErrorMessage(
            typeof response.data === "string"
              ? response.data
              : "Não foi possível criar a conta.",
          );
          return;
        }
        router.push("/login");
      })
      .catch(() =>
        setErrorMessage("Não foi possível criar a conta. Tente novamente."),
      )
      .finally(() => setSubmitting(false));
  };

  return (
    <>
      <Flex justify="center" align="center" className="h-screen w-screen px-4">
        <Card spacing="xl" className="h-auto w-[500px] max-w-full bg-white rounded-md">
          <Stack gap="md" classname="justify-center items-center">
            <Flex justify="center" align="center">
              <FaUser id="icon" className="mb-2" size={50} color="#dadada" />
            </Flex>
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
            {errorMessage && (
              <Text variant="caption" classname="text-red-500">
                {errorMessage}
              </Text>
            )}
            <Button
              onClick={handleSubmit}
              variant="primary"
              className="h-10 w-full rounded-md justify-center"
            >
              {submitting ? "Criando conta..." : "Register"}
            </Button>
            <Flex justify="end" className="w-full">
              <Link href="/login">
                <button className="h-10 text-blue-400 rounded-md">
                  Já tem uma conta?
                </button>
              </Link>
            </Flex>
          </Stack>
        </Card>
      </Flex>
    </>
  );
}
