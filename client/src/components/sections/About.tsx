import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section className="min-h-[calc(100vh-4rem)] pt-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <Card>
              <CardContent className="p-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Hi, I'm Jigyasu Patel, a passionate developer focused on creating
                  innovative solutions and engaging user experiences. With a strong
                  foundation in web technologies and a keen eye for design, I strive
                  to build applications that make a difference.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">1</span>
              </div>
              <div>
                <h3 className="font-semibold">Problem Solver</h3>
                <p className="text-muted-foreground">
                  Turning complex challenges into elegant solutions
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">2</span>
              </div>
              <div>
                <h3 className="font-semibold">Fast Learner</h3>
                <p className="text-muted-foreground">
                  Always eager to learn new technologies and best practices
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">3</span>
              </div>
              <div>
                <h3 className="font-semibold">Team Player</h3>
                <p className="text-muted-foreground">
                  Excellent communication and collaboration skills
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}