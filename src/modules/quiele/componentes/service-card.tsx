"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

type Props = {
  title: string;
  description: string;
  imageSrc: string | StaticImageData;
  imageAlt: string;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
};

export const ServiceCard = ({
  title,
  description,
  imageSrc,
  imageAlt,
  href = "#contato",
  target,
  rel,
  className = "",
}: Props) => {
  const reduce = useReducedMotion();

  return (
    <article className={`group flex h-full flex-col ${className}`}>
      <Link
        href={href}
        target={target}
        rel={rel}
        className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-dra-taupe-deep/10 transition-[box-shadow,ring-color] duration-300 hover:shadow-md hover:ring-dra-taupe-deep/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dra-taupe-deep focus-visible:ring-offset-2 focus-visible:ring-offset-white"
      >
        <div className="relative aspect-4/3 w-full overflow-hidden">
          <motion.div
            className="relative h-full w-full"
            whileHover={reduce ? undefined : { scale: 1.04 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
            />
          </motion.div>
        </div>
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <h3 className="font-serif text-lg font-semibold leading-snug text-dra-taupe-deep">
            {title}
          </h3>
          <p className="mt-2 max-w-prose flex-1 text-sm leading-relaxed text-muted">
            {description}
          </p>
        </div>
      </Link>
    </article>
  );
};
