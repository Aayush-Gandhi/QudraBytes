import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description:
      "A modern e-commerce solution with advanced features and seamless user experience.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Mobile Banking App",
    category: "Mobile Development",
    description:
      "Secure and intuitive mobile banking application with real-time transactions.",
    image: "/api/placeholder/600/400",
    technologies: ["React Native", "Firebase", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Cloud Infrastructure",
    category: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure setup for enterprise-level applications.",
    image: "/api/placeholder/600/400",
    technologies: ["AWS", "Docker", "Kubernetes"],
    liveUrl: "#",
  },
  {
    title: "Analytics Dashboard",
    category: "Data Analytics",
    description:
      "Comprehensive analytics dashboard with real-time data visualization.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "D3.js", "Python"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Healthcare System",
    category: "Web Development",
    description:
      "Complete healthcare management system with patient records and scheduling.",
    image: "/api/placeholder/600/400",
    technologies: ["Vue.js", "PostgreSQL", "Node.js"],
    liveUrl: "#",
  },
  {
    title: "IoT Platform",
    category: "IoT Solutions",
    description:
      "Internet of Things platform for smart device management and monitoring.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "MQTT", "Raspberry Pi"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function Portfolio() {
  return (
    <section className="py-20 bg-darkBg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand1/10 border border-brand1/30 rounded-full mb-6">
            <span className="text-sm text-brand2 font-medium">Our Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-brand2">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our portfolio of successful projects that showcase our
            expertise and innovation.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden hover:border-brand2/50 transition-all duration-300 hover:shadow-lg hover:shadow-brand1/20 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-brand1/20 to-brand2/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl font-bold text-white/10">
                    {project.title.charAt(0)}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="text-sm text-brand2 mb-2">{project.category}</div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand2 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-brand2 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-brand2 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

