import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand1/20 via-darkBg to-brand2/20 animate-pulse" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand1/10 border border-brand1/30 rounded-full mb-8">
          <span className="w-2 h-2 bg-brand2 rounded-full animate-pulse" />
          <span className="text-sm text-gray-300">Welcome to QuadraBytes</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="text-white">Transforming Ideas Into</span>
          <br />
          <span className="bg-gradient-to-r from-brand1 to-brand2 bg-clip-text text-transparent">
            Digital Excellence
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          We deliver cutting-edge technology solutions that drive innovation
          and transform businesses for the digital age.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link
            to="/contact"
            className="group px-8 py-4 bg-gradient-to-r from-brand1 to-brand2 text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-brand1/50 transition-all duration-300 flex items-center gap-2"
          >
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/services"
            className="px-8 py-4 border-2 border-gray-600 text-white rounded-lg font-semibold text-lg hover:border-brand2 hover:text-brand2 transition-all duration-300"
          >
            Our Services
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { number: "500+", label: "Projects Completed" },
            { number: "200+", label: "Happy Clients" },
            { number: "50+", label: "Team Members" },
            { number: "10+", label: "Years Experience" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand2 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-brand2 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
}

