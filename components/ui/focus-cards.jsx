"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Card = React.memo(({ card }) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
      <figure className="relative h-60 w-full overflow-hidden md:h-96">
        <Image
          src={card.src}
          alt={card.alt || card.title}
          fill
          loading="lazy"
          quality={75}
          sizes="(min-width: 1024px) 310px, (min-width: 768px) 30vw, 90vw"
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.025] motion-reduce:transition-none"
        />

        <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent px-4 pb-5 pt-16">
          <h3 className="text-lg font-semibold leading-snug text-white md:text-xl">
            {card.title}
          </h3>
        </figcaption>
      </figure>

      <div className="flex flex-1 flex-col px-4 pb-5 pt-4">
        {card.description && (
          <p className="text-sm leading-6 text-gray-700 dark:text-neutral-300">
            {card.description}
          </p>
        )}

        {card.serviceLink && (
          <Link
            href={card.serviceLink.href}
            className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-semibold text-sky-700 underline underline-offset-4 transition-colors hover:text-sky-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-600 dark:text-sky-300 dark:hover:text-sky-200"
          >
            {card.serviceLink.label}

            <span aria-hidden="true">→</span>
          </Link>
        )}
      </div>
    </article>
  );
});

Card.displayName = "Card";

export function FocusCards({ cards }) {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-3 max-w-5xl mx-auto md:px-8 w-full">
      {cards.map((card) => (
        <Card key={card.src} card={card} />
      ))}
    </div>
  );
}
