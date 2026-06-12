import {
HeartPulse,
Droplets,
Leaf,
ShieldCheck,
Users,
} from "lucide-react";

import Container from "@/components/ui/container";

const pillars = [
{
number: "01",
title: "Community Health",
description:
"Disease prevention, maternal and child health, and community wellbeing.",
icon: HeartPulse,
},
{
number: "02",
title: "WASH",
description:
"Safe water access, sanitation services, and hygiene promotion.",
icon: Droplets,
},
{
number: "03",
title: "Climate Resilience",
description:
"Adaptation, preparedness, and recovery from climate-related risks.",
icon: Leaf,
},
{
number: "04",
title: "Disaster Preparedness",
description:
"Early warning systems, emergency response, and recovery planning.",
icon: ShieldCheck,
},
{
number: "05",
title: "Community Empowerment",
description:
"Strengthening local leadership, participation, and sustainable change.",
icon: Users,
},
];

export default function StrategicPillars() {
return ( <section className="bg-white py-24"> <Container> <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
{/* LEFT SIDE */}

      <div className="lg:sticky lg:top-32 lg:self-start">
        <span className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">
          Strategic Pillars
        </span>

        <h2 className="mt-5 text-4xl font-light leading-tight text-slate-900 md:text-5xl">
          Integrated Solutions For
          <br />
          Stronger Communities
        </h2>

        <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-600">
          RICHO works alongside communities
          to improve health outcomes,
          strengthen resilience, support recovery,
          and promote sustainable development
          across South Sudan.
        </p>
      </div>

      {/* RIGHT SIDE */}

      <div className="space-y-2">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;

          return (
            <div
              key={pillar.title}
              className="
                group
                flex
                items-start
                gap-6
                border-b
                border-slate-200
                py-8
                transition-colors
                hover:border-green-300
              "
            >
              <div className="min-w-[50px]">
                <span className="text-sm font-semibold text-green-700">
                  {pillar.number}
                </span>
              </div>

              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-green-50
                  text-green-700
                "
              >
                <Icon className="h-6 w-6" />
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-semibold text-slate-900">
                  {pillar.title}
                </h3>

                <p className="mt-2 max-w-xl leading-relaxed text-slate-600">
                  {pillar.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </Container>
</section>


);
}
