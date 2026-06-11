import Image from "next/image";
import { ArrowRight, HeartHandshake } from "lucide-react";

import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50">
      {/* Brand Background Effects */}

      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-orange-100/40 blur-3xl" />

        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl" />
      </div>

      <Container>
        <div className="relative grid min-h-[85vh] items-center gap-16 py-20 lg:grid-cols-2">
          {/* LEFT */}

          <div>
            <div className="mb-6 inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800">
              Community Health • Climate Resilience • Peacebuilding
            </div>

            <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-slate-900 lg:text-6xl">
              Healthy Communities.
              <br />
              Climate Resilient Futures.
              <br />
              Peaceful South Sudan.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-600">
              RICHO empowers vulnerable communities through health
              promotion, climate adaptation, disaster preparedness,
              and community resilience initiatives across South Sudan.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-green-700 hover:bg-green-800"
              >
                Explore Programs
              </Button>

              <Button size="lg" variant="outline">
                Partner With Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* RIGHT */}

          <div className="relative">
            <div className="relative h-[600px] overflow-hidden rounded-[32px] shadow-2xl">
              <Image
                src="/images/hero-main.jpg"
                alt="RICHO Community Programs"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Floating Card */}

            <div className="absolute -left-8 bottom-12 rounded-3xl bg-white p-6 shadow-xl">
              <p className="text-4xl font-bold text-green-700">
                50K+
              </p>

              <p className="mt-1 text-sm text-slate-600">
                People Reached
              </p>
            </div>

            {/* Floating Program Card */}

            <div className="absolute -right-6 top-12 flex items-center gap-4 rounded-3xl bg-white p-5 shadow-xl">
              <div className="rounded-full bg-green-100 p-3">
                <HeartHandshake className="h-6 w-6 text-green-700" />
              </div>

              <div>
                <h3 className="font-semibold">
                  Community Health
                </h3>

                <p className="text-sm text-slate-500">
                  Prevention First
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}