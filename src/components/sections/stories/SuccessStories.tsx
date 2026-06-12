import Image from "next/image";
import { ArrowRight } from "lucide-react";

import Container from "@/components/ui/container";

const stories = [
{
title: "Improving Community Health Awareness",
description:
"Health promotion campaigns helped families understand disease prevention, maternal health and healthy living practices.",
image: "/images/flo.jpg",
category: "Health Impact",
},
{
title: "Supporting Flood-Affected Communities",
description:
"Community-led preparedness and recovery initiatives strengthened resilience during seasonal flooding.",
image: "/images/wa.jpg",
category: "Climate Resilience",
},
{
title: "Strengthening Community Participation",
description:
"Inclusive dialogue processes enabled communities to actively participate in local planning and decision-making.",
image: "/images/hero-secondary.jpg",
category: "Community Action",
},
];

export default function SuccessStories() {
return ( <section className="bg-slate-50 py-24"> <Container> <div className="mx-auto max-w-3xl text-center"> <span className="inline-flex rounded-full bg-green-100 px-5 py-2 text-sm font-medium text-green-800">
Success Stories </span>


      <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
        Stories of Change and Resilience
      </h2>

      <p className="mt-6 text-lg leading-relaxed text-slate-600">
        Real stories from communities working together to create
        healthier, safer and more resilient futures.
      </p>
    </div>

    <div className="mt-16 grid gap-8 lg:grid-cols-3">
      {stories.map((story) => (
        <article
          key={story.title}
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
              src={story.image}
              alt={story.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <div className="p-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-green-700">
              {story.category}
            </span>

            <h3 className="mt-3 text-xl font-bold leading-snug text-slate-900">
              {story.title}
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              {story.description}
            </p>

            <button className="mt-6 flex items-center text-sm font-semibold text-green-700">
              Read Story

              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </article>
      ))}
    </div>
  </Container>
</section>


);
}
