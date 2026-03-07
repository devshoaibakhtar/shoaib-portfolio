import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certificates = [
  { title: "Introduction to DevOps", issuer: "Coursera" },
  { title: "Introduction to IT and AWS Cloud", issuer: "Coursera" },
  { title: "Introduction to Front End Development", issuer: "Coursera" },
  { title: "Foundations of Project Management", issuer: "Coursera" },
  { title: "Agile With Atlassian Jira", issuer: "Coursera" },
  { title: "Tools of the Trade: Linux and SQL", issuer: "Coursera" },
  { title: "Foundations: Data, Data, Everywhere", issuer: "Coursera" },
  { title: "Programming Fundamentals", issuer: "Coursera" },
  { title: "Introduction to Microsoft Excel", issuer: "Coursera" },
  { title: "Build a Full Website using WordPress", issuer: "Coursera" },
  { title: "Create a Project Charter with Google Docs", issuer: "Coursera" },
  { title: "Use Canva to Design Digital Course Collateral", issuer: "Coursera" },
  { title: "Develop a Company Website with Wix", issuer: "Coursera" },
  { title: "Use WordPress to Create a Blog for your Business", issuer: "Coursera" },
  { title: "Java Basic", issuer: "HackerRank" },
  { title: "Problem Solving (Basic)", issuer: "HackerRank" },
  { title: "Introduction to Cybersecurity", issuer: "Cisco" },
  { title: "Data Analytics with Excel", issuer: "Great Learning" },
  { title: "Programming Basic", issuer: "Great Learning" },
  { title: "Front End Development – HTML", issuer: "Great Learning" },
  { title: "Frontend Development", issuer: "Scrimba" },
];

const CertificatesSection = () => (
  <section id="certificates" className="section-padding bg-secondary/20">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          <span className="gradient-text">Certificates</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {certificates.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            className="card-glass glow-border glow-border-hover p-4 flex items-start gap-3"
          >
            <Award size={18} className="text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium text-foreground text-sm leading-tight">{cert.title}</h3>
              <p className="text-xs text-muted-foreground mt-0.5">{cert.issuer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificatesSection;
