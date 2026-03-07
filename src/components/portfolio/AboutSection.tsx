import { motion } from "framer-motion";
import { User } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="container mx-auto max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="card-glass glow-border p-8 md:p-12"
      >
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-24 h-24 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
            <User size={40} className="text-primary" />
          </div>
          <div>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            I am a passionate Software Engineer specializing in Full Stack Development, Cloud Computing, DevOps, MLOps, and Mobile Application Development Android and iOS. I hold a Bachelor’s degree in Software Engineering from FAST NUCES while working as an Associate Software Engineer at Softease Technologies. I am committed to building scalable, efficient, and high-quality software solutions while continuously expanding my expertise in modern technologies and development practices.
            </p>
            <div className="flex flex-wrap gap-4 mt-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">📍 Islamabad, Pakistan</span>
              <span className="flex items-center gap-1">📧 shoaibakhtarharal@gmail.com</span>
              <span className="flex items-center gap-1">📞 +923400085733</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
