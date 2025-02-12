import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award, GraduationCap, Users } from "lucide-react";

const achievements = {
  hackathons: [
    {
      title: "CFG Hackathon 2023",
      description: "Led the team to win at IIT Mandi.",
      proof: "https://drive.google.com/file/d/1aSJOu9uM2YQD_WTQJ5UlC0RRxRuReRIZ/view?usp=sharing"
    },
    {
      title: "IIT Bombay HERE Hackathon 2023",
      description: "Finalist",
      proof: "https://drive.google.com/file/d/1XZKqRPMTzOMDzXhAHlA3VcLjB8Id7PpS/view?usp=sharing"
    }
  ],
  certifications: [
    {
      title: "Google Cybersecurity Professional Certificate",
      link: "https://www.coursera.org/account/accomplishments/specialization/P83XXESWEWSE"
    },
    {
      title: "IBM Certificate in Computer Vision and Image Processing",
      link: "https://www.coursera.org/account/accomplishments/verify/D5VFW37FO4KW"
    },
    {
      title: "FreeCodeCamp Certificate in Scientific Computing with Python",
      link: "https://freecodecamp.org/certification/jigyasu2004/scientific-computing-with-python-v7"
    },
    {
      title: "Python for Data Science and Machine Learning Bootcamp",
      link: "https://www.udemy.com/certificate/UC-f78b19ca-9832-4589-b4b7-966d68987092/"
    }
  ],
  academic: [
    {
      title: "JEE Advanced",
      description: "Qualified with a rank in the top 2% percentile"
    }
  ],
  extracurricular: [
    {
      title: "Volunteer at Gyanarpan",
      description: "Contributed to RGIPT's social organization dedicated to educating underprivileged students"
    },
    {
      title: "Leadership Role",
      description: "Coordinator for the ST Council Program Team"
    }
  ]
};

export function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Achievements</h2>

        {/* Hackathons */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Award className="h-6 w-6 text-primary" />
            Hackathon Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.hackathons.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-2">{achievement.title}</h4>
                    <p className="text-muted-foreground mb-4">{achievement.description}</p>
                    <Button variant="outline" asChild size="sm">
                      <a
                        href={achievement.proof}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Award className="h-4 w-4" />
                        View Certificate
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            Professional Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-4">{cert.title}</h4>
                    <Button variant="outline" asChild size="sm">
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        View Certificate
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Academic & Extra-curricular */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              Academic Achievement
            </h3>
            <Card>
              <CardContent className="p-6">
                {achievements.academic.map((achievement, index) => (
                  <div key={index} className="mb-4 last:mb-0">
                    <h4 className="font-semibold">{achievement.title}</h4>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Users className="h-6 w-6 text-primary" />
              Extra-Curricular Activities
            </h3>
            <Card>
              <CardContent className="p-6">
                {achievements.extracurricular.map((activity, index) => (
                  <div key={index} className="mb-4 last:mb-0">
                    <h4 className="font-semibold">{activity.title}</h4>
                    <p className="text-muted-foreground">{activity.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}