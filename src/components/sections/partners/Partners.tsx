import Container from "@/components/ui/container";
import { Users, Handshake, HeartHandshake } from "lucide-react";

const collaborators = [
{
title: "Local Communities",
description:
"RICHO works closely with community members, local leaders, women, youth, and volunteers to identify priorities and deliver sustainable solutions.",
icon: Users,
},
{
title: "Community Leadership",
description:
"Traditional authorities, faith leaders, and community committees play a central role in planning, coordination, and accountability.",
icon: Handshake,
},
{
title: "Future Partnerships",
description:
"RICHO welcomes collaboration with humanitarian organizations, development partners, government institutions, donors, and civil society actors.",
icon: HeartHandshake,
},
];

export default function Partners() {
return ( <section className="bg-white py-24"> <Container> <div className="mx-auto max-w-3xl text-center"> <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-800">
Working Together </span>

```
      <h2 className="mt-6 text-4xl font-bold text-slate-900">
        Community-Centered Partnerships
      </h2>

      <p className="mt-6 text-lg text-slate-600">
        Our work is built on trust, participation, and collaboration.
        Communities are not beneficiaries alone—they are partners in
        designing and sustaining solutions that improve lives and
        strengthen resilience.
      </p>
    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-3">
      {collaborators.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-3xl border border-slate-200 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-green-200 hover:shadow-xl"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100">
              <Icon className="h-7 w-7 text-green-700" />
            </div>

            <h3 className="text-xl font-semibold text-slate-900">
              {item.title}
            </h3>

            <p className="mt-4 leading-relaxed text-slate-600">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>

    <div className="mt-16 rounded-[32px] bg-green-700 p-10 text-center text-white">
      <h3 className="text-3xl font-bold">
        Interested in Partnering with RICHO?
      </h3>

      <p className="mx-auto mt-4 max-w-2xl text-green-50">
        We welcome opportunities to collaborate with organizations,
        institutions, donors, and community stakeholders committed to
        improving health outcomes, strengthening climate resilience,
        and promoting peaceful development across South Sudan.
      </p>
    </div>
  </Container>
</section>


);
}
