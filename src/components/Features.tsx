import { Target, Users, Award, Clock } from "lucide-react";

const features = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Goal-Oriented",
    description:
      "We focus on achieving your business objectives with precision and dedication.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Expert Team",
    description:
      "Our skilled professionals bring years of experience to every project.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Quality First",
    description:
      "We maintain the highest standards of quality in all our deliverables.",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Timely Delivery",
    description:
      "We respect deadlines and ensure projects are completed on time.",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand1/10 border border-brand1/30 rounded-full mb-6">
            <span className="text-sm text-brand2 font-medium">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Core <span className="text-brand2">Features</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover what makes us the preferred choice for technology solutions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-brand2/50 transition-all duration-300 hover:shadow-lg hover:shadow-brand1/20"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-brand1 to-brand2 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

