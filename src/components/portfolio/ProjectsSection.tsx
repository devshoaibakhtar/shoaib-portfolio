import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Blog Website",
    desc: "A full-featured blog platform with user authentication and content management.",
    tech: ["HTML", "CSS", "Bootstrap", "JS", "PHP", "MySQL"],
    github: "https://github.com/devshoaibakhtar/blog_website",
  },
  {
    title: "Learning Platform",
    desc: "Dynamic web app connecting students & teachers for course management.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
  {
    title: "Hospital Management System",
    desc: "OOP-based desktop application for hospital operations management.",
    tech: ["C++", "OOP"],
    github: "https://github.com/devshoaibakhtar/hospital-management-system",
  },
  {
    title: "DevOps CI/CD Pipeline",
    desc: "Automates build, test, and deployment workflows using Docker and GitHub Actions.",
    tech: ["Docker", "GitHub Actions", "CI/CD", "Linux"],
  },
  {
    title: "Cloud Deployment Project",
    desc: "Deploying a full stack application on cloud infrastructure using containerization.",
    tech: ["Docker", "AWS", "Nginx", "Node.js"],
  },
  {
    title: "ML Model Deployment",
    desc: "Deploying a machine learning model through a Flask API with monitoring.",
    tech: ["Python", "Flask", "Docker", "ML"],
  },
  {
    title: "Android Task Manager App",
    desc: "A productivity mobile application built with Flutter for managing daily tasks.",
    tech: ["Dart", "Flutter", "Firebase"],
  },
  {
    title: "Hostel Management System",
    desc: "Desktop-based hostel management app for student records, room allocation, and fee tracking.",
    tech: ["Python", "Tkinter", "SQLite"],
    github: "https://github.com/devshoaibakhtar/hostel-management-system",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding bg-secondary/20">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          My <span className="gradient-text">Projects</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-glass glow-border glow-border-hover p-6 group flex flex-col"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <div className="flex gap-2 mt-1">
                {project.github && (
                  <a
                    href={project.github}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                  </a>
                )}
                <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4 flex-1">{project.desc}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 rounded bg-primary/10 text-primary/80 border border-primary/10"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
