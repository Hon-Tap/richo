import Image from "next/image";
import { ArrowRight } from "lucide-react";

import Container from "@/components/ui/container";

const programs = [
{
title: "Community Health Promotion",
image: "/images/logo.png",
description:
"Strengthening community health systems through awareness, prevention and locally driven healthcare initiatives.",
category: "Health",
},
{
title: "WASH Services",
image: "/images/wa.jpg",
description:
"Expanding access to safe water, sanitation facilities and hygiene education in vulnerable communities.",
category: "WASH",
},
{
title: "Climate Resilience",
image: "/images/flo.jpg",
description:
"Supporting communities to adapt to floods, environmental shocks and climate-related challenges.",
category: "Climate",
},
{
title: "Disaster Preparedness",
image: "/images/hero-secondary.jpg",
description:
"Building local capacity for emergency preparedness, response and community recovery.",
category: "Resilience",
},
];

export default function FeaturedPrograms() {
return ( <section className="bg-white py-24"> <Container> <div className="mx-auto max-w-3xl text-center"> <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-medium text-blue-800">
Featured Programs </span>

      <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
        Delivering Sustainable Community Impact
      </h2>

      <p className="mt-6 text-lg leading-relaxed text-slate-600">
        Our programmes respond to immediate community needs while
        strengthening resilience and supporting long-term development.
      </p>
    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
      {programs.map((program) => (
        <article
          key={program.title}
          className="
            group
            overflow-hidden
            rounded-3xl
            border
            border-slate-200
            bg-white
            transition-all
            duration-500
            hover:-translate-y-2
            hover:border-green-200
            hover:shadow-xl
          "
        >
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={program.image}
              alt={program.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <div className="p-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-green-700">
              {program.category}
            </span>

            <h3 className="mt-3 text-xl font-bold leading-snug text-slate-900">
              {program.title}
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              {program.description}
            </p>

            <div className="mt-6 flex items-center text-sm font-semibold text-green-700">
              Learn More

              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </article>
      ))}
    </div>
  </Container>
</section>


);
}
