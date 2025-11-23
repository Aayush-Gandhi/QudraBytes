import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ],
  services: [
    { name: "Web Development", path: "/services" },
    { name: "Mobile Apps", path: "/services" },
    { name: "Cloud Solutions", path: "/services" },
    { name: "Cybersecurity", path: "/services" },
  ],
  resources: [
    { name: "Blog", path: "#" },
    { name: "Documentation", path: "#" },
    { name: "Support", path: "/contact" },
    { name: "Privacy Policy", path: "#" },
  ],
};

const socialLinks = [
  { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" },
  { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
  { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
  { icon: <Mail className="w-5 h-5" />, href: "/contact", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/">
              <h2 className="text-2xl font-bold text-white mb-4 hover:opacity-80 transition-opacity inline-block">
                Quadra<span className="text-brand2">Bytes</span>
              </h2>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transforming ideas into digital excellence. We deliver
              cutting-edge technology solutions that drive innovation and
              transform businesses.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-brand2 hover:border-brand2/50 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-brand2 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-brand2 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  {link.path === "#" ? (
                    <a
                      href={link.path}
                      className="text-gray-400 hover:text-brand2 transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-brand2 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} QuadraBytes. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-brand2 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-brand2 transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

