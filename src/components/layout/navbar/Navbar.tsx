"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Mail } from "lucide-react";
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

return () => {
  window.removeEventListener("scroll", handleScroll);
};

}, []);

return (
<>
{/* TOP BAR */}


  <div className="hidden md:block bg-green-950 text-white">
    <Container>
      <div className="flex h-10 items-center justify-between text-xs">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5" />
            Juba, South Sudan
          </span>

          <span className="flex items-center gap-2">
            <Mail className="h-3.5 w-3.5" />
            info@richo.org
          </span>
        </div>

        <span className="font-medium text-green-100">
          Building Resilient Communities Since 2024
        </span>
      </div>
    </Container>
  </div>

  {/* MAIN NAVBAR */}

  <header
    className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled
        ? "border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur-xl"
        : "bg-white"
    }`}
  >
    <Container>
      <div className="flex h-24 items-center justify-between">
        {/* LOGO */}

        <Link
          href="/"
          className="group flex items-center gap-4"
        >
          <Image
            src="/images/logo.png"
            alt="RICHO Logo"
            width={78}
            height={78}
            priority
            className="transition-transform duration-300 group-hover:scale-105"
          />

          <div className="hidden md:block">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
              RICHO
            </p>

            <h1 className="text-xl font-bold leading-tight text-slate-900">
              Rural Integrated Community
            </h1>

            <p className="text-sm text-slate-500">
              Health & Climate Organisation
            </p>
          </div>
        </Link>

        {/* DESKTOP NAV */}

        <nav className="hidden lg:flex items-center gap-8">
          {siteConfig.navigation.map((item) => {
            const active =
              pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-2 text-[15px] font-semibold transition-colors ${
                  active
                    ? "text-green-700"
                    : "text-slate-700 hover:text-green-700"
                }`}
              >
                {item.title}

                <span
                  className={`absolute left-0 -bottom-2 h-[3px] rounded-full bg-green-700 transition-all duration-300 ${
                    active
                      ? "w-full"
                      : "w-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* ACTIONS */}

        <div className="flex items-center gap-4">
          <Link href="/contact">
            <Button
              className="
                hidden
                lg:flex
                items-center
                gap-2
                rounded-full
                bg-green-700
                px-6
                py-3
                font-semibold
                text-white
                shadow-md
                transition-all
                hover:-translate-y-0.5
                hover:bg-green-800
                hover:shadow-lg
              "
            >
              Become a Partner

              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>

          <MobileMenu />
        </div>
      </div>
    </Container>
  </header>
</>


);
}
