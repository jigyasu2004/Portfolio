import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import SkillsPage from "@/pages/skills";
import ProjectsPage from "@/pages/projects";
import AchievementsPage from "@/pages/achievements";
import ContactPage from "@/pages/contact";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/skills" component={SkillsPage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/achievements" component={AchievementsPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFound} />
      </Switch>
      <Toaster />
    </QueryClientProvider>
  );
}