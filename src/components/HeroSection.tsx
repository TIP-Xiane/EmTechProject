import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ExpandingCards from "@/components/ExpandingCards";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm font-heading font-medium tracking-[0.25em] uppercase text-teal-200 mb-4"
            >
              Emerging Technologies 1
            </motion.p>

            <motion.h1
              className="font-heading text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[0.92] tracking-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <motion.span
                className="block text-teal-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                Know More
              </motion.span>
           
              <motion.span
                className="block text-teal-200"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              >
                About us
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-4 text-lg md:text-xl text-teal-100/90 max-w-lg"
            >
              A close-knit team of computer engineering students creating elegant, professional technology experiences.
            </motion.p>

            {/* removed email + get started form for cleaner hero */}
          </div>

          {/* Right side — expanding cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
            <ExpandingCards />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
