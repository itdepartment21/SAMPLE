import { motion } from "motion/react";
import { 
  ArrowRight, CheckCircle2, Star, Quote, 
  MapPin, Clock, Users, Zap, Award, Flame 
} from "lucide-react";
import { Button } from "../components/ui/Button";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <QuickBenefitsSection />
      <TransformationsSection />
      <ProgramsSection />
      <TrainersSection />
      <PricingPreviewSection />
      <SocialProofSection />
      <FAQSection />
      <FinalCTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
          alt="Gym interior with athletes" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
            <span className="text-sm font-semibold tracking-wide uppercase text-white">Accepting New Members for 2026</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading text-white mb-6 leading-[0.9]">
            Transform Your Body <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-yellow-200">
              With Expert Coaching
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Stop guessing. Start training. Join our premium fitness facility and get the results you've always wanted with proven methodologies.
          </p>
          
          <div className="flex flex-col sm:flex-row shadow-2xl items-center justify-center gap-4">
            <Button size="xl" className="w-full sm:w-auto gap-2">
              Start Free Trial <ArrowRight className="w-5 h-5" />
            </Button>
            <Button size="xl" variant="outline" className="w-full sm:w-auto bg-brand-dark/50 backdrop-blur-sm">
              View Memberships
            </Button>
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-8 text-gray-400 text-sm font-semibold uppercase tracking-wider">
            <div className="flex items-center gap-2"><Star className="w-4 h-4 text-brand-primary" /> 4.9/5 Google Reviews</div>
            <div className="flex items-center gap-2"><Users className="w-4 h-4 text-brand-primary" /> 1,200+ Transformations</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function QuickBenefitsSection() {
  const benefits = [
    { icon: <Award className="w-8 h-8 text-brand-primary" />, title: "Elite Coaches", desc: "Certified professionals dedicated to your progress." },
    { icon: <Flame className="w-8 h-8 text-brand-primary" />, title: "Custom Programs", desc: "Tailored workouts designed for your exact goals." },
    { icon: <Zap className="w-8 h-8 text-brand-primary" />, title: "Premium Equipment", desc: "State-of-the-art machines and free weights." },
    { icon: <Clock className="w-8 h-8 text-brand-primary" />, title: "Open 24/7", desc: "Train on your schedule, whatever it may be." },
  ];

  return (
    <section className="py-20 bg-brand-dark border-t-4 border-brand-primary relative z-20 -mt-2">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-brand-gray border border-white/5 hover:border-brand-primary/50 transition-colors group"
            >
              <div className="mb-4 bg-brand-dark p-4 inline-block group-hover:scale-110 transition-transform">{b.icon}</div>
              <h3 className="text-2xl font-heading text-white mb-2">{b.title}</h3>
              <p className="text-gray-400">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TransformationsSection() {
  return (
    <section className="py-24 bg-brand-gray">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-heading text-white mb-6">Real People. <span className="text-brand-primary">Real Results.</span></h2>
          <p className="text-lg text-gray-400">Our structured programs guarantee results. Here are just a few of the hundreds of transformations happening at Onyx.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Tranformation 1 */}
          <div className="group relative overflow-hidden bg-brand-dark border border-white/5">
            <div className="relative h-80 overflow-hidden">
               <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop" alt="Transformation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
               <div className="absolute top-4 left-4 bg-brand-primary text-brand-dark font-heading px-3 py-1 text-xl">-24 LBS</div>
               <div className="absolute top-4 right-4 bg-white text-brand-dark font-heading px-3 py-1 text-xl">12 WEEKS</div>
            </div>
            <div className="p-8">
              <Quote className="text-brand-primary w-8 h-8 mb-4 opacity-50" />
              <p className="text-gray-300 italic mb-6">"I tried every diet and home workout program. Coming here and following the nutrition guidance and structured lifting plan completely changed my life."</p>
              <div>
                <strong className="text-white font-heading text-xl tracking-wide block">Marcus T.</strong>
                <span className="text-brand-primary text-sm uppercase tracking-wider">Fat Loss Program</span>
              </div>
            </div>
          </div>
          
          {/* Tranformation 2 */}
          <div className="group relative overflow-hidden bg-brand-dark border border-white/5">
            <div className="relative h-80 overflow-hidden">
               <img src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop" alt="Transformation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
               <div className="absolute top-4 left-4 bg-brand-primary text-brand-dark font-heading px-3 py-1 text-xl">+15 LBS MUSCLE</div>
               <div className="absolute top-4 right-4 bg-white text-brand-dark font-heading px-3 py-1 text-xl">6 MONTHS</div>
            </div>
            <div className="p-8">
              <Quote className="text-brand-primary w-8 h-8 mb-4 opacity-50" />
              <p className="text-gray-300 italic mb-6">"The coaches push you past what you think you're capable of. The community here is unmatched. I'm stronger mentally and physically."</p>
              <div>
                <strong className="text-white font-heading text-xl tracking-wide block">Sarah J.</strong>
                <span className="text-brand-primary text-sm uppercase tracking-wider">Strength & Conditioning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProgramsSection() {
  const programs = [
    { title: "Strength & Conditioning", desc: "Build raw power and athleticism through compound lifts and intense conditioning cycles.", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop" },
    { title: "HIIT BURN", desc: "Maximum calorie output. Fast-paced circuit training designed to melt fat and boost endurance.", img: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&w=2068&auto=format&fit=crop" },
    { title: "Functional Fitness", desc: "Prepare your body for the real world. Cross-training modalities to make you bulletproof.", img: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=2070&auto=format&fit=crop" },
  ];

  return (
    <section id="programs" className="py-24 bg-brand-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-heading text-white mb-4">Elite <span className="text-brand-primary">Programs</span></h2>
            <p className="text-lg text-gray-400">Whatever your fitness goal, we have a specialized program and expert coaches to get you there.</p>
          </div>
          <Button variant="outline">View All Classes</Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <div key={i} className="group relative h-[400px] overflow-hidden">
              <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-40" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              
              <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-3xl font-heading text-white mb-2">{p.title}</h3>
                <p className="text-gray-300 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{p.desc}</p>
                <Button size="sm" className="w-fit">View Details</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrainersSection() {
  const trainers = [
    { name: "Alex Mercer", role: "Head Coach", spec: "Powerlifting & Strength", img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop" },
    { name: "Jordan Lee", role: "Specialist", spec: "Mobility & Functional", img: "https://images.unsplash.com/photo-1599058917212-97d14fa5320e?q=80&w=2069&auto=format&fit=crop" },
    { name: "Elena Rostova", role: "Coach", spec: "HIIT & Nutrition", img: "https://images.unsplash.com/photo-1609899517235-cbfbea074696?q=80&w=1974&auto=format&fit=crop" },
  ];

  return (
    <section id="coaches" className="py-24 bg-brand-gray">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-heading text-white mb-4">Meet The <span className="text-brand-primary">Experts</span></h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-16">People buy coaches, not equipment. Our instructors are industry veterans committed to your success.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((t, i) => (
            <div key={i} className="group relative">
               <div className="relative h-[450px] overflow-hidden mb-6 border-b-4 border-brand-primary">
                 <img src={t.img} alt={t.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                 <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/10 mix-blend-overlay transition-colors"></div>
               </div>
               <h3 className="text-2xl font-heading text-white">{t.name}</h3>
               <p className="text-brand-primary uppercase tracking-wider text-sm font-semibold mb-2">{t.role}</p>
               <p className="text-gray-400">{t.spec}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingPreviewSection() {
  return (
    <section className="py-24 bg-brand-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-heading text-white mb-4">Membership <span className="text-brand-primary">Options</span></h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-16">Simple pricing based on your goals. Cancel anytime.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-8 bg-brand-gray border border-white/5 text-left">
            <h3 className="text-2xl font-heading text-white mb-2">Basic</h3>
            <div className="text-4xl font-heading text-white mb-6">$49<span className="text-xl text-gray-400">/mo</span></div>
            <p className="text-gray-400 mb-8">Access to the gym floor and premium equipment.</p>
            <Link to="/pricing"><Button variant="outline" className="w-full">View Details</Button></Link>
          </div>
          <div className="p-8 bg-brand-dark border-2 border-brand-primary text-left relative shadow-2xl lg:-translate-y-4">
            <div className="absolute top-0 right-0 bg-brand-primary text-brand-dark font-heading uppercase px-3 py-1 font-semibold text-sm m-4">Most Popular</div>
            <h3 className="text-2xl font-heading text-white mb-2">Unlimited</h3>
            <div className="text-4xl font-heading text-brand-primary mb-6">$129<span className="text-xl text-gray-400">/mo</span></div>
            <p className="text-gray-400 mb-8">Full access + unlimited group classes and conditioning.</p>
            <Link to="/pricing"><Button className="w-full">Start Free Trial</Button></Link>
          </div>
          <div className="p-8 bg-brand-gray border border-white/5 text-left">
             <h3 className="text-2xl font-heading text-white mb-2">Private Coaching</h3>
             <div className="text-4xl font-heading text-white mb-6">$399<span className="text-xl text-gray-400">/mo</span></div>
             <p className="text-gray-400 mb-8">1-on-1 personalized training sessions and nutrition.</p>
             <Link to="/pricing"><Button variant="outline" className="w-full">View Details</Button></Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialProofSection() {
  return (
    <section className="py-20 bg-brand-dark border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-brand-primary text-brand-primary" />)}
            </div>
            <h2 className="text-4xl md:text-5xl font-heading text-white mb-6">Join 500+ <br/>Strong Members.</h2>
            <p className="text-lg text-gray-400 mb-8">Don't just take our word for it. Read what our community has to say about their experience at Onyx Fitness on Google Reviews.</p>
            <div className="flex items-center gap-4">
              <span className="text-4xl font-heading text-white">4.9</span>
              <div>
                <div className="text-white font-semibold">Excellent Rating</div>
                <div className="text-sm text-gray-400">Based on 230+ Reviews</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            {[1, 2].map((i) => (
              <div key={i} className="p-6 bg-brand-gray border border-white/5 relative">
                <Quote className="absolute top-6 right-6 text-brand-dark fill-brand-primary w-8 h-8 opacity-20" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-brand-primary text-brand-primary" />)}
                </div>
                <p className="text-gray-300 italic mb-4">"Absolutely the best gym in the city. The equipment is always clean, the community is super supportive, and the trainers actually care about your form and progress."</p>
                <div className="text-white font-semibold flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-brand-dark flex items-center justify-center font-heading text-brand-primary">C</div>
                  Chris M.
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    { q: "Can beginners join?", a: "Absolutely. Over 40% of our new members have never lifted weights before. Our coaches will guide you every step of the way." },
    { q: "Do I need experience for the classes?", a: "No experience needed. All movements can be scaled and modified by our coaches to fit your current fitness level safely." },
    { q: "Are trainers included?", a: "Group coaching is included in all memberships. 1-on-1 Personal Training is available as an add-on service." },
    { q: "Can I cancel anytime?", a: "We offer both month-to-month flexible plans and discounted annual commitments. Check our pricing page for details." },
  ];

  return (
    <section className="py-24 bg-brand-gray">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading text-white mb-4">Frequently Asked <span className="text-brand-primary">Questions</span></h2>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-white/10 p-6 bg-brand-dark hover:border-brand-primary/50 transition-colors">
              <h4 className="text-xl font-semibold text-white mb-2">{faq.q}</h4>
              <p className="text-gray-400">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section className="py-32 relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop" 
          alt="Gym environment" 
          className="w-full h-full object-cover opacity-30 grayscale"
        />
        <div className="absolute inset-0 bg-brand-primary/90 mix-blend-multiply"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-heading text-white mb-6 uppercase">
          Start Your Fitness <br/> Transformation Today
        </h2>
        <p className="text-xl text-white/90 mb-10 font-medium">
          Stop scrolling. Start sweating. Claim your 7-day free trial right now and see the difference.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="xl" className="bg-white text-brand-dark hover:bg-gray-100 shadow-2xl">
            Claim Free Trial
          </Button>
          <Button size="xl" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-dark">
            View Memberships
          </Button>
        </div>
      </div>
    </section>
  );
}
