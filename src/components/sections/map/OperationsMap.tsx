import Container from "@/components/ui/container";
import { MapPin } from "lucide-react";

const locations = [
{
county: "Ayod",
description:
"Supporting climate resilience, health awareness, and community recovery initiatives.",
},
{
county: "Fangak",
description:
"Delivering WASH services, emergency response, and flood resilience programs.",
},
{
county: "Pigi",
description:
"Strengthening local health systems and community-led development initiatives.",
},
];

export default function OperationsMap() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-800">
            Where We Work
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Serving Communities Across South Sudan
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            RICHO currently focuses on climate and conflict-affected
            communities while preparing for expansion into additional
            high-need regions across the country.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {locations.map((location) => (
            <div
              key={location.county}
              className="rounded-3xl border border-slate-200 p-8 transition-all hover:border-green-200 hover:shadow-lg"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100">
                <MapPin className="h-6 w-6 text-green-700" />
              </div>

              <h3 className="text-2xl font-semibold text-slate-900">
                {location.county}
              </h3>

              <p className="mt-4 leading-relaxed text-slate-600">
                {location.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
