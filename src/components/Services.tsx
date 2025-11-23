import { Code, Smartphone, Cloud, Shield, Zap, BarChart } from "lucide-react";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Web Development",
    description:
      "Custom web applications built with modern technologies for optimal performance and user experience.",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile applications that deliver seamless experiences across all devices.",
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and migration services to power your business growth.",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Cybersecurity",
    description:
      "Comprehensive security solutions to protect your digital assets and sensitive data.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Digital Transformation",
    description:
      "End-to-end digital transformation strategies to modernize your business operations.",
  },
  {
    icon: <BarChart className="w-8 h-8" />,
    title: "Data Analytics",
    description:
      "Advanced analytics and business intelligence solutions to drive data-driven decisions.",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-darkBg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand1/10 border border-brand1/30 rounded-full mb-6">
            <span className="text-sm text-brand2 font-medium">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What We <span className="text-brand2">Offer</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to meet your business
            needs and drive success.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-brand2/50 transition-all duration-300 hover:shadow-lg hover:shadow-brand1/20 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-brand1 to-brand2 rounded-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand2 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>

              {/* Hover Arrow */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-0.5 bg-brand2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

