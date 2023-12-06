import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import pageformImg from "@/public/pageform.png";
import thread from "@/public/threadclone.png";
import taskify from "@/public/taskify.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer",
    location: "Lagos, NG",
    description:
      "We build custom systems, I was actively working on a proctoring software ",
      icon: React.createElement(CgWorkAlt),
    date: "2020",
  },
  {
    title: "Software Engineering Instructor",
    location: "Ogun, Ng",
    description:
      "I taught over 500 students and staffs of different universities",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Remote",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Python, Django. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Formbuilder",
    description:
      "I worked as a full-stack developer on this startup project for 3 months . Users can create and share form and view real time analytics of forms",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Mongoose"],
    imageUrl: pageformImg,
  },
  {
    title: "Thread",
    description:
      "A social media platform built with Next.js and Tailwind. Users can create posts, like and comment on posts.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Clerk"],
    imageUrl: thread,
  },
  {
    title: "Taskify",
    description:
      "A task management platform built with Next.js and Tailwind. Users can create tasks, assign tasks to users, and view task analytics.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: taskify,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "PHP",
  "Laravel",
  "Framer Motion",
] as const;
