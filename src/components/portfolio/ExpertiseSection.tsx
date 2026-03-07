import { motion } from "framer-motion";

const expertiseData = [
  { icon: "🌐", title: "Full Stack Development", desc: "Building scalable web apps using React, Next.js, Node.js, Django, PHP" },
  { icon: "☁️", title: "Cloud Computing", desc: "Deploying and managing applications on cloud infrastructure" },
  { icon: "⚙️", title: "DevOps", desc: "Docker, Kubernetes, CI/CD Pipelines, GitHub Actions, Jenkins" },
  { icon: "🤖", title: "MLOps", desc: "Managing ML model lifecycle, deployment pipelines, monitoring" },
  { icon: "📱", title: "Mobile App Development", desc: "Building modern mobile applications for both Android and iOS platforms using cross platform frameworks and native tools. Focus on performance, clean architecture, and user friendly design." },
  { icon: "🎨", title: "UI / UX Design", desc: "Designing clean and user friendly interfaces for web and mobile applications with focus on usability, accessibility, and modern design standards." },
];

const ExpertiseSection = () => (
  <section id="expertise" className="section-padding bg-secondary/20">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          My <span className="gradient-text">Expertise</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {expertiseData.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-glass glow-border glow-border-hover p-6 text-center"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExpertiseSection;
