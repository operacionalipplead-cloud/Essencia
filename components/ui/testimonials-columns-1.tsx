import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

interface TestimonialsColumnProps {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}

export const TestimonialsColumn = (props: TestimonialsColumnProps) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2)].map((_, listIndex) => (
          <React.Fragment key={listIndex}>
            {props.testimonials.map(({ text, image, name, role }, i) => (
              <div
                className="p-8 rounded-3xl bg-white border border-sage-100 shadow-sm hover:shadow-md transition-shadow max-w-xs w-full"
                key={`${listIndex}-${i}`}
              >
                <div className="text-gray-600 leading-relaxed text-sm">"{text}"</div>
                <div className="flex items-center gap-3 mt-6 border-t border-sage-50 pt-4">
                  <img
                    width={40}
                    height={40}
                    src={image}
                    alt={name}
                    className="h-10 w-10 rounded-full object-cover border border-sage-200"
                  />
                  <div className="flex flex-col">
                    <div className="font-bold text-gray-900 text-sm tracking-tight leading-5">
                      {name}
                    </div>
                    <div className="text-xs text-sage-600 font-medium leading-5 opacity-80 tracking-tight">
                      {role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};
