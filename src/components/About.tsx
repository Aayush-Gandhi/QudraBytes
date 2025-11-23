import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const features = [
  "Expert team with 10+ years of experience",
  "Cutting-edge technology stack",
  "Agile development methodology",
  "24/7 support and maintenance",
  "Proven track record of success",
  "Client-focused approach",
];

export default function About() {
  return (
    <section className="py-20 bg-gray-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand1/10 border border-brand1/30 rounded-full mb-6">
              <span className="text-sm text-brand2 font-medium">About Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Building the Future of
              <span className="text-brand2"> Technology</span>
            </h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              QuadraBytes is a leading technology solutions provider dedicated
              to helping businesses thrive in the digital landscape. We combine
              innovation, expertise, and passion to deliver exceptional results.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Our team of skilled professionals works tirelessly to transform
              your vision into reality, leveraging the latest technologies and
              best practices to ensure your success.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-brand1 to-brand2 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Learn More
            </Link>
          </div>

          {/* Right Side - Visual/Stats */}
          <div className="relative">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "500+", label: "Projects", color: "from-brand1 to-purple-600" },
                { number: "200+", label: "Clients", color: "from-brand2 to-cyan-600" },
                { number: "50+", label: "Team", color: "from-brand1 to-purple-600" },
                { number: "10+", label: "Years", color: "from-brand2 to-cyan-600" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-brand2/50 transition-all duration-300"
                >
                  <div
                    className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                  >
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand1/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand2/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}

