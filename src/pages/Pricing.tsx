import { CheckCircle2 } from "lucide-react";
import { Button } from "../components/ui/Button";

export function Pricing() {
  return (
    <div className="min-h-screen bg-brand-dark pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl md:text-7xl font-heading text-white mb-6 uppercase">
            Simple, Transparent <span className="text-brand-primary">Pricing</span>
          </h1>
          <p className="text-xl text-gray-400">
            No hidden fees. No enrollment charges. Just pure access to the best training facility in the city.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Tier 1 */}
          <div className="bg-brand-gray border border-white/5 p-8 flex flex-col">
            <h3 className="text-2xl font-heading text-white mb-2">Basic Open Gym</h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-5xl font-heading text-white">$49</span>
              <span className="text-gray-400">/mo</span>
            </div>
            <p className="text-gray-400 mb-8 flex-1">Perfect for experienced lifters who just need access to top-tier equipment.</p>
            
            <ul className="space-y-4 mb-8">
              <PricingFeature text="24/7 Facility Access" />
              <PricingFeature text="Premium Strength Equipment" />
              <PricingFeature text="Locker Room Access" />
              <PricingFeature text="Free Towel Service" />
              <PricingFeature text="No Group Classes included" disabled />
            </ul>
            
            <Button variant="outline" className="w-full">Choose Basic</Button>
          </div>

          {/* Tier 2 */}
          <div className="bg-brand-dark border-2 border-brand-primary p-8 flex flex-col relative transform md:-translate-y-4 shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-primary text-brand-dark font-heading uppercase px-4 py-1 tracking-widest text-sm">
              Most Popular
            </div>
            <h3 className="text-2xl font-heading text-white mb-2">Onyx Unlimited</h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-5xl font-heading text-brand-primary">$129</span>
              <span className="text-gray-400">/mo</span>
            </div>
            <p className="text-gray-400 flex-1 mb-8">Everything you need. Unlimited group coaching to keep you accountable and progressing.</p>
            
            <ul className="space-y-4 mb-8">
              <PricingFeature text="Everything in Basic" />
              <PricingFeature text="Unlimited Group Classes" />
              <PricingFeature text="HIIT, Strength, Conditioning" />
              <PricingFeature text="Monthly Body Composition" />
              <PricingFeature text="Members App Access" />
            </ul>
            
            <Button variant="primary" className="w-full">Start 7-Day Trial</Button>
          </div>

          {/* Tier 3 */}
          <div className="bg-brand-gray border border-white/5 p-8 flex flex-col">
            <h3 className="text-2xl font-heading text-white mb-2">Private Coaching</h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-5xl font-heading text-white">$399</span>
              <span className="text-gray-400">/mo</span>
            </div>
            <p className="text-gray-400 flex-1 mb-8">Fast-track your results with personalized 1-on-1 training and custom nutrition planning.</p>
            
            <ul className="space-y-4 mb-8">
              <PricingFeature text="Everything in Unlimited" />
              <PricingFeature text="4x Private Sessions / Month" />
              <PricingFeature text="Custom Nutrition Protocol" />
              <PricingFeature text="Weekly Check-ins" />
              <PricingFeature text="Direct Coach Messaging" />
            </ul>
            
            <Button variant="outline" className="w-full">Book Consultation</Button>
          </div>
        </div>
        
      </div>
    </div>
  );
}

function PricingFeature({ text, disabled = false }: { text: string, disabled?: boolean }) {
  return (
    <li className={`flex items-start gap-3 ${disabled ? 'opacity-50 grayscale' : ''}`}>
      <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
      <span className="text-gray-300">{text}</span>
    </li>
  );
}
