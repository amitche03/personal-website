import type { Project } from "@/components/project-card";

export const projects: Project[] = [
  {
    slug: "workflow-data-fabric",
    title: "Workflow Data Fabric",
    summary:
      "Full-stack features integrating external data lakes and AI agent workflows on ServiceNow.",
    tags: ["JavaScript", "ServiceNow", "AI", "Trino", "Java", "Seismic", "Docker"],
  },
  {
    slug: "rover-rideshare",
    title: "Rover Rideshare",
    summary:
      "Solo-founded ridesharing MVP with Python/Flask backend and React Native app; early revenue generated.",
    tags: ["Python", "Flask", "GCS", "React Native"],
  },
  {
    slug: "luminairy-accessible-nav",
    title: "Luminairy Accessible Navigation",
    summary:
      "iOS app aiding campus navigation for students with disabilities; research-collaboration project.",
    tags: ["SwiftUI", "Node", "CloudApps"],
  },
  {
    slug: "rice-savers",
    title: "Rice Savers",
    summary: "HACK NC Winning Project: Webapp for identifying crop disease using Image Analysis Machine Learning.",
    tags: ["Python", "TensorFlow", "Flask", "HTML", "CSS"],
  }
];
