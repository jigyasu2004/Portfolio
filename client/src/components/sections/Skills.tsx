import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "Three.js"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
  },
  {
    category: "Tools",
    items: ["Git", "VS Code", "Docker", "Figma"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    {skillGroup.category}
                  </h3>
                  <div className="space-y-3">
                    {skillGroup.items.map((skill) => (
                      <div key={skill} className="relative">
                        <div className="h-2 bg-muted rounded">
                          <motion.div
                            className="h-full bg-primary rounded"
                            initial={{ width: 0 }}
                            whileInView={{ width: "75%" }}
                            transition={{ duration: 1, delay: 0.5 }}
                            viewport={{ once: true }}
                          />
                        </div>
                        <span className="text-sm text-muted-foreground mt-1 block">
                          {skill}
                        </span>
                      </div>
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
