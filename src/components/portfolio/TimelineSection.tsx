import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const timeline = [
  {
    type: "work",
    title: "Associate Software Engineer",
    org: "Softease Technologies",
    period: "May 2024 – Present",
    detail: "Part-time, 20hrs/week",
  },
  {
    type: "work",
    title: "Internee",
    org: "Softease Technologies",
    period: "Aug 2023 – Feb 2024",
    detail: "",
  },
  {
    type: "edu",
    title: "BS Software Engineering",
    org: "FAST-NUCES",
    period: "2022 – Present",
    detail: "",
  },
];

const TimelineSection = () => (
  <section id="experience" className="section-padding">
    <div className="container mx-auto max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Experience & <span className="gradient-text">Education</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
      </motion.div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-primary/20" />

        {timeline.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className={`relative flex items-start mb-10 ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Dot */}
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background z-10 mt-2" />

            {/* Content */}
            <div className={`ml-14 md:ml-0 md:w-[45%] ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
              <div className="card-glass glow-border p-5">
                <div className="flex items-center gap-2 mb-1 justify-start">
                  {item.type === "work" ? (
                    <Briefcase size={16} className="text-primary" />
                  ) : (
                    <GraduationCap size={16} className="text-primary" />
                  )}
                  <span className="text-xs text-primary font-medium">{item.period}</span>
                </div>
                <h3 className="font-semibold text-foreground text-left">{item.title}</h3>
                <p className="text-sm text-muted-foreground text-left">{item.org}</p>
                {item.detail && (
                  <p className="text-xs text-muted-foreground mt-1 text-left">{item.detail}</p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TimelineSection;
