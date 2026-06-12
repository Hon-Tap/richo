import Container from "@/components/ui/container";

const stats = [
{
value: "5K+",
label: "People Reached",
description: "Community members engaged through health and resilience initiatives",
},
{
value: "12+",
label: "Communities Served",
description: "Local communities supported through integrated programmes",
},
{
value: "8+",
label: "Projects Delivered",
description: "Health, resilience and peacebuilding activities implemented",
},
{
value: "3",
label: "Priority Counties",
description: "Ayod, Fangak and Pigi",
},
];

export default function ImpactStrip() {
return ( <section className="relative border-y border-slate-200 bg-white"> <Container> <div className="py-16"> <div className="mb-12 text-center"> <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">
Impact At A Glance </p>

        <h2 className="mt-4 text-3xl font-bold text-slate-900">
          Building Resilient Communities Through Action
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          RICHO works alongside communities to strengthen health,
          climate resilience, preparedness, and peaceful development
          across South Sudan.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-8
              text-center
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-lg
            "
          >
            <h3 className="text-5xl font-black text-green-700">
              {stat.value}
            </h3>

            <p className="mt-3 text-lg font-semibold text-slate-900">
              {stat.label}
            </p>

            <p className="mt-3 text-sm leading-relaxed text-slate-500">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </Container>
</section>


);
}
