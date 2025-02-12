import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Doctor ROBO (Medical Kiosk)",
    description: "Developed for the IIT Mandi Hackathon. An Android app that diagnoses diseases and provides precautions based on symptoms. Responsible for creating the ML model and integrating it into the app via an API.",
    tech: ["Android", "Machine Learning", "API Integration"],
    link: "https://github.com/jigyasu2004/Doctor-Robo.git",
  },
  {
    title: "e-Librarian",
    description: "A comprehensive library management system developed as a college project using the MERN stack. Features include book management, user authentication, and borrowing system.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    link: "https://github.com/jigyasu2004/web_project_eLibrarian.git",
  },
  {
    title: "Data Science Projects",
    description: "A collection of projects completed during the Python for Data Science and Machine Learning Bootcamp by Jose Portilla, demonstrating proficiency in data analysis and visualization.",
    tech: ["Python", "Pandas", "Numpy", "Scikit-learn"],
    link: "https://github.com/jigyasu2004/Data_science_course_project.git",
  },
  {
    title: "Machine Learning Projects",
    description: "Comprehensive projects showcasing various machine learning algorithms and techniques, completed as part of an advanced machine learning course.",
    tech: ["Python", "TensorFlow", "Machine Learning", "Deep Learning"],
    link: "https://github.com/jigyasu2004/ML_course_project.git",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{project.title}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      asChild
                      className="h-8 w-8"
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                  </CardTitle>
                  <CardDescription className="text-sm line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}