"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import MobileMenu from "@/components/layout/mobile-menu/MobileMenu";
import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

export default function Navbar() {
const pathname = usePathname();

return ( <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur"> <Container> <div className="flex h-20 items-center justify-between">
{/* Logo */}

      <Link
        href="/"
        className="flex items-center gap-3"
      >
        <Image
          src="/images/logo.png"
          alt="RICHO Logo"
          width={56}
          height={56}
          priority
        />

        <div className="hidden md:block">
          <h1 className="font-bold leading-tight text-green-900">
            Rural Integrated Community
          </h1>

          <p className="text-xs text-slate-500">
            Health & Climate Organisation
          </p>
        </div>
      </Link>

      {/* Desktop Navigation */}

      <nav className="hidden items-center gap-8 lg:flex">
        {siteConfig.navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`text-sm font-medium transition-colors ${
              pathname === item.href
                ? "text-green-700"
                : "text-slate-700 hover:text-green-700"
            }`}
          >
            {item.title}
          </Link>
        ))}
      </nav>

      {/* Right Side */}

      <div className="flex items-center gap-3">
        <Button className="hidden bg-green-700 hover:bg-green-800 lg:flex">
          Partner With Us
        </Button>

        <MobileMenu />
      </div>
    </div>
  </Container>
</header>


);
}
