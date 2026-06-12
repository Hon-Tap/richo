"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import MobileMenu from "@/components/layout/mobile-menu/MobileMenu";
import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-xl"
          : "bg-white"
      }`}
    >
      <Container>
        <div className="flex h-24 items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-4"
          >
            <Image
              src="/images/logo.png"
              alt="RICHO Logo"
              width={62}
              height={62}
              priority
              className="transition-transform duration-300 group-hover:scale-105"
            />

            <div className="hidden md:block">
              <h1 className="text-lg font-bold text-green-900">
                Rural Integrated Community
              </h1>

              <p className="text-sm text-slate-500">
                Health & Climate Organisation
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {siteConfig.navigation.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-sm font-medium transition-all ${
                    active
                      ? "text-green-700"
                      : "text-slate-700 hover:text-green-700"
                  }`}
                >
                  {item.title}

                  {active && (
                    <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-green-700" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <Button
              className="
                hidden
                lg:flex
                bg-green-700
                hover:bg-green-800
                rounded-full
                px-6
                h-11
                font-semibold
              "
            >
              Partner With Us
            </Button>

            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  );
}