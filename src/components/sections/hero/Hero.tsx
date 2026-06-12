"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const slides = [
{
category: "COMMUNITY HEALTH",
title: "Building Healthier Communities Across South Sudan",
description:
"Supporting vulnerable communities through preventive healthcare, awareness programmes, and community-led health initiatives.",
image: "/images/wa.jpg",
link: "/programs",
},
{
category: "CLIMATE RESILIENCE",
title: "Helping Communities Adapt To Climate Challenges",
description:
"Strengthening resilience through climate adaptation, disaster preparedness, and sustainable recovery initiatives.",
image: "/images/flo.jpg",
link: "/impact",
},
{
category: "PEACEBUILDING",
title: "Advancing Peace Through Local Community Engagement",
description:
"Promoting dialogue, social cohesion, and peaceful coexistence across vulnerable communities.",
image: "/images/hero-main.jpg",
link: "/projects",
},
];

export default function Hero() {
const [activeSlide, setActiveSlide] = useState(0);

useEffect(() => {
const interval = setInterval(() => {
setActiveSlide((prev) =>
prev === slides.length - 1 ? 0 : prev + 1
);
}, 7000);


return () => clearInterval(interval);


}, []);

const slide = slides[activeSlide];

return ( <section className="relative w-full bg-white"> <div className="relative h-[650px] w-full overflow-hidden">
{/* Background Image */}

    <Image
      key={slide.image}
      src={slide.image}
      alt={slide.title}
      fill
      priority
      className="object-cover transition-all duration-700"
    />

    {/* Overlay */}

    <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/10" />

    {/* Content */}

    <div className="absolute inset-0 flex items-center">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
            {slide.category}
          </span>

          <h1 className="mt-5 text-5xl font-light leading-tight text-white md:text-6xl lg:text-7xl">
            {slide.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
            {slide.description}
          </p>

          <Link
            href={slide.link}
            className="
              mt-8
              inline-flex
              items-center
              gap-2
              border-b
              border-white
              pb-1
              text-base
              font-medium
              text-white
              transition-all
              hover:gap-3
            "
          >
            Learn More

            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>

    {/* Indicators */}

    <div className="absolute bottom-10 left-0 right-0">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeSlide === index
                  ? "w-10 bg-white"
                  : "w-2 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
</section>


);
}
