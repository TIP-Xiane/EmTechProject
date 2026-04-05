import HamburgerMenu from "@/components/HamburgerMenu";
import HeroSection from "@/components/HeroSection";
import InvitationSection from "@/components/InvitationSection";
import AnimatedBackground from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />

      {/* Header */}
      <header className="sticky top-0 z-40 bg-gradient-to-r from-[#0f4f3f]/40 via-[#1a7e60]/30 to-[#0e5f45]/40 backdrop-blur-lg border-b border-slate-800/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <HamburgerMenu />
          <h2 className="font-heading text-sm font-semibold tracking-[0.15em] uppercase text-emerald-100">
            Emerging Technologies 1 Project
          </h2>
          <div className="w-10" />
        </div>
      </header>

      {/* Hero with expanding cards */}
      <HeroSection />

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="border-t border-border/40" />
      </div>

      {/* Invitation */}
      <InvitationSection />
    </div>
  );
};

export default Index;
