"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";

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
const pathname = usePathname();

return ( <div className="lg:hidden"> <Sheet> <SheetTrigger asChild> <Button
         variant="ghost"
         size="icon"
         className="
           h-11
           w-11
           rounded-full
           border
           border-slate-200
           hover:bg-slate-100
         "
       > <Menu className="h-5 w-5" /> </Button> </SheetTrigger>

    <SheetContent
      side="right"
      className="w-[360px] p-0"
    >
      <div className="flex h-full flex-col">
        {/* Header */}

        <div className="border-b border-slate-200 px-6 py-5">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="RICHO"
              width={52}
              height={52}
            />

            <div>
              <h3 className="text-base font-bold text-green-900">
                RICHO
              </h3>

              <p className="text-xs text-slate-500">
                Rural Integrated Community
              </p>

              <p className="text-xs text-slate-500">
                Health & Climate Organisation
              </p>
            </div>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            Building healthier communities,
            climate resilience, and peaceful
            livelihoods across South Sudan.
          </p>
        </div>

        {/* Navigation */}

        <nav className="flex-1 px-6 py-6">
          <div className="space-y-1">
            {links.map((link) => {
              const active =
                pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    flex items-center justify-between
                    rounded-xl
                    px-4
                    py-4
                    text-base
                    font-medium
                    transition-all
                    ${
                      active
                        ? "bg-green-50 text-green-700"
                        : "text-slate-700 hover:bg-slate-50 hover:text-green-700"
                    }
                  `}
                >
                  {link.label}

                  {active && (
                    <span className="h-2 w-2 rounded-full bg-green-700" />
                  )}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Footer */}

        <div className="border-t border-slate-200 p-6">
          <Button
            className="
              h-12
              w-full
              rounded-full
              bg-green-700
              text-sm
              font-semibold
              hover:bg-green-800
            "
          >
            Partner With Us

            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <p className="mt-4 text-center text-xs text-slate-500">
            Empowering communities through
            health, resilience and peacebuilding.
          </p>
        </div>
      </div>
    </SheetContent>
  </Sheet>
</div>


);
}
