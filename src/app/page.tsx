"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  Zap,
  Leaf,
  Globe,
  Lock,
  Truck,
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/alert";
import CibusAquaCasa from "@/components/projects/cibus-aqua-casa";
import DatafiedForesight from "@/components/projects/datafied-foresight";
import DigitalFortification from "@/components/projects/digital-fortification";
import GaiasEngineers from "@/components/projects/gaias-engineers";
import EliteCourier from "@/components/projects/elite-courier";

const Section = ({
  title,
  children,
  icon: Icon,
}: {
  title: string;
  children: React.ReactNode;
  icon: React.ElementType;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="bg-purple-lilac rounded-lg shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.button
        className="w-full flex items-center justify-between p-4 bg-purple-lilac text-purple-dark"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <Icon className="mr-2" size={24} />
          <h2 className="text-2xl font-semibold">{title}</h2>
        </div>
        {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="p-4"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function HomePage() {
  return (
    <motion.main
      className="mx-auto mt-8 p-6 space-y-6 bg-gradient-to-b from-purple-lilac to-purple-dark"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-4xl font-bold text-purple-dark text-center"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        Studio Create
      </motion.h1>
      <motion.p
        className="text-xl text-gray-charcoal text-center italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        "Integrating Vision, Technology, and Sustainability"
      </motion.p>

      <Alert>
        <Zap className="h-4 w-4 text-purple-dark" />
        <AlertTitle className="text-purple-dark">New!</AlertTitle>
        <AlertDescription className="text-purple-dark">Placeholder for alert description.</AlertDescription>
      </Alert>

      <Section title="About Studio Create" icon={Globe}>
        <p className="text-gray-charcoal">
          We are visionary systems integrators, designers, and sustainability
          advocates. With our diverse backgrounds, we bring a unique and
          holistic approach to solving complex challenges.
        </p>
      </Section>

      <Section title="Our Ethos" icon={Leaf}>
        <p className="text-gray-charcoal">
          "Function is beautiful. Sustainability is essential. Knowledge should
          be accessible to all."
        </p>
      </Section>

      <Section title="Our Vision" icon={Lock}>
        <p className="text-gray-charcoal">
          Studio Create's journey is to foster a unique perspective on the
          interconnectedness of our world. We create functional, beautiful
          solutions that address real-world problems, spanning individual,
          corporate, and global scales.
        </p>
        <p className="text-gray-charcoal mt-2">
          We're committed to bridging the gap between visionary concepts and
          practical implementation, laying the groundwork for meaningful,
          sustainable change. Join us in creating a future where technology and
          nature work in harmony, where knowledge is freely accessible, and
          where sustainability is at the core of every decision.
        </p>
      </Section>

      <div className="space-y-4">
        <CibusAquaCasa />
        <DatafiedForesight />
        <DigitalFortification />
        <GaiasEngineers />
        <EliteCourier />
      </div>

      <motion.section
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-purple-base mb-4">
          Connect:
        </h2>
        <a
          href="https://twitter.com/destinyisearned"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-300 hover:text-purple-900 transition-colors"
        >
          @destinyisearned
        </a>
      </motion.section>
    </motion.main>
  );
}
