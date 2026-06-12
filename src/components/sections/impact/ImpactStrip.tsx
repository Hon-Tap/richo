import Container from "@/components/ui/container";

const stats = [
{
value: "5K+",
label: "People Reached",
},
{
value: "12+",
label: "Communities Served",
},
{
value: "8+",
label: "Projects Delivered",
},
{
value: "3",
label: "Priority Counties",
},
];

export default function ImpactStrip() {
return ( <section className="border-y border-slate-200 bg-white"> <Container> <div className="py-20">
{/* Section Header */}


      <div className="mx-auto mb-16 max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">
          Impact At A Glance
        </p>

        <h2 className="mt-4 text-3xl font-light text-slate-900 md:text-4xl">
          Supporting Communities Through
          Health, Resilience and Peacebuilding
        </h2>

        <p className="mt-5 text-lg leading-relaxed text-slate-600">
          Working alongside local communities
          to improve wellbeing, strengthen resilience,
          and promote sustainable development
          across South Sudan.
        </p>
      </div>

      {/* Statistics */}

      <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`
              text-center
              xl:text-left
              ${
                index !== stats.length - 1
                  ? "xl:border-r xl:border-slate-200"
                  : ""
              }
            `}
          >
            <h3 className="text-6xl font-light tracking-tight text-green-700">
              {stat.value}
            </h3>

            <p className="mt-4 text-lg font-semibold text-slate-900">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </Container>
</section>

);
}
