import { MapPin } from "lucide-react";

import Container from "@/components/ui/container";

const locations = [
{
number: "01",
county: "Ayod County",
description:
"Supporting climate resilience, health promotion and community recovery initiatives.",
},
{
number: "02",
county: "Fangak County",
description:
"Delivering WASH interventions, emergency preparedness and flood resilience programmes.",
},
{
number: "03",
county: "Pigi County",
description:
"Strengthening local health systems and community-led development efforts.",
},
];

export default function OperationsMap() {
return ( <section className="border-t border-slate-200 bg-white py-24"> <Container> <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
{/* LEFT */}

      <div className="lg:sticky lg:top-32 lg:self-start">
        <span className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">
          Where We Work
        </span>

        <h2 className="mt-5 text-4xl font-light leading-tight text-slate-900 md:text-5xl">
          Serving Communities Across South Sudan
        </h2>

        <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-600">
          RICHO currently focuses on vulnerable,
          flood-affected and climate-sensitive
          communities in Jonglei State while
          preparing for future expansion.
        </p>

        <div className="mt-10 flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-green-600" />

          <p className="text-sm font-medium text-slate-600">
            Current operational footprint
          </p>
        </div>
      </div>

      {/* RIGHT */}

      <div className="relative">
        <div className="absolute left-6 top-0 h-full w-px bg-slate-200" />

        <div className="space-y-10">
          {locations.map((location) => (
            <div
              key={location.county}
              className="relative flex gap-6"
            >
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-green-700 text-white shadow-lg">
                <MapPin className="h-5 w-5" />
              </div>

              <div className="pb-10">
                <span className="text-sm font-semibold text-green-700">
                  {location.number}
                </span>

                <h3 className="mt-2 text-2xl font-semibold text-slate-900">
                  {location.county}
                </h3>

                <p className="mt-3 max-w-xl leading-relaxed text-slate-600">
                  {location.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Future Growth */}

        <div className="mt-10 border-l-4 border-green-700 bg-slate-50 p-6">
          <h4 className="text-lg font-semibold text-slate-900">
            Future Expansion
          </h4>

          <p className="mt-2 leading-relaxed text-slate-600">
            RICHO continues to assess emerging
            humanitarian and development needs
            to extend support to additional
            communities across South Sudan.
          </p>
        </div>
      </div>
    </div>
  </Container>
</section>


);
}
