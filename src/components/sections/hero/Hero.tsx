"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "react-countup";

import {
ArrowRight,
HeartHandshake,
Leaf,
MapPin,
Users,
} from "lucide-react";

import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const fadeUp = {
hidden: {
opacity: 0,
y: 40,
},
visible: {
opacity: 1,
y: 0,
transition: {
duration: 0.7,
},
},
};

const stagger = {
hidden: {},
visible: {
transition: {
staggerChildren: 0.15,
},
},
};

export default function Hero() {
return ( <section className="relative overflow-hidden bg-slate-50">
{/* Background Effects */}


  <div className="absolute inset-0">
    <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-green-100/50 blur-3xl" />

    <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-orange-100/50 blur-3xl" />

    <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/30 blur-3xl" />
  </div>

  <Container>
    <div className="relative grid min-h-[90vh] items-center gap-16 py-16 lg:grid-cols-2 lg:gap-20 lg:py-20">
      {/* LEFT */}

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center rounded-full bg-green-100 px-5 py-2 text-xs font-semibold tracking-wide text-green-800 md:text-sm"
        >
          Community Health • Climate Resilience • Peacebuilding
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="mt-8 text-5xl font-black leading-[1.05] tracking-tight text-slate-900 md:text-6xl lg:text-7xl"
        >
          Building Healthier

          <span className="text-green-700">
            {" "}Communities.
          </span>

          <br />

          Strengthening Climate

          <br />

          Resilience.

          <br />

          Advancing

          <span className="text-green-700">
            {" "}Peace Across South Sudan.
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-8 max-w-xl text-lg leading-relaxed text-slate-600"
        >
          RICHO empowers vulnerable communities through
          health promotion, climate adaptation,
          disaster preparedness, and resilience-building
          initiatives that strengthen lives,
          livelihoods, and local resilience across
          South Sudan.
        </motion.p>

        {/* Coverage */}

        <motion.div
          variants={fadeUp}
          className="mt-8"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500">
            Active In
          </p>

          <div className="flex flex-wrap gap-3">
            <span className="rounded-full bg-white px-4 py-2 text-sm shadow-sm">
              Ayod
            </span>

            <span className="rounded-full bg-white px-4 py-2 text-sm shadow-sm">
              Fangak
            </span>

            <span className="rounded-full bg-white px-4 py-2 text-sm shadow-sm">
              Pigi
            </span>
          </div>
        </motion.div>

        {/* CTA */}

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Button
            size="lg"
            className="rounded-full bg-green-700 px-8 hover:bg-green-800"
          >
            Our Programmes
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="rounded-full"
          >
            Support Our Mission

            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>

        {/* Metrics */}

        <motion.div
          variants={fadeUp}
          className="mt-14 border-t border-slate-200 pt-8"
        >
          <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-slate-500">
            Impact At A Glance
          </p>

          <div className="flex flex-wrap gap-12">
            <div>
              <p className="text-4xl font-bold text-green-700">
                <CountUp
                  end={50}
                  duration={2}
                  suffix="K+"
                />
              </p>

              <p className="text-sm text-slate-500">
                Community Members Reached
              </p>
            </div>

            <div>
              <p className="text-4xl font-bold text-green-700">
                <CountUp
                  end={4}
                  duration={2}
                />
              </p>

              <p className="text-sm text-slate-500">
                Strategic Programme Areas
              </p>
            </div>

            <div>
              <p className="text-4xl font-bold text-green-700">
                <CountUp
                  end={3}
                  duration={2}
                />
              </p>

              <p className="text-sm text-slate-500">
                Priority Counties
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* RIGHT */}

      <motion.div
        initial={{
          opacity: 0,
          x: 50,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.8,
          delay: 0.3,
        }}
        className="relative"
      >
        <div className="absolute -right-8 -top-8 h-48 w-48 rounded-full bg-green-300/30 blur-3xl" />

        <div className="relative h-[560px] overflow-hidden rounded-[36px] shadow-2xl lg:h-[680px]">
          <Image
            src="/images/hero-main.jpg"
            alt="RICHO Community Programs"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/40 via-transparent to-transparent" />
        </div>

        {/* Impact Card */}

        <div className="absolute -left-8 bottom-16 rounded-3xl bg-white p-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <Users className="h-8 w-8 text-green-700" />

            <div>
              <p className="text-4xl font-bold text-green-700">
                50K+
              </p>

              <p className="text-sm text-slate-600">
                Community Members Supported
              </p>
            </div>
          </div>
        </div>

        {/* Health Card */}

        <div className="absolute -right-8 top-16 rounded-3xl bg-white p-5 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-green-100 p-3">
              <HeartHandshake className="h-6 w-6 text-green-700" />
            </div>

            <div>
              <h3 className="font-semibold">
                Community Health
              </h3>

              <p className="text-sm text-slate-500">
                Prevention First
              </p>
            </div>
          </div>
        </div>

        {/* Climate Card */}

        <div className="absolute right-0 top-52 rounded-3xl bg-white p-5 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-orange-100 p-3">
              <Leaf className="h-6 w-6 text-orange-600" />
            </div>

            <div>
              <h3 className="font-semibold">
                Climate Resilience
              </h3>

              <p className="text-sm text-slate-500">
                Adaptation & Recovery
              </p>
            </div>
          </div>
        </div>

        {/* Location Card */}

        <div className="absolute bottom-8 right-8 rounded-3xl bg-white/95 p-4 shadow-xl backdrop-blur">
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-orange-500" />

            <div>
              <p className="font-semibold">
                South Sudan
              </p>

              <p className="text-xs text-slate-500">
                Ayod • Fangak • Pigi
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </Container>

  {/* Scroll Indicator */}

  <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block">
    <div className="flex flex-col items-center">
      <span className="mb-2 text-xs uppercase tracking-widest text-slate-400">
        Scroll
      </span>

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="h-10 w-[2px] bg-green-700"
      />
    </div>
  </div>
</section>


);
}
