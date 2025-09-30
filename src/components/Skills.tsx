import { Card } from "@/components/ui/card";
import { Database, LineChart, Server, Code, GitBranch, Container } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Data Engineering",
      icon: Database,
      skills: [
        "Apache Spark",
        "Apache Kafka",
        "Airflow",
        "ETL Pipelines",
        "SQL & NoSQL",
        "Data Warehousing",
        "Snowflake",
        "BigQuery"
      ]
    },
    {
      title: "Data Science",
      icon: LineChart,
      skills: [
        "Python (Pandas, NumPy)",
        "Machine Learning",
        "TensorFlow & PyTorch",
        "Statistical Analysis",
        "Data Visualization",
        "Scikit-learn",
        "Jupyter Notebooks",
        "A/B Testing"
      ]
    },
    {
      title: "DevOps",
      icon: Server,
      skills: [
        "Docker & Kubernetes",
        "CI/CD (Jenkins, GitLab)",
        "AWS/Azure/GCP",
        "Terraform",
        "Ansible",
        "Linux Administration",
        "Monitoring (Prometheus)",
        "Shell Scripting"
      ]
    },
    {
      title: "Programming",
      icon: Code,
      skills: [
        "Python",
        "SQL",
        "Bash/Shell",
        "Java",
        "Scala",
        "R",
        "JavaScript",
        "Go"
      ]
    },
    {
      title: "Version Control",
      icon: GitBranch,
      skills: [
        "Git",
        "GitHub",
        "GitLab",
        "Bitbucket",
        "Git Workflows",
        "Code Review"
      ]
    },
    {
      title: "Tools & Platforms",
      icon: Container,
      skills: [
        "Databricks",
        "Tableau",
        "Power BI",
        "Grafana",
        "ELK Stack",
        "Redis",
        "RabbitMQ",
        "Apache Hadoop"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building data-driven solutions and scalable infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 text-sm bg-secondary/50 rounded-full text-foreground hover:bg-primary/20 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
