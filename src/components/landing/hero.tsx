"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";

export function Hero() {
  return (
    <section className="odee-gradient relative overflow-hidden rounded-3xl p-8 text-white sm:p-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-yellow-200">Your daily path to success</p>
        <h1 className="mt-3 max-w-2xl text-3xl font-bold leading-tight sm:text-5xl">
          ಓದಿ - One Destination for Education & Excellence
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-blue-100 sm:text-base">
          Goal-based, AI-powered micro-learning for students from Class 5 to Degree level.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="#start" label="Start Learning" />
          <Button href="#login" label="Login" variant="secondary" />
        </div>
      </motion.div>
    </section>
  );
}
