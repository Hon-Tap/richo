"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";

const links = [
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Projects", href: "/projects" },
  { label: "Impact", href: "/impact" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export default function MobileMenu() {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="w-[320px]"
        >
          <div className="flex h-full flex-col">
            <div className="border-b pb-6">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/logo.png"
                  alt="RICHO"
                  width={48}
                  height={48}
                />

                <div>
                  <h3 className="font-bold text-green-900">
                    RICHO
                  </h3>

                  <p className="text-xs text-slate-500">
                    Community Health & Climate
                  </p>
                </div>
              </div>
            </div>

            <nav className="mt-8 flex flex-col gap-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="
                    text-lg
                    font-medium
                    text-slate-700
                    transition-colors
                    hover:text-green-700
                  "
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto pt-10">
              <Button
                className="
                  w-full
                  rounded-full
                  bg-green-700
                  hover:bg-green-800
                "
              >
                Partner With Us
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}