import { motion } from "framer-motion";


const skillCategories = [
  { label: "Frontend", skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap", "Responsive Web Design"] },
  { label: "Backend", skills: ["Node.js", "Express.js", "Django", "PHP", "C#", "Python", "REST APIs"] },
  { label: "Mobile", skills: ["Flutter", "Dart", "Kotlin", "Swift", "Android Development", "Cross Platform Development", "Mobile UI Design"] },
  { label: "Databases", skills: ["MySQL", "MongoDB", "PostgreSQL", "Oracle", "Firebase", "Supabase"] },
  { label: "DevOps & Cloud", skills: ["Docker", "Docker Compose", "Kubernetes", "CI/CD", "GitHub Actions", "Jenkins", "Linux", "Nginx", "AWS Basics", "Microservices Basics"] },
  { label: "MLOps", skills: ["ML Pipeline", "Model Deployment", "Python"] },
  { label: "Web Scraping", skills: ["Python", "BeautifulSoup", "Scrapy", "Selenium", "Requests", "Playwright"] },
  { label: "Tools & Others", skills: ["Git", "GitHub", "Figma", "Lucid Chart", "Jmeter", "Visual Studio Code", "Postman", "API Integration", "Web Performance Optimization"] },
  { label: "Soft Skills", skills: ["Problem Solving", "Leadership", "Team Work", "MultiTasking", "Communication", "Project Management", "Time Management", "Risk Management"]}
];

const softSkills = skillCategories.find((cat) => cat.label === "Soft Skills")?.skills ?? [];
const mainSkillCategories = skillCategories.filter((cat) => cat.label !== "Soft Skills");


const SkillsSection = () => (
  <section id="skills" className="section-padding">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          <span className="gradient-text">Skills</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mainSkillCategories.map((cat, i) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-glass glow-border p-6"
          >
            <h3 className="text-primary font-semibold mb-4">{cat.label}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, j) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + j * 0.05 }}
                  className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 transition-all duration-200 hover:bg-primary/20 hover:border-primary/40"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Soft Skills Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: mainSkillCategories.length * 0.1 }}
          className="card-glass glow-border p-6"
        >
          <h3 className="text-primary font-semibold mb-4">Soft Skills</h3>
          <div className="flex flex-wrap gap-2">
            {softSkills.map((skill, j) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: mainSkillCategories.length * 0.1 + j * 0.05 }}
                className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 transition-all duration-200 hover:bg-primary/20 hover:border-primary/40"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default SkillsSection;
