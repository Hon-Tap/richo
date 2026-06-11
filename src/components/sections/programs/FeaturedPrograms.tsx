import Image from "next/image";
import Container from "@/components/ui/container";

const programs = [
{
title: "Community Health Promotion",
image: "/images/logo.png",
description:
"Strengthening community health systems through awareness, prevention, and local healthcare initiatives.",
},
{
title: "WASH Services",
image: "/images/wa.jpg",
description:
"Expanding access to clean water, sanitation facilities, and hygiene education.",
},
{
title: "Climate Resilience",
image: "/images/flo.jpg",
description:
"Supporting vulnerable communities to adapt to floods, droughts, and environmental challenges.",
},
{
title: "Disaster Preparedness",
image: "/images/hero-secondary.jpg",
description:
"Building local capacity for emergency response, preparedness, and recovery.",
},
];

export default function FeaturedPrograms() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800">
            Featured Programs
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Delivering Sustainable Community Impact
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Our programs are designed to address immediate community needs
            while building long-term resilience and sustainable development.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {programs.map((program) => (
            <div
              key={program.title}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-semibold text-slate-900">
                  {program.title}
                </h3>

                <p className="mt-4 leading-relaxed text-slate-600">
                  {program.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
