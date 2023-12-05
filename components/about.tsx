"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >

<SectionHeading>About me</SectionHeading>
<p className="mb-3">
  Abiodun-Onajobi Treasure is a web developer with 3 years of experience, specializing in the MERN stack, Python, Django, MySQL, and data analysis tools such as Excel and Python. With a commitment to delivering high-quality code, Abiodun-Onajobi stays up-to-date with the latest web technologies and industry best practices. Let's collaborate to create exceptional web experiences!
</p>

<p>
  <span className="italic">When I'm not coding</span>, I enjoy playing video games, watching movies, and spending time with my dog. I'm also passionate about learning new things, and currently, I'm exploring topics in history and philosophy. Additionally, I'm in the process of learning how to play the guitar.
</p>
</motion.section>

  );
}
