import { Quote, Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechCorp Inc.",
    content:
      "QuadraBytes transformed our digital infrastructure completely. Their expertise and dedication are unmatched. Highly recommended!",
    rating: 5,
    avatar: "/api/placeholder/100/100",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    company: "InnovateLabs",
    content:
      "Working with QuadraBytes was a game-changer. They delivered beyond our expectations and helped us achieve our goals faster.",
    rating: 5,
    avatar: "/api/placeholder/100/100",
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "StartupHub",
    content:
      "The team at QuadraBytes is professional, responsive, and incredibly skilled. They turned our vision into reality seamlessly.",
    rating: 5,
    avatar: "/api/placeholder/100/100",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-darkBg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand1/10 border border-brand1/30 rounded-full mb-6">
            <span className="text-sm text-brand2 font-medium">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our <span className="text-brand2">Clients Say</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say
            about working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-brand2/50 transition-all duration-300 hover:shadow-lg hover:shadow-brand1/20 relative"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-brand2/30 absolute top-6 right-6" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-brand2 text-brand2"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 mb-6 leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-brand1 to-brand2 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-semibold">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-400">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

