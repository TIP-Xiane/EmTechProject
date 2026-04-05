import { motion } from "framer-motion";

interface ProfileCardProps {
  name: string;
  role: string;
  imageSrc: string;
  tagline: string;
  index: number;
  isFocused: boolean;
  isBlurred: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const ProfileCard = ({
  name,
  role,
  imageSrc,
  tagline,
  index,
  isFocused,
  isBlurred,
  onHover,
  onLeave,
}: ProfileCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: isBlurred ? 0.5 : 1,
        y: 0,
        scale: isFocused ? 1.08 : isBlurred ? 0.95 : 1,
        filter: isBlurred ? "blur(3px)" : "blur(0px)",
      }}
      transition={{
        opacity: { duration: 0.6, delay: index * 0.15 },
        y: { duration: 0.6, delay: index * 0.15, ease: "easeOut" },
        scale: { duration: 0.4, ease: "easeOut" },
        filter: { duration: 0.4 },
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="relative cursor-pointer"
      style={{ zIndex: isFocused ? 10 : 1 }}
    >
      {/* Floating idle animation wrapper */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 4 + index * 0.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="glass rounded-2xl p-6 glow-hover group relative overflow-hidden">
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

          <div className="relative z-10">
            {/* Image */}
            <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-5">
              <motion.img
                src={imageSrc}
                alt={name}
                loading="lazy"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>

            {/* Info */}
            <h3 className="font-heading font-bold text-xl text-foreground mb-1">
              {name}
            </h3>
            <p className="text-sm font-heading font-medium text-primary mb-2">
              {role}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {tagline}
            </p>

            {/* CTA */}
            <motion.a
              href={`#${name.toLowerCase().replace(" ", "-")}`}
              className="mt-4 inline-flex items-center gap-2 text-sm font-heading font-medium text-primary/80 hover:text-primary transition-colors"
              whileHover={{ x: 4 }}
            >
              View Portfolio
              <span className="text-xs">→</span>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProfileCard;
