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
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Strip */}

      <div className="hidden md:block bg-green-900 text-white">
        <Container>
          <div className="flex h-9 items-center justify-between text-xs tracking-wide">
            <span>
              Community Health • Climate Resilience • Peacebuilding
            </span>

            <span>South Sudan</span>
          </div>
        </Container>
      </div>

      {/* Main Navbar */}

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-xl"
            : "bg-white"
        }`}
      >
        <Container>
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}

            <Link
              href="/"
              className="group flex items-center gap-4"
            >
              <Image
                src="/images/logo.png"
                alt="RICHO Logo"
                width={72}
                height={72}
                priority
                className="transition-transform duration-300 group-hover:scale-105"
              />

              <div className="hidden md:block">
                <h1 className="text-xl font-bold text-green-900">
                  Rural Integrated Community
                </h1>

                <p className="text-sm text-slate-500">
                  Health & Climate Organisation
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}

            <nav className="hidden lg:flex items-center gap-10">
              {siteConfig.navigation.map((item) => {
                const active =
                  pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative text-[15px] font-semibold tracking-wide transition-colors ${
                      active
                        ? "text-green-700"
                        : "text-slate-700 hover:text-green-700"
                    }`}
                  >
                    {item.title}

                    {active && (
                      <span className="absolute -bottom-6 left-0 h-[3px] w-full rounded-full bg-green-700" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Actions */}

            <div className="flex items-center gap-4">
              <Button
                className="
                  hidden
                  lg:flex
                  h-12
                  rounded-full
                  bg-green-800
                  px-7
                  font-semibold
                  shadow-md
                  hover:bg-green-900
                  hover:shadow-lg
                "
              >
                Partner With Us
              </Button>

              <MobileMenu />
            </div>
          </div>
        </Container>
      </header>
    </>
  );
}