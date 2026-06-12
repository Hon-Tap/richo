import Image from "next/image";
import { ArrowRight } from "lucide-react";

import Container from "@/components/ui/container";

const news = [
{
title: "Community Health Awareness Activities Continue",
image: "/images/wa.jpg",
date: "June 2026",
category: "Health",
},
{
title: "Supporting Flood Preparedness in Vulnerable Areas",
image: "/images/flo.jpg",
date: "June 2026",
category: "Climate Resilience",
},
{
title: "Community Dialogues Strengthen Local Participation",
image: "/images/logo.png",
date: "May 2026",
category: "Community Development",
},
];

export default function LatestNews() {
return ( <section className="bg-slate-50 py-24"> <Container> <div className="mx-auto max-w-3xl text-center"> <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-medium text-blue-800">
News & Updates </span>

      <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
        Latest Activities and Updates
      </h2>

      <p className="mt-6 text-lg leading-relaxed text-slate-600">
        Follow our ongoing work, field activities and community
        initiatives across South Sudan.
      </p>
    </div>

    <div className="mt-16 grid gap-8 lg:grid-cols-3">
      {news.map((item) => (
        <article
          key={item.title}
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
            hover:shadow-xl
          "
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <div className="p-7">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-green-700">
                {item.category}
              </span>

              <span className="text-sm text-slate-500">
                {item.date}
              </span>
            </div>

            <h3 className="mt-4 text-xl font-bold leading-snug text-slate-900">
              {item.title}
            </h3>

            <div className="mt-6 flex items-center text-sm font-semibold text-green-700">
              Read Update

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
