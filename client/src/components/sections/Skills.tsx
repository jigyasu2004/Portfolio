import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Stars } from "../canvas/Stars";

const skills = [
  {
    category: "Programming Languages & Web Technologies",
    items: ["C", "Python", "HTML5", "CSS", "JavaScript", "React", "ExpressJS", "NodeJS"],
  },
  {
    category: "Data Science & ML",
    items: ["Numpy", "Pandas", "Seaborn", "Matplotlib", "TensorFlow", "Scikit-learn", "Computer Vision", "Federated Learning"],
  },
  {
    category: "Databases & Tools",
    items: ["MySQL", "MongoDB", "OpenCV", "Git", "Windows", "Linux", "SIEM", "IDM"],
  },
  {
    category: "Coursework",
    items: ["Data Structures", "Algorithms", "AI", "Deep Learning", "Operating Systems", "Database Management", "Web Development"],
  }
];

export function Skills() {
  return (
    <section className="min-h-[calc(100vh-4rem)] pt-20 bg-muted/50">
      <div className="absolute inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />

            <Stars />
          </Suspense>
        </Canvas>
      </div>       
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <div className="grid grid-cols-2 gap-3">
                    {skillGroup.items.map((skill) => (
                      <div key={skill} className="relative">
                        <div className="h-2 bg-muted rounded">
                          <motion.div
                            className="h-full bg-primary rounded"
                            initial={{ width: 0 }}
                            whileInView={{ width: "85%" }}
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