import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Container from "@/components/ui/container";

const stories = [
{
title: "Improving Community Health Awareness",
description:
"Health promotion campaigns helped families understand disease prevention, maternal health and healthy living practices.",
image: "/images/flo.jpg",
category: "Health Impact",
href: "/stories/community-health-awareness",
},
{
title: "Supporting Flood-Affected Communities",
description:
"Community-led preparedness and recovery initiatives strengthened resilience during seasonal flooding.",
image: "/images/wa.jpg",
category: "Climate Resilience",
href: "/stories/flood-affected-communities",
},
{
title: "Strengthening Community Participation",
description:
"Inclusive dialogue processes enabled communities to actively participate in local planning and decision-making.",
image: "/images/hero-secondary.jpg",
category: "Community Action",
href: "/stories/community-participation",
},
];

export default function SuccessStories() {
return ( <section className="bg-slate-50 py-24"> <Container>
{/* Header */}


    <div className="mx-auto max-w-3xl text-center">
      <span className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">
        Stories & Impact
      </span>

      <h2 className="mt-5 text-4xl font-light text-slate-900 md:text-5xl">
        Stories Of Change And Resilience
      </h2>

      <p className="mt-6 text-lg leading-relaxed text-slate-600">
        Real stories from communities working
        together to create healthier, safer and
        more resilient futures across South Sudan.
      </p>
    </div>

    {/* Stories Grid */}

    <div className="mt-16 grid gap-8 lg:grid-cols-3">
      {stories.map((story) => (
        <article
          key={story.title}
          className="
            group
            overflow-hidden
            bg-white
            transition-all
            duration-500
            hover:-translate-y-1
          "
        >
          {/* Image */}

          <Link href={story.href}>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={story.image}
                alt={story.title}
                fill
                className="
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />
            </div>
          </Link>

          {/* Content */}

          <div className="border-x border-b border-slate-200 p-7">
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-green-700">
              {story.category}
            </span>

            <h3 className="mt-4 text-2xl font-semibold leading-snug text-slate-900">
              {story.title}
            </h3>

            <p className="mt-4 leading-relaxed text-slate-600">
              {story.description}
            </p>

            <Link
              href={story.href}
              className="
                mt-6
                inline-flex
                items-center
                gap-2
                text-sm
                font-semibold
                text-green-700
                transition-all
                hover:gap-3
              "
            >
              Read Story

              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </article>
      ))}
    </div>

    {/* Bottom Link */}

    <div className="mt-14 text-center">
      <Link
        href="/stories"
        className="
          inline-flex
          items-center
          gap-2
          text-sm
          font-semibold
          uppercase
          tracking-wider
          text-green-700
          transition-all
          hover:gap-3
        "
      >
        View All Stories

        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  </Container>
</section>


);
}
