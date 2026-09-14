"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { PiReadCvLogoBold } from "react-icons/pi";
import { Button, Flex, Text } from "@av-digital/components";

const navLinks = [
  { href: "/", label: "Novo Currículo" },
  { href: "/curriculums", label: "Meus Currículos" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <Flex
        justify="between"
        align="center"
        className="h-16 px-6 max-md:px-4"
      >
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <PiReadCvLogoBold size={26} color="#2563eb" />
          <Text variant="title" size="md" weight="bold">
            CV Maker
          </Text>
        </Link>

        <Flex gap="lg" align="center" className="max-md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                pathname === link.href
                  ? "text-sm font-semibold text-[#2563eb]"
                  : "text-sm font-medium text-gray-600 hover:text-[#2563eb] transition-colors"
              }
            >
              {link.label}
            </Link>
          ))}
        </Flex>

        <Flex gap="sm" align="center" className="max-md:hidden">
          <Link href="/login">
            <Button variant="secondary" size="sm">
              Log in
            </Button>
          </Link>
          <Link href="/register">
            <Button variant="primary" size="sm">
              Sign up
            </Button>
          </Link>
        </Flex>

        <button
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen((open) => !open)}
          className="hidden max-md:flex items-center justify-center"
        >
          {menuOpen ? (
            <IoClose size={26} color="#333" />
          ) : (
            <IoMenu size={26} color="#333" />
          )}
        </button>
      </Flex>

      {menuOpen && (
        <Flex
          direction="column"
          gap="md"
          className="hidden max-md:flex px-6 pb-6 border-t border-gray-100"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={
                pathname === link.href
                  ? "pt-4 text-sm font-semibold text-[#2563eb]"
                  : "pt-4 text-sm font-medium text-gray-600"
              }
            >
              {link.label}
            </Link>
          ))}
          <Flex gap="sm" className="pt-2">
            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="flex-1"
            >
              <Button variant="secondary" className="w-full">
                Log in
              </Button>
            </Link>
            <Link
              href="/register"
              onClick={() => setMenuOpen(false)}
              className="flex-1"
            >
              <Button variant="primary" className="w-full">
                Sign up
              </Button>
            </Link>
          </Flex>
        </Flex>
      )}
    </header>
  );
}
