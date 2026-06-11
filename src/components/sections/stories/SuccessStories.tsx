import Image from "next/image";
import Container from "@/components/ui/container";
import { ArrowRight } from "lucide-react";

const stories = [
{
title: "Improving Community Health Awareness",
description:
"RICHO volunteers conducted health education campaigns that helped families understand disease prevention, maternal health, and healthy living practices.",
image: "/images/flo.jpg",
},
{
title: "Supporting Flood-Affected Communities",
description:
"During seasonal flooding, RICHO worked with local communities to strengthen resilience, support emergency preparedness, and promote recovery efforts.",
image: "/images/wa.jpg",
},
{
title: "Strengthening Community Participation",
description:
"Through inclusive dialogue and local engagement, communities have become active participants in planning and decision-making processes.",
image: "/images/hero-secondary.jpg",
},
];

export default function SuccessStories() {
return ( <section className="bg-slate-50 py-24"> <Container> <div className="mx-auto max-w-3xl text-center"> <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800">
Success Stories </span>

```
      <h2 className="mt-6 text-4xl font-bold text-slate-900">
        Stories of Change and Resilience
      </h2>

      <p className="mt-6 text-lg text-slate-600">
        Behind every project is a story of people, communities,
        and local leaders working together to build a healthier,
        safer, and more resilient future.
      </p>
    </div>

    <div className="mt-16 grid gap-8 lg:grid-cols-3">
      {stories.map((story) => (
        <article
          key={story.title}
          className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >
          <div className="relative h-72 overflow-hidden">
            <Image
              src={story.image}
              alt={story.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="p-8">
            <h3 className="text-2xl font-semibold text-slate-900">
              {story.title}
            </h3>

            <p className="mt-4 leading-relaxed text-slate-600">
              {story.description}
            </p>

            <button className="mt-6 flex items-center gap-2 font-medium text-green-700 transition-colors hover:text-green-800">
              Read Story
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </article>
      ))}
    </div>
  </Container>
</section>


);
}
