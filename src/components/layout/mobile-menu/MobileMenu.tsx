"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu } from "lucide-react";
import { usePathname } from "next/navigation";

import {
Sheet,
SheetContent,
SheetTitle,
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

return ( <div className="lg:hidden"> <Sheet> <SheetTrigger
       className="
         flex
         h-11
         w-11
         items-center
         justify-center
         rounded-full
         border
         border-slate-200
         bg-white
         text-slate-700
         shadow-sm
         transition-all
         hover:border-green-600
         hover:text-green-700
         hover:shadow-md
       "
     > <Menu className="h-5 w-5" /> </SheetTrigger>

    <SheetContent
      side="right"
      className="w-[360px] max-w-full p-0"
    >
      <SheetTitle className="sr-only">
        Mobile Navigation Menu
      </SheetTitle>

      <div className="flex h-full flex-col bg-white">
        {/* Header */}

        <div className="border-b border-slate-200 bg-slate-50 px-6 py-6">
          <div className="flex items-center gap-4">
            <Image
              src="/images/logo.png"
              alt="RICHO Logo"
              width={58}
              height={58}
              priority
            />

            <div>
              <h3 className="text-lg font-bold text-green-900">
                RICHO
              </h3>

              <p className="text-xs leading-relaxed text-slate-600">
                Rural Integrated Community
                <br />
                Health & Climate Organisation
              </p>
            </div>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-slate-600">
            Building healthier communities,
            strengthening climate resilience,
            and advancing peacebuilding across
            South Sudan.
          </p>
        </div>

        {/* Navigation */}

        <nav className="flex-1 px-5 py-6">
          <div className="space-y-2">
            {links.map((link) => {
              const active = pathname === link.href;

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
                        ? "bg-green-50 text-green-700 shadow-sm"
                        : "text-slate-700 hover:bg-slate-50 hover:text-green-700"
                    }
                  `}
                >
                  <span>{link.label}</span>

                  {active && (
                    <span className="h-2.5 w-2.5 rounded-full bg-green-700" />
                  )}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Footer */}

        <div className="border-t border-slate-200 bg-slate-50 p-6">
          <Link href="/contact">
            <Button
              className="
                flex
                h-12
                w-full
                items-center
                justify-center
                rounded-full
                bg-green-700
                text-sm
                font-semibold
                text-white
                transition-all
                hover:bg-green-800
              "
            >
              Partner With Us

              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>

          <p className="mt-4 text-center text-xs leading-relaxed text-slate-500">
            Empowering communities through
            health, climate resilience,
            and peacebuilding initiatives.
          </p>
        </div>
      </div>
    </SheetContent>
  </Sheet>
</div>


);
}
