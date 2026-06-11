import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function CallToAction() {
return ( <section className="bg-green-700 py-24 text-white"> <Container> <div className="mx-auto max-w-4xl text-center"> <h2 className="text-4xl font-bold md:text-5xl">
Join Us in Building Resilient Communities </h2>

```
      <p className="mt-6 text-lg text-green-50">
        Together we can strengthen health systems, improve climate
        resilience, support vulnerable populations, and promote
        sustainable development across South Sudan.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Button
          size="lg"
          className="bg-white text-green-700 hover:bg-slate-100"
        >
          Partner With Us
        </Button>

        <Button
          size="lg"
          variant="outline"
          className="border-white text-white hover:bg-white hover:text-green-700"
        >
          Contact Us
        </Button>
      </div>
    </div>
  </Container>
</section>


);
}
