import { useState } from "react";
import { motion } from "framer-motion";
import xianeg from "@/assets/xiane-g.png";
import kyleImg from "@/assets/kyle.jpg";
import larryImg from "@/assets/larry.png";
// Lalagay kapa ng mga details sa bawat profile, tulad ng role, tagline, at portfolio URL.
const profiles = [
  {
    name: "Xiane Heins Guevara",
    role: "Computer Engineering Student",
    image: xianeg,
    tagline: "Crafting Software and Hardware",
    portfolioUrl: "https://my-xportfolio.vercel.app/",
  },
  {
    name: "Jan Kyle Cayanan",
    role: "Computer Engineering Student",
    image: kyleImg,
    tagline: "Embeded Systems Enthusiast",
    portfolioUrl: "https://portfolio-three-peach-17uh0ab0z2.vercel.app/",
  },
  {
    name: "Larry Urmatan",
    role: "Computer Engineering Student",
    image: larryImg,
    tagline: "Debugging life’s code",
    portfolioUrl: "https://mlcurmatan.github.io/urmatan-final/",
  },
];

const ExpandingCards = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex gap-4 h-[380px] md:h-[420px] w-full p-1">
      {profiles.map((profile, i) => {
        const isActive = activeIndex === i;
        return (
          <motion.div
            key={profile.name}
            className="relative overflow-hidden cursor-pointer rounded-3xl"
            style={{ boxShadow: isActive ? "0 22px 70px -18px rgba(0,80,60,0.45), inset 0 0 0 1px rgba(255,255,255,0.12)" : "0 8px 30px -10px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.08)" }}
            animate={{
              flex: isActive ? 3 : 0.8,
            }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            onMouseEnter={() => setActiveIndex(i)}
          >
            {/* Image */}
            <motion.img
              src={profile.image}
              alt={profile.name}
              className="absolute inset-0 w-full h-full object-cover"
              animate={{ scale: isActive ? 1.05 : 1.15 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-emerald-950/40 to-transparent" />

            {/* Active content */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 p-8 z-10"
              style={{ pointerEvents: isActive ? "auto" : "none" }}
              animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <p className="text-xs md:text-sm font-heading font-semibold tracking-[0.18em] uppercase text-emerald-200/90 mb-1">
                {profile.role}
              </p>
              <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-emerald-100">
                {profile.name}
              </h3>
              <p className="text-sm md:text-base text-emerald-100/75 mt-1">
                {profile.tagline}
              </p>
              <p className="text-xs md:text-sm mt-2">
                <a
                  href={profile.portfolioUrl ?? "#"}
                  aria-label={`View ${profile.name} portfolio`}
                  className="inline-flex items-center justify-center rounded-full bg-emerald-500/80 hover:bg-emerald-400 transition-colors p-2"
                >
                  <span className="sr-only">View portfolio</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-white">
                    <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </a>
              </p>
            </motion.div>

            {/* Collapsed label */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center z-0"
              style={{ pointerEvents: isActive ? "none" : "auto" }}
              animate={{ opacity: isActive ? 0 : 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <span
                className="font-heading font-bold text-base text-emerald-100/75 tracking-widest uppercase"
                style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
              >
                {profile.name.split(" ")[0]}
              </span>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ExpandingCards;
