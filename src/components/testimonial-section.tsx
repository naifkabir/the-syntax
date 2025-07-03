"use client";

import { cn } from "@/lib/utils";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { Reveal } from "@/utils/reveal";

const TestimonialSection = () => {
  return (
    <section className="w-full grid justify-center relative overflow-hidden px-6 lg:px-16 xl:px-32 py-16 md:py-20">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-black"></div>

      <div className="grid place-items-center text-center max-w-5xl mx-auto text-white z-10 mb-16">
        <Reveal>
          <span className="uppercase text-gray-400 font-semibold text-sm tracking-widest">
            Thousands Trust Firestone
          </span>
          <h1
            className="text-2xl sm:text-4xl font-extrabold w-full md:w-[60%] mx-auto"
            style={{ lineHeight: "1.4" }}
          >
            Don&apos;t take our word for it, see what our students say
          </h1>
          <p className="text-gray-400 text-[14px] md:text-[17px] font-medium w-full my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            illo adipisci amet soluta commodi earum, aut pariatur tenetur
            sapiente fugiat enim ratione a repellat, possimus molestiae beatae
            saepe. Molestiae possimus saepe quasi at obcaecati facilis culpa
            architecto, consectetur error nihil distinctio accusantium expedita
            dolor? Impedit molestias sit natus dolorem reiciendis!
          </p>
        </Reveal>
      </div>

      <section className="z-10">
        <section className="w-full h-full">
          <div>
            <div className="rounded-md flex flex-col antialiased dark:bg-grid-black/[0.05] items-center justify-center relative">
              <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
              />
            </div>
          </div>
          <div className="mt-10">
            <div className="rounded-md flex flex-col antialiased dark:bg-grid-black/[0.05] items-center justify-center relative">
              <InfiniteMovingCards
                items={testimonials}
                direction="left"
                speed="slow"
              />
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default TestimonialSection;

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
    image: "/testimonial-section/men.jpg",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
    image: "/testimonial-section/men.jpg",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
    image: "/testimonial-section/men.jpg",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
    image: "/testimonial-section/men.jpg",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
    image: "/testimonial-section/men.jpg",
  },
];
