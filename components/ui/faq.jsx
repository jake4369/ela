"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
  //   {
  //     question: "What are the benefits of sealing my driveway or patio?",
  //     answer:
  //       "Sealing helps protect your driveway or patio from water damage, stains, and general wear and tear. It acts as a barrier against the elements, preventing cracks, fading, and other long-term damage, while also enhancing the appearance by giving the surface a fresh, clean look.",
  //   },

  //   {
  //     question: "How long will it take to clean my property?",
  //     answer:
  //       "The time required depends on the size and condition of the area being cleaned. A standard driveway or patio may take 1 to 2 hours, while larger jobs such as roof cleaning or full house exteriors could take a full day. We provide an estimated timeframe during our initial assessment.",
  //   },
  //   {
  //     question: "What is a biocide treatment, and why do I need it?",
  //     answer:
  //       "A biocide treatment is used to kill and prevent the regrowth of harmful organic materials such as mold, algae, lichen, and moss on surfaces like roofs, walls, and driveways. It’s especially useful for preventing future buildup, keeping your surfaces clean for longer periods and reducing the need for frequent cleanings.",
  //   },
  //   {
  //     question:
  //       "What is driveway sinkage lifting, and when should I consider it?",
  //     answer:
  //       "Driveway sinkage lifting is a service that restores uneven or sunken areas of your driveway. If parts of your driveway have become lower than the rest due to soil settling or poor installation, it can lead to drainage issues and trip hazards. Our lifting process levels the surface, making it safe and visually appealing again.",
  //   },
];
export function FrequentlyAskedQuestionsAccordion() {
  const [open, setOpen] = useState(null);
  return (
    <div
      className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 py-20 md:grid-cols-2 md:px-8 md:py-40"
      id="faqs"
    >
      <h2 className="text-center text-4xl font-bold tracking-tight text-neutral-600 dark:text-neutral-50 md:text-left md:text-6xl">
        Frequently asked questions
      </h2>
      <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
        {FAQs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            open={open}
            setOpen={setOpen}
          />
        ))}
      </div>
    </div>
  );
}

const FAQItem = ({ question, answer, setOpen, open }) => {
  const isOpen = open === question;

  return (
    <div
      className="cursor-pointer py-4"
      onClick={() => {
        if (isOpen) {
          setOpen(null);
        } else {
          setOpen(question);
        }
      }}
    >
      <div className="flex items-start">
        <div className="relative mr-4 mt-1 h-6 w-6 flex-shrink-0">
          <IconPlus
            className={cn(
              "absolute inset-0 h-6 w-6 transform text-blue-500 transition-all duration-200",
              isOpen && "rotate-90 scale-0"
            )}
          />
          <IconMinus
            className={cn(
              "absolute inset-0 h-6 w-6 rotate-90 scale-0 transform text-blue-500 transition-all duration-200",
              isOpen && "rotate-0 scale-100"
            )}
          />
        </div>
        <div>
          <h3 className="text-lg font-medium text-neutral-700 dark:text-neutral-200">
            {question}
          </h3>
          <AnimatePresence mode="wait">
            {isOpen && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="overflow-hidden text-neutral-500 dark:text-neutral-400"
              >
                <p>{answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
