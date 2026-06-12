import {
Users,
Handshake,
HeartHandshake,
ArrowRight,
} from "lucide-react";

import Container from "@/components/ui/container";

const collaborators = [
{
title: "Local Communities",
description:
"Community members remain at the center of every programme, helping identify priorities, shape interventions and sustain results.",
icon: Users,
},
{
title: "Community Leadership",
description:
"Traditional leaders, youth groups, women's associations and local committees provide guidance and accountability.",
icon: Handshake,
},
{
title: "Future Partnerships",
description:
"RICHO is open to collaboration with humanitarian agencies, development organizations, government institutions and donors.",
icon: HeartHandshake,
},
];

export default function Partners() {
return ( <section className="bg-white py-24"> <Container> <div className="mx-auto max-w-3xl text-center"> <span className="inline-flex rounded-full bg-orange-100 px-5 py-2 text-sm font-medium text-orange-800">
Working Together </span>


      <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
        Community-Centred Partnerships
      </h2>

      <p className="mt-6 text-lg leading-relaxed text-slate-600">
        Sustainable impact begins with collaboration. Communities
        are active partners in planning, implementation and
        accountability.
      </p>
    </div>

    <div className="mt-16 grid gap-8 lg:grid-cols-3">
      {collaborators.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="
              group
              rounded-3xl
              border
              border-slate-200
              bg-slate-50
              p-8
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-green-200
              hover:bg-white
              hover:shadow-xl
            "
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100">
              <Icon className="h-8 w-8 text-green-700" />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-slate-900">
              {item.title}
            </h3>

            <p className="mt-4 leading-relaxed text-slate-600">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>

    <div className="mt-20 overflow-hidden rounded-[32px] bg-green-700">
      <div className="grid gap-10 p-12 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="text-sm uppercase tracking-widest text-green-100">
            Partnership Opportunities
          </span>

          <h3 className="mt-4 text-4xl font-bold text-white">
            Building Impact Through Collaboration
          </h3>

          <p className="mt-6 leading-relaxed text-green-50">
            We welcome opportunities to work alongside partners
            committed to improving health outcomes, strengthening
            climate resilience and supporting sustainable community
            development across South Sudan.
          </p>
        </div>

        <div className="flex justify-start lg:justify-end">
          <button className="flex items-center rounded-full bg-white px-8 py-4 font-semibold text-green-700 transition hover:bg-green-50">
            Explore Partnership Opportunities

            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  </Container>
</section>


);
}
