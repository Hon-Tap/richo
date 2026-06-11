import Link from "next/link";
import Container from "@/components/ui/container";

export default function Footer() {
return ( <footer className="bg-slate-900 py-16 text-slate-300"> <Container> <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4"> <div> <h3 className="text-xl font-bold text-white">
RICHO </h3>

```
        <p className="mt-4 text-sm leading-relaxed">
          Rural Integrated Community Health & Climate Organisation
          working to build healthy, resilient, and peaceful
          communities across South Sudan.
        </p>
      </div>

      <div>
        <h4 className="font-semibold text-white">
          Organization
        </h4>

        <ul className="mt-4 space-y-3 text-sm">
          <li><Link href="/about">About</Link></li>
          <li><Link href="/programs">Programs</Link></li>
          <li><Link href="/projects">Projects</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-white">
          Resources
        </h4>

        <ul className="mt-4 space-y-3 text-sm">
          <li><Link href="/impact">Impact</Link></li>
          <li><Link href="/news">News</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-white">
          Contact
        </h4>

        <p className="mt-4 text-sm">
          South Sudan
        </p>

        <p className="mt-2 text-sm">
          info@richo.org
        </p>
      </div>
    </div>

    <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm">
      © 2026 RICHO. All rights reserved.
    </div>
  </Container>
</footer>


);
}
