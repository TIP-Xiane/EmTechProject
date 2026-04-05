import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
//lagayan ko nalang ng url sa portfolio url para makita yung details ng bawat member kapag na click yung name nila sa hamburger menu.
const teamMembers = [
  {
    name: "Xiane Heins Guevara",
    role: "CPE Student",
    details: "Growth‑minded creator focused on solving real problems. Passionate about crafting software that empowers people and shapes the future.",
    portfolioUrl: "https://my-xportfolio.vercel.app/",
  },
  { // 
    name: "Jan Kyle Cayanan",
    role: "CPE Student",
    details: "Computer Engineering student skilled in Matlab, C, and embedded systems.",
    portfolioUrl: "https://portfolio-three-peach-17uh0ab0z2.vercel.app/",
  },
  {
    name: "Larry Urmatan",
    role: "CPE Student",
    details: "Computer engineer specializing in mechatronics and robotics`, with a passion for embedded systems and automation.",
    portfolioUrl: "https://mlcurmatan.github.io/urmatan-final/",
  },
];

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMember, setActiveMember] = useState<string | null>(null);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="relative z-50 p-3 rounded-xl bg-background/20 backdrop-blur-md border border-border/30 hover:bg-background/30 transition-all duration-200 shadow-lg hover:shadow-xl"
        aria-label="Open menu"
      >
        <Menu className="w-5 h-5 text-foreground" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/90 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => {
                setIsOpen(false);
                setActiveMember(null);
              }}
            />

            <motion.aside
              className="fixed inset-y-0 left-0 z-50 h-screen w-[60vw] max-w-xs bg-slate-900/95 border-r border-teal-600/20 backdrop-blur-sm shadow-2xl"
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ type: "spring", damping: 22, stiffness: 220 }}
            >
              <div className="flex items-center justify-between px-4 py-4 border-b border-teal-500/30">
                <h3 className="text-lg font-semibold text-emerald-100">Team Navigator</h3>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setActiveMember(null);
                  }}
                  className="p-2 rounded-md bg-emerald-400/20 hover:bg-emerald-400/30 transition"
                  aria-label="Close sidebar"
                >
                  <X className="w-4 h-4 text-emerald-100" />
                </button>
              </div>

              <div className="p-4 space-y-3 overflow-auto h-[calc(100%-130px)]">
                {teamMembers.map((member) => {
                  const expanded = activeMember === member.name;
                  return (
                    <button
                      key={member.name}
                      onClick={() => setActiveMember(expanded ? null : member.name)}
                      className={`w-full text-left rounded-xl p-4 border transition-all duration-200 ${
                        expanded
                          ? "bg-emerald-500/20 border-emerald-300/50"
                          : "bg-white/5 border-white/10 hover:bg-white/10"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-emerald-100">{member.name}</p>
                          <p className="text-xs text-emerald-200">{member.role}</p>
                        </div>
                        <span className="text-xs text-emerald-300">{expanded ? "-" : "+"}</span>
                      </div>
                      {expanded && (
                        <>
                          <p className="mt-3 text-xs text-emerald-200">
                           Portfolio link:
                            <a
                              href={member.portfolioUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="ml-1 text-emerald-100 underline hover:text-emerald-50"
                            >
                              View portfolio
                            </a>
                          </p>
                          <motion.p
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.15 }}
                            className="mt-2 text-xs text-emerald-100"
                          >
                            {member.details}
                          </motion.p>
                        </>
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="px-4 py-3 border-t border-teal-500/20 bg-slate-900/80">
                <p className="text-xs text-emerald-200 font-medium">Team Insights</p>
                <p className="text-[11px] text-emerald-100/80 mt-1">
                  Trusted people, Computer Engineering Students, Diversified Specialities.
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default HamburgerMenu;
