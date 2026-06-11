import Container from "@/components/ui/container";

const stats = [
  {
    value: "50K+",
    label: "People Reached",
  },
  {
    value: "120+",
    label: "Communities Served",
  },
  {
    value: "25+",
    label: "Projects Delivered",
  },
  {
    value: "5+",
    label: "Counties Covered",
  },
];

export default function ImpactStrip() {
  return (
    <section className="border-y bg-white">
      <Container>
        <div className="grid grid-cols-2 gap-8 py-10 text-center md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <h3 className="text-4xl font-bold text-green-700">
                {stat.value}
              </h3>

              <p className="mt-2 text-slate-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}