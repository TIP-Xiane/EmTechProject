import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import flowertop from "@/assets/flowertop.png";
import flowerbot from "@/assets/flowerbot.png";

const WEDDING_DATE = new Date("2026-04-25T16:00:00");

const computeDaysUntil = (target: Date) => {
  const diff = Math.max(target.getTime() - new Date().getTime(), 0);
  return Math.floor(diff / (1000 * 60 * 60 * 24));
};

const InvitationSection = () => {
  const [guests, setGuests] = useState(0);
  const [status, setStatus] = useState<"none" | "accepted" | "declined">("none");
  const [saved, setSaved] = useState(false);
  const [daysLeft, setDaysLeft] = useState<number>(computeDaysUntil(WEDDING_DATE));

  useEffect(() => {
    const timer = window.setInterval(() => {
      setDaysLeft(computeDaysUntil(WEDDING_DATE));
    }, 1000 * 60 * 10);
    return () => window.clearInterval(timer);
  }, []);

  const handleResponse = (response: "accepted" | "declined") => {
    if (response === "declined") {
      setStatus("declined");
    } else if (response === "accepted") {
      setStatus("accepted");
      setGuests((prev) => Math.max(prev, 1));
    }
  };

  const handleChangeMind = () => {
    setStatus("none");
  };

  const handleSaveDate = () => {
    setSaved(true);
    setStatus("accepted");
    setGuests((prev) => Math.max(prev, 1));
  };

  const weddingText = useMemo(() => {
    if (status === "accepted") return "Thank you for accepting!";
    if (status === "declined") return "We’re sad you can’t make it.";
    return "Please choose your RSVP.";
  }, [status]);

  return (
    <section className="relative py-20 px-4 md:px-6 z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.65 }}
        className="max-w-2xl mx-auto rounded-[2rem] flex flex-col
                   bg-[#ede0d3]/95 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.3)] 
                   backdrop-blur-lg overflow-hidden"
      >
        {/* Top Floral Border */}
        <img
          src={flowertop}
          alt="Floral decoration"
          className="pointer-events-none w-full h-40 object-contain opacity-90"
        />

        <div className="relative p-8 md:p-12 text-center space-y-6 flex-1">
          {/* Line 1 */}
          <p className="text-xs md:text-sm font-serif tracking-wide uppercase text-amber-700 italic">
            The Wedding Celebration of
          </p>

          {/* Line 2 - Highlight */}
          <h1 className="text-5xl md:text-6xl text-amber-900" style={{ fontFamily: "'Satisfy', cursive", fontWeight: 400, letterSpacing: "0.05em" }}>
            Romeo & Juliet
          </h1>

          {/* Line 3 */}
          <p className="text-base md:text-lg text-amber-700 italic">
            You’re invited to witness a celebration of love, joy, and togetherness.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-4">
            <Button
              onClick={() => (window.location.href = "/invitation-details")}
              className="px-8 py-2 rounded-xl bg-amber-800 text-white hover:bg-amber-700 shadow-[0_10px_25px_-8px_rgba(101,67,33,0.65)] text-sm"
            >
              View Wedding Details
            </Button>
            <Button
              onClick={handleSaveDate}
              className={`px-8 py-2 rounded-xl ${
                saved ? "bg-amber-500 text-amber-900" : "bg-amber-400 text-amber-950"
              } hover:bg-amber-300 shadow-[0_10px_25px_-8px_rgba(166,118,23,0.45)] text-sm`}
            >
              {saved ? "Saved ✓" : "Save the Date"}
            </Button>
          </div>

          <p className="text-xs text-amber-700 mb-6 italic">Formal invitation to follow</p>

          {/* Stats */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3 text-center">
            <div className="rounded-2xl border border-amber-200/80 bg-amber-50/80 p-3">
              <p className="text-xs uppercase tracking-widest text-amber-600 italic">Countdown</p>
              <p className="text-xl font-bold text-amber-900">{daysLeft}d</p>
            </div>
            <div className="rounded-2xl border border-amber-200/80 bg-amber-50/80 p-3">
              <p className="text-xs uppercase tracking-widest text-amber-600 italic">RSVP</p>
              <p className="text-xl font-bold text-amber-900">
                {status === "none" ? "—" : status === "accepted" ? "Accepted" : "Declined"}
              </p>
            </div>
            <div className="rounded-2xl border border-amber-200/80 bg-amber-50/80 p-3">
              <p className="text-xs uppercase tracking-widest text-amber-600 italic">Guests</p>
              <p className="text-xl font-bold text-amber-900">{guests}</p>
            </div>
          </div>

          <p className="mt-4 text-xs text-amber-700 italic">{weddingText}</p>

          {/* RSVP Buttons */}
          <div className="mt-4 flex flex-wrap gap-3 justify-center">
            <Button
              onClick={() => handleResponse("accepted")}
              disabled={status !== "none"}
              className="px-5 py-2 rounded-full bg-amber-600 text-white hover:bg-amber-500 disabled:opacity-60 text-sm"
            >
              Accept
            </Button>
            <Button
              onClick={() => handleResponse("declined")}
              disabled={status !== "none"}
              className="px-5 py-2 rounded-full bg-slate-700 text-white hover:bg-slate-600 disabled:opacity-60 text-sm"
            >
              Decline
            </Button>
          </div>

          {status === "declined" && (
            <p className="text-xs text-amber-600 italic font-medium mt-4">
              Did you change your mind?{" "}
              <button
                onClick={handleChangeMind}
                className="font-semibold text-amber-700 hover:text-amber-800 cursor-pointer underline"
              >
                Click here
              </button>
            </p>
          )}
        </div>

        {/* Bottom Floral Border */}
        <img
          src={flowerbot}
          alt="Floral decoration"
          className="pointer-events-none w-full h-40 object-contain opacity-90"
        />
      </motion.div>
    </section>
  );
};

export default InvitationSection;

