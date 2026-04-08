import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Download, Send } from "lucide-react";

const titles = [
  "Full Stack Developer",
  "Cloud & DevOps Engineer",
  "MLOps Engineer",
  "Mobile App Developer",
];

const HeroSection = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  const tick = useCallback(() => {
    const full = titles[titleIndex];
    if (!deleting) {
      setText(full.substring(0, text.length + 1));
      if (text.length + 1 === full.length) {
        setTimeout(() => setDeleting(true), 1500);
      }
    } else {
      setText(full.substring(0, text.length - 1));
      if (text.length - 1 === 0) {
        setDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }
  }, [text, deleting, titleIndex]);

  useEffect(() => {
    const speed = deleting ? 40 : 80;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, deleting]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-primary/8 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-primary text-sm md:text-base font-medium tracking-widest uppercase mb-4"
        >
          Welcome to my portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
        >
          Hi, I'm{" "}
          <span className="gradient-text">Shoaib Akhtar</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl md:text-2xl lg:text-3xl font-light text-muted-foreground mb-8 h-10"
        >
          <span className="animate-typing-cursor pr-1">{text}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:shadow-[var(--glow-shadow)] hover:scale-105"
          >
            <Send size={18} />
            Hire Me
          </a>
          <a
            href="/Shoaib Resume.pdf"
            download="Shoaib-Akhtar-CV.pdf"            
            className="inline-flex items-center gap-2 px-8 py-3 border border-primary/40 text-primary font-semibold rounded-lg transition-all duration-300 hover:bg-primary/10 hover:border-primary hover:scale-105"
          >
            <Download size={18} />
            Download CV
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
