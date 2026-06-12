import Image from "next/image";
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
image: "/images/logo.jpg",
date: "May 2026",
category: "Community Development",
},
];

export default function LatestNews() {
return ( <section className="bg-slate-50 py-24"> <Container> <div className="mx-auto max-w-3xl text-center"> <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800">
News & Updates </span>

      <h2 className="mt-6 text-4xl font-bold text-slate-900">
        Latest Activities and Updates
      </h2>

      <p className="mt-6 text-lg text-slate-600">
        Follow our ongoing work, community initiatives, and program
        developments across South Sudan.
      </p>
    </div>

    <div className="mt-16 grid gap-8 lg:grid-cols-3">
      {news.map((item) => (
        <article
          key={item.title}
          className="overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
          <div className="relative h-60">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-8">
            <span className="text-sm font-medium text-green-700">
              {item.category}
            </span>

            <h3 className="mt-3 text-xl font-semibold text-slate-900">
              {item.title}
            </h3>

            <p className="mt-4 text-sm text-slate-500">
              {item.date}
            </p>
          </div>
        </article>
      ))}
    </div>
  </Container>
</section>


);
}
