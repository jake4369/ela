"use client";

import React, { useId, useState } from "react";
import { motion } from "framer-motion";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

const FAQs = [
  {
    question: "Will pressure washing damage my surfaces?",
    answer:
      "When done correctly, pressure washing will not damage your surfaces. We carefully assess the material of the surface and adjust the water pressure accordingly. For more delicate surfaces, we recommend soft washing to prevent any potential harm while still providing a deep clean.",
  },
  {
    question:
      "What is the difference between pressure washing and soft washing?",
    answer:
      "Pressure washing uses high-pressure water to remove dirt, grime, and stains from hard surfaces like driveways, sidewalks, and patios. It’s ideal for tough materials like concrete and stone. Soft washing, on the other hand, uses low pressure combined with specialized cleaning solutions to gently clean more delicate surfaces like roofs, siding, and painted surfaces without causing damage.",
  },
  {
    question: "How often should I have my property pressure washed?",
    answer:
      "The frequency depends on several factors, such as your location, climate, and the material of your surfaces. Typically, we recommend pressure washing once or twice a year to keep your surfaces clean and well-maintained. High-traffic areas or those prone to algae or mildew buildup may need more frequent cleaning.",
  },
  {
    question: "Is pressure washing safe for my plants and landscaping?",
    answer:
      "Yes, we take precautions to protect your plants and landscaping. When necessary, we use eco-friendly cleaning solutions that are safe for the environment. We also rinse and cover plants to ensure they are not harmed during the cleaning process.",
  },
  {
    question: "What types of surfaces can be pressure washed?",
    answer:
      "We can pressure wash a wide variety of outdoor surfaces, including concrete, brick, stone, asphalt, wood decks, fences, vinyl siding, and more. We tailor the pressure and cleaning method to the specific material to ensure a safe and effective clean.",
  },
  {
    question:
      "How long does it take for surfaces to dry after cleaning or sealing?",
    answer:
      "Drying time varies depending on the surface, weather conditions, and the type of service. Typically, pressure-washed surfaces dry in a few hours, while surfaces treated with sealers may take 24 to 48 hours to fully cure. We advise keeping traffic off sealed surfaces until they are completely dry.",
  },
];

export function FrequentlyAskedQuestionsAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((previousIndex) => (previousIndex === index ? null : index));
  };

  return (
    <section
      id="faqs"
      aria-labelledby="faqs-heading"
      className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 pt-20 md:grid-cols-2 md:px-8 md:py-40"
    >
      <h2
        id="faqs-heading"
        className="text-center text-4xl font-bold tracking-tight text-neutral-600 dark:text-neutral-50 md:text-left md:text-6xl"
      >
        Frequently Asked Questions
      </h2>

      <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
        {FAQs.map((faq, index) => (
          <FAQItem
            key={faq.question}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </section>
  );
}

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  const id = useId();

  const questionId = `${id}-question`;
  const answerId = `${id}-answer`;

  return (
    <div className="py-4">
      <h3 className="m-0">
        <button
          type="button"
          id={questionId}
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={answerId}
          className="flex w-full items-start gap-4 rounded-md text-left text-lg font-medium text-neutral-700 dark:text-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
        >
          <span
            className="relative mt-1 h-6 w-6 flex-shrink-0"
            aria-hidden="true"
          >
            <IconPlus
              className={cn(
                "absolute inset-0 h-6 w-6 transform text-blue-500 dark:text-blue-400 transition-all duration-200",
                isOpen && "rotate-90 scale-0",
              )}
            />

            <IconMinus
              className={cn(
                "absolute inset-0 h-6 w-6 rotate-90 scale-0 transform text-blue-500 dark:text-blue-400 transition-all duration-200",
                isOpen && "rotate-0 scale-100",
              )}
            />
          </span>

          <span>{question}</span>
        </button>
      </h3>

      <motion.div
        id={answerId}
        role="region"
        aria-labelledby={questionId}
        aria-hidden={!isOpen}
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
          ease: "easeOut",
        }}
        className="overflow-hidden"
      >
        <p className="pl-10 pt-3 text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
          {answer}
        </p>
      </motion.div>
    </div>
  );
};
