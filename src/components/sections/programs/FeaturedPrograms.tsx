"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

import Container from "@/components/ui/container";

const programs = [
{
id: "01",
title: "Community Health Promotion",
image: "/images/hero-main.jpg",
description:
"Strengthening community health systems through awareness, prevention, maternal health support and locally driven healthcare initiatives.",
category: "Health",
},
{
id: "02",
title: "WASH Services",
image: "/images/wa.jpg",
description:
"Expanding access to safe water, sanitation facilities and hygiene education for vulnerable communities.",
category: "WASH",
},
{
id: "03",
title: "Climate Resilience",
image: "/images/flo.jpg",
description:
"Supporting communities to adapt to floods, environmental shocks and climate-related challenges.",
category: "Climate",
},
{
id: "04",
title: "Disaster Preparedness",
image: "/images/hero-secondary.jpg",
description:
"Building local capacity for preparedness, emergency response and community recovery.",
category: "Resilience",
},
];

export default function FeaturedPrograms() {
const [active, setActive] = useState(0);

const program = programs[active];

return ( <section className="bg-slate-50 py-24"> <Container>
{/* Header */}

    <div className="mb-16 max-w-3xl">
      <span className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">
        Featured Programmes
      </span>

      <h2 className="mt-5 text-4xl font-light leading-tight text-slate-900 md:text-5xl">
        Delivering Sustainable Impact
        Through Integrated Community Action
      </h2>

      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
        Our programmes respond to immediate
        community needs while strengthening
        resilience and supporting long-term
        development across South Sudan.
      </p>
    </div>

    {/* Content */}

    <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
      {/* Featured Programme */}

      <div>
        <div className="relative aspect-[16/10] overflow-hidden rounded-3xl">
          <Image
            src={program.image}
            alt={program.title}
            fill
            className="object-cover transition-all duration-700"
          />
        </div>

        <div className="mt-8">
          <span className="text-sm font-semibold uppercase tracking-wider text-green-700">
            {program.category}
          </span>

          <h3 className="mt-3 text-3xl font-semibold text-slate-900">
            {program.title}
          </h3>

          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
            {program.description}
          </p>

          <button
            className="
              mt-6
              inline-flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-green-700
            "
          >
            Learn More

            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Programme Navigation */}

      <div className="space-y-2">
        {programs.map((item, index) => (
          <button
            key={item.title}
            onClick={() => setActive(index)}
            className={`
              w-full
              border-b
              py-6
              text-left
              transition-all
              ${
                active === index
                  ? "border-green-700"
                  : "border-slate-200"
              }
            `}
          >
            <div className="flex items-start gap-5">
              <span
                className={`
                  text-sm
                  font-semibold
                  ${
                    active === index
                      ? "text-green-700"
                      : "text-slate-400"
                  }
                `}
              >
                {item.id}
              </span>

              <div>
                <h4
                  className={`
                    text-xl
                    font-semibold
                    transition-colors
                    ${
                      active === index
                        ? "text-slate-900"
                        : "text-slate-600"
                    }
                  `}
                >
                  {item.title}
                </h4>

                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {item.description}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  </Container>
</section>


);
}
