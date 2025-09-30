import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Real-time Data Pipeline",
      description: "Built a scalable ETL pipeline using Apache Kafka and Spark for processing 1M+ events per day with real-time analytics capabilities.",
      tags: ["Apache Kafka", "Spark", "Python", "AWS"],
      github: "#",
      demo: "#"
    },
    {
      title: "ML Prediction System",
      description: "Developed a machine learning model for predictive analytics with 92% accuracy, deployed using Docker and Kubernetes for scalability.",
      tags: ["Python", "TensorFlow", "Docker", "Kubernetes"],
      github: "#",
      demo: "#"
    },
    {
      title: "CI/CD Infrastructure",
      description: "Automated deployment pipeline using Jenkins, Terraform, and AWS, reducing deployment time by 70% and improving reliability.",
      tags: ["Jenkins", "Terraform", "AWS", "Docker"],
      github: "#",
      demo: "#"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Created interactive dashboards using Python and Tableau for business intelligence, serving 500+ daily users.",
      tags: ["Python", "Tableau", "SQL", "Power BI"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real-world applications showcasing data engineering, ML, and DevOps expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow flex flex-col animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex-1 border-primary/50 hover:bg-primary/10"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </Button>
                <Button 
                  size="sm"
                  className="flex-1 bg-gradient-primary"
                  asChild
                >
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
