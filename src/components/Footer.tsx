import { Link } from "react-router-dom";
import { Dumbbell, Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-gray pt-16 pb-8 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
             <Link to="/" className="flex items-center gap-2 group">
              <Dumbbell className="h-8 w-8 text-brand-primary" />
              <span className="font-heading text-3xl tracking-wider text-brand-light">
                ONYX<span className="text-brand-primary">FIT</span>
              </span>
            </Link>
            <p className="text-gray-400 max-w-xs leading-relaxed">
              Premium training facility built for serious results. State-of-the-art equipment, expert coaching, and a community that pushes you further.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="h-10 w-10 rounded-full bg-brand-dark flex items-center justify-center text-gray-400 hover:text-brand-primary hover:bg-brand-dark/80 transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-brand-dark flex items-center justify-center text-gray-400 hover:text-brand-primary hover:bg-brand-dark/80 transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-brand-dark flex items-center justify-center text-gray-400 hover:text-brand-primary hover:bg-brand-dark/80 transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xl mb-6 text-brand-light">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-brand-primary transition-colors">About Us</Link></li>
              <li><Link to="/#programs" className="text-gray-400 hover:text-brand-primary transition-colors">Programs & Classes</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-brand-primary transition-colors">Memberships</Link></li>
              <li><Link to="/#coaches" className="text-gray-400 hover:text-brand-primary transition-colors">Our Trainers</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-brand-primary transition-colors">Fitness Blog</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-xl mb-6 text-brand-light">Visit Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-primary shrink-0 mt-0.5" />
                <span className="text-gray-400">123 Iron Street, Fitness District<br/>New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-brand-primary shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-brand-primary shrink-0" />
                <span className="text-gray-400">join@onyxfit.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="font-heading text-xl mb-6 text-brand-light">Free Trial</h4>
            <p className="text-gray-400 mb-4">Ready to transform? Get a 7-day all-access pass on us.</p>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-brand-dark border border-white/10 px-4 py-3 text-brand-light placeholder:text-gray-600 focus:outline-none focus:border-brand-primary"
              />
              <button className="w-full bg-brand-primary text-brand-dark font-heading tracking-wider py-3 hover:bg-white transition-colors uppercase">
                Claim Free Pass
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Onyx Fitness. All rights reserved.</p>
          <div className="flex gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
