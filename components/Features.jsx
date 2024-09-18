"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaRegCheckCircle } from "react-icons/fa";

const featuresData = [
  {
    imgSrc: "/features/img-1.svg",
    title: "Smart Task Management",
    description: "Organize and prioritize tasks effortlessly",
    highlights: [
      "Set due dates and reminders.",
      "Track progress and milestones.",
      "Easily sort tasks by priority",
    ],
  },
  {
    imgSrc: "/features/img-2.svg",
    title: "Real-Time Collaboration",
    description: "Collaborate with your team in real-time",
    highlights: [
      "Set due dates and reminders.",
      "Track progress and milestones.",
      "Easily sort tasks by priority",
    ],
  },
  {
    imgSrc: "/features/img-3.svg",
    title: "Advanced Analytics",
    description: "Gain insights to boost your productivity",
    highlights: [
      "Set due dates and reminders.",
      "Track progress and milestones.",
      "Easily sort tasks by priority",
    ],
  },
  {
    imgSrc: "/features/img-4.svg",
    title: "Customizable Workspaces",
    description: "Personalize your workspace for maximum efficiency",
    highlights: [
      "Set due dates and reminders.",
      "Track progress and milestones.",
      "Easily sort tasks by priority",
    ],
  },
];

const Features = () => {
  const [index, setIndex] = useState(0);
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    setImgIndex(index);
  }, [index]);

  return (
    <section className="text-white pt-32 relative">
      <div className="container mx-auto">
        <div className="flex gap-16">
          {/* img */}
          <motion.div
            key={featuresData[index].imgSrc}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.4,
              ease: [0.6, -0.05, 0.01, 0.99],
              delay: 0.2,
            }}
            className="hidden xl:flex justify-center flex-1 w-full h-[480px] sticky top-[calc(50%-240px)]"
          >
            <div className="relative w-full h-full">
              <Image
                src={featuresData[imgIndex].imgSrc}
                fill
                alt=""
                className="h-full object-contain"
              />
            </div>
          </motion.div>
          {/* text */}
          <div className="flex-1 flex flex-col gap-24">
            {featuresData.map((item, itemIndex) => {
              return (
                <motion.div
                  onViewportEnter={() => setIndex(itemIndex)}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ amount: "all" }}
                  key={itemIndex}
                  className="w-full h-auto xl:h-[480px] flex items-center"
                >
                  <div className="w-80vh xl:w-auto mx-auto xl:mx-0 text-center xl:text-left">
                    <h2 className="h2 mb-4">{item.title}</h2>
                    <p className="lead mb-8">{item.description}</p>
                    {/* highlights */}
                    <div className="flex flex-col gap-5 items-center xl:items-start">
                      {item.highlights.map((highlight, index) => {
                        return (
                          <div key={index} className="flex items-center gap-4">
                            <FaRegCheckCircle className="text-accent_secondary text-2xl" />
                            <p>{highlight}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
