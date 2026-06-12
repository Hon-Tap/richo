import { MapPin } from "lucide-react";

import Container from "@/components/ui/container";

const locations = [
{
county: "Ayod County",
description:
"Supporting climate resilience, health promotion and community recovery initiatives.",
},
{
county: "Fangak County",
description:
"Delivering WASH interventions, emergency preparedness and flood resilience programmes.",
},
{
county: "Pigi County",
description:
"Strengthening local health systems and community-led development efforts.",
},
];

export default function OperationsMap() {
return ( <section className="bg-white py-24"> <Container> <div className="mx-auto max-w-3xl text-center"> <span className="inline-flex rounded-full bg-orange-100 px-5 py-2 text-sm font-medium text-orange-800">
Where We Work </span>

      <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
        Serving Communities Across South Sudan
      </h2>

      <p className="mt-6 text-lg leading-relaxed text-slate-600">
        Our current focus is supporting vulnerable communities in
        flood-affected and climate-sensitive areas while preparing
        for future expansion.
      </p>
    </div>

    <div className="mt-20 relative">
      <div className="absolute left-7 top-0 hidden h-full w-px bg-slate-200 lg:block" />

      <div className="space-y-10">
        {locations.map((location) => (
          <div
            key={location.county}
            className="
              relative
              rounded-3xl
              border
              border-slate-200
              bg-slate-50
              p-8
              transition-all
              duration-500
              hover:border-green-200
              hover:bg-white
              hover:shadow-lg
            "
          >
            <div className="flex items-start gap-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-green-100">
                <MapPin className="h-6 w-6 text-green-700" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {location.county}
                </h3>

                <p className="mt-4 leading-relaxed text-slate-600">
                  {location.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-3xl border border-green-100 bg-green-50 p-8 text-center">
        <h3 className="text-2xl font-bold text-slate-900">
          Expanding Community Reach
        </h3>

        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          RICHO continues to assess emerging humanitarian and
          development needs to support additional communities in
          the future.
        </p>
      </div>
    </div>
  </Container>
</section>


);
}
