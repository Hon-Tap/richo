import {
HeartPulse,
Droplets,
Leaf,
ShieldCheck,
Users,
ArrowRight,
} from "lucide-react";

import Container from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";

const pillars = [
{
title: "Community Health",
description:
"Promoting disease prevention, maternal and child health, health education, and community wellbeing through locally driven initiatives.",
icon: HeartPulse,
},
{
title: "WASH",
description:
"Supporting safe water access, sanitation services, hygiene promotion, and environmental health practices.",
icon: Droplets,
},
{
title: "Climate Resilience",
description:
"Helping communities adapt to floods, environmental shocks, and climate-related risks through preparedness and resilience measures.",
icon: Leaf,
},
{
title: "Disaster Preparedness",
description:
"Strengthening early warning systems, emergency response capacity, preparedness planning, and recovery mechanisms.",
icon: ShieldCheck,
},
{
title: "Community Empowerment",
description:
"Building the capacity of youth, women, local leaders, volunteers, and community structures to lead sustainable change.",
icon: Users,
},
];

export default function StrategicPillars() {
const firstRow = pillars.slice(0, 3);
const secondRow = pillars.slice(3);

return ( <section className="relative overflow-hidden bg-slate-50 py-24">
{/* Background Accent */}

  <div className="absolute inset-0">
    <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-green-100/40 blur-3xl" />

    <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-orange-100/30 blur-3xl" />
  </div>

  <Container>
    <div className="relative">
      {/* Section Header */}

      <div className="mx-auto max-w-4xl text-center">
        <span className="inline-flex rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-800">
          Our Strategic Pillars
        </span>

        <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
          Delivering Integrated Solutions For
          <br />
          Health, Resilience and Sustainable Development
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
          RICHO works alongside communities to strengthen
          health systems, improve resilience to climate
          and disaster risks, and empower local actors
          to drive sustainable development across South Sudan.
        </p>
      </div>

      {/* First Row */}

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {firstRow.map((pillar) => {
          const Icon = pillar.icon;

          return (
            <Card
              key={pillar.title}
              className="
                group
                relative
                overflow-hidden
                border-slate-200
                bg-white/90
                backdrop-blur-sm
                transition-all
                duration-500
                ease-out
                hover:-translate-y-1.5
                hover:border-green-200
                hover:shadow-2xl
              "
            >
              <div
                className="
                  absolute
                  left-0
                  top-0
                  h-1
                  w-full
                  bg-gradient-to-r
                  from-green-700
                  to-green-400
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              <CardContent className="p-8">
                <div
                  className="
                    mb-6
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-green-100
                    text-green-700
                    transition-all
                    duration-500
                    group-hover:scale-105
                    group-hover:rotate-3
                  "
                >
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {pillar.title}
                </h3>

                <p className="mt-4 leading-relaxed text-slate-600">
                  {pillar.description}
                </p>

                <div
                  className="
                    mt-6
                    flex
                    items-center
                    text-sm
                    font-semibold
                    text-green-700
                    opacity-0
                    transition-all
                    duration-500
                    group-hover:opacity-100
                  "
                >
                  Learn More

                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Second Row Centered */}

      <div className="mx-auto mt-8 grid max-w-4xl gap-8 md:grid-cols-2">
        {secondRow.map((pillar) => {
          const Icon = pillar.icon;

          return (
            <Card
              key={pillar.title}
              className="
                group
                relative
                overflow-hidden
                border-slate-200
                bg-white/90
                backdrop-blur-sm
                transition-all
                duration-500
                ease-out
                hover:-translate-y-1.5
                hover:border-green-200
                hover:shadow-2xl
              "
            >
              <div
                className="
                  absolute
                  left-0
                  top-0
                  h-1
                  w-full
                  bg-gradient-to-r
                  from-green-700
                  to-green-400
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              <CardContent className="p-8">
                <div
                  className="
                    mb-6
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-green-100
                    text-green-700
                    transition-all
                    duration-500
                    group-hover:scale-105
                    group-hover:rotate-3
                  "
                >
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {pillar.title}
                </h3>

                <p className="mt-4 leading-relaxed text-slate-600">
                  {pillar.description}
                </p>

                <div
                  className="
                    mt-6
                    flex
                    items-center
                    text-sm
                    font-semibold
                    text-green-700
                    opacity-0
                    transition-all
                    duration-500
                    group-hover:opacity-100
                  "
                >
                  Learn More

                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Bottom Statement */}

      <div className="mt-20 rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
        <h3 className="text-2xl font-bold text-slate-900">
          Community-Led. Resilient. Sustainable.
        </h3>

        <p className="mx-auto mt-4 max-w-3xl text-slate-600">
          Our work is guided by participation,
          equity, resilience and sustainability,
          ensuring communities remain at the center
          of every intervention and development effort.
        </p>
      </div>
    </div>
  </Container>
</section>


);
}
