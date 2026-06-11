
import {
  HeartPulse,
  Droplets,
  Leaf,
  ShieldCheck,
  Users,
} from "lucide-react";

import Container from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";

const pillars = [
  {
    title: "Community Health Promotion",
    description:
      "Improving health awareness, disease prevention, maternal health, and community wellbeing through education and local action.",
    icon: HeartPulse,
  },
  {
    title: "Water, Sanitation & Hygiene (WASH)",
    description:
      "Promoting safe water access, sanitation services, hygiene education, and environmental health practices.",
    icon: Droplets,
  },
  {
    title: "Climate Adaptation & Resilience",
    description:
      "Supporting communities to prepare for floods, environmental shocks, and climate-related health risks.",
    icon: Leaf,
  },
  {
    title: "Disaster Risk Reduction",
    description:
      "Strengthening preparedness, early warning systems, emergency response, and recovery mechanisms.",
    icon: ShieldCheck,
  },
  {
    title: "Community Capacity Building",
    description:
      "Empowering local leaders, volunteers, youth, women, and community groups to drive sustainable development.",
    icon: Users,
  },
];

export default function StrategicPillars() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800">
            Our Strategic Pillars
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Building Resilient Communities Through Integrated Action
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            RICHO delivers sustainable, community-led solutions that
            strengthen health systems, climate resilience, disaster
            preparedness, and social cohesion across South Sudan.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <Card
                key={pillar.title}
                className="group border-slate-200 transition-all duration-300 hover:-translate-y-2 hover:border-green-200 hover:shadow-xl"
              >
                <CardContent className="p-8">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-700">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900">
                    {pillar.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-slate-600">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
