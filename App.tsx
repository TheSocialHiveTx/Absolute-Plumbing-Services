
import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Clock, 
  Star, 
  MapPin, 
  CheckCircle2, 
  AlertCircle, 
  Wrench, 
  Droplets, 
  Thermometer, 
  Settings, 
  ChevronDown, 
  ChevronUp,
  ShieldCheck,
  Award,
  Users
} from 'lucide-react';

const BUSINESS_NAME = "Absolute Plumbing Services";
const PHONE_NUMBER = "(832) 429-3801";
const PHONE_LINK = "tel:8324293801";
const ADDRESS = "200 E San Augustine St #247, Deer Park, TX 77536";
const RATING = "4.8";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass-effect shadow-lg py-2 translate-y-2 mx-4 rounded-2xl border border-white/50' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-xl shadow-lg shadow-blue-500/20">
            <Wrench className="text-white w-5 h-5" />
          </div>
          <span className={`font-extrabold text-xl tracking-tighter ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
            ABSOLUTE <span className="text-blue-600">PLUMBING</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {['Services', 'Why Us', 'FAQ'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className={`font-bold text-sm uppercase tracking-widest transition-colors ${isScrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white/80 hover:text-white'}`}>
              {item}
            </a>
          ))}
          <a href={PHONE_LINK} className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30 animate-pulse-blue">
            <Phone size={16} fill="currentColor" /> {PHONE_NUMBER}
          </a>
        </div>

        <a href={PHONE_LINK} className="md:hidden bg-blue-600 text-white p-2.5 rounded-xl shadow-lg shadow-blue-600/30 animate-pulse-blue">
          <Phone size={20} fill="currentColor" />
        </a>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 bg-slate-950 overflow-hidden">
    <div className="absolute inset-0 z-0 opacity-40">
      <img 
        src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1920" 
        alt="Plumbing Craft" 
        className="w-full h-full object-cover"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/70 to-slate-950 z-10"></div>
    
    <div className="relative z-20 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-7 text-center lg:text-left">
        <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 text-blue-400 px-4 py-2 rounded-full mb-8 font-bold text-xs uppercase tracking-widest backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Dispatcher Active: Technician in Deer Park Now
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-8 tracking-tight">
          Reliable Plumbing <br/>
          <span className="gradient-text">When You Need It Most</span>
        </h1>
        
        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
          The expert choice for Deer Park homeowners. Fast emergency repairs, transparent pricing, and 5-star professional service.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
          <a href={PHONE_LINK} className="bg-blue-600 hover:bg-blue-500 text-white text-2xl px-10 py-6 rounded-2xl font-black shadow-2xl shadow-blue-600/40 flex items-center justify-center gap-3 transform hover:-translate-y-1 transition-all animate-pulse-blue">
            <Phone size={28} fill="currentColor" /> CALL NOW
          </a>
          <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10">
            <div className="flex -space-x-2">
              {[1,2,3].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-700 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                </div>
              ))}
            </div>
            <div>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-white text-xs font-bold mt-1">40+ Local Google Reviews</p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-5 hidden lg:block">
        <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 relative">
          <div className="absolute -top-6 -right-6 bg-yellow-500 text-slate-900 px-6 py-4 rounded-2xl font-black rotate-12 shadow-xl shadow-yellow-500/20">
            FAST 1HR<br/>RESPONSE
          </div>
          <h3 className="text-white text-2xl font-bold mb-8 flex items-center gap-2">
            <ShieldCheck className="text-blue-400" /> Professional Guarantee
          </h3>
          <ul className="space-y-6">
            {[
              { icon: <Clock size={20}/>, label: "24/7 Emergency Dispatch", sub: "We never sleep, so you can." },
              { icon: <Award size={20}/>, label: "Fair, Upfront Pricing", sub: "No hidden fees, no surprises." },
              { icon: <CheckCircle2 size={20}/>, label: "Local Master Technician", sub: "Deer Park's most trusted pro." }
            ].map((item, i) => (
              <li key={i} className="flex gap-4 group">
                <div className="bg-blue-600/20 text-blue-400 p-3 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <div>
                  <p className="text-white font-bold">{item.label}</p>
                  <p className="text-slate-400 text-sm">{item.sub}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const TrustRibbon = () => (
  <div className="bg-white py-6 border-y border-slate-100">
    <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
       <div className="flex items-center gap-2 font-black text-slate-400 text-xl italic tracking-tighter"><ShieldCheck /> GOOGLE GUARANTEED</div>
       <div className="flex items-center gap-2 font-black text-slate-400 text-xl italic tracking-tighter"><Award /> TOP RATED 2024</div>
       <div className="flex items-center gap-2 font-black text-slate-400 text-xl italic tracking-tighter"><Users /> 1000+ JOBS DONE</div>
       <div className="flex items-center gap-2 font-black text-slate-400 text-xl italic tracking-tighter"><MapPin /> DEER PARK NATIVE</div>
    </div>
  </div>
);

const Services = () => {
  const servicesList = [
    { title: "Emergency Repairs", desc: "Available 24/7 for bursts, leaks, and backups.", icon: <AlertCircle />, color: "bg-red-50 text-red-600" },
    { title: "Leak Detection", desc: "Non-invasive tech to find the source fast.", icon: <Droplets />, color: "bg-blue-50 text-blue-600" },
    { title: "Water Heaters", desc: "Service & install for all major brands.", icon: <Thermometer />, color: "bg-orange-50 text-orange-600" },
    { title: "Toilet Solutions", desc: "Repairs, unblocking, and new installs.", icon: <Settings />, color: "bg-purple-50 text-purple-600" },
    { title: "Pipe Maintenance", desc: "Relining, descaling, and full replacements.", icon: <Wrench />, color: "bg-emerald-50 text-emerald-600" },
    { title: "Whole-Home Checks", desc: "Ensure your plumbing is in peak condition.", icon: <CheckCircle2 />, color: "bg-slate-50 text-slate-600" },
  ];

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-blue-600 font-black tracking-widest text-xs uppercase mb-3">Expert Solutions</h2>
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">Professional Services <br/> For Every Problem.</h3>
          </div>
          <p className="text-lg text-slate-500 max-w-sm">
            We combine old-school craftsmanship with modern technology to fix your plumbing right the first time.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((s, i) => (
            <div key={i} className="group p-8 rounded-3xl border border-slate-100 bg-white hover:bg-slate-50 hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
              <div className={`${s.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                {/* Fix: casting to React.ReactElement<any> to satisfy TypeScript for the size prop in cloneElement */}
                {React.cloneElement(s.icon as React.ReactElement<any>, { size: 32 })}
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-4">{s.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-8">{s.desc}</p>
              <a href={PHONE_LINK} className="inline-flex items-center gap-2 font-bold text-blue-600 hover:text-blue-700">
                Book Service <ChevronDown size={18} className="-rotate-90" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => (
  <section id="why-us" className="py-24 bg-slate-900 text-white skewed-divider relative">
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1 relative">
           <img 
              src="https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=800" 
              alt="Technician" 
              className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
           />
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center animate-pulse-blue">
              <Phone size={32} fill="currentColor" />
           </div>
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-blue-500 font-black tracking-widest text-xs uppercase mb-4">Why Absolute?</h2>
          <h3 className="text-4xl md:text-6xl font-black mb-10 leading-tight">Plumbing Built on <span className="text-blue-500">Integrity</span>.</h3>
          
          <div className="space-y-8">
            {[
              { title: "No Dispatch Fees", text: "We believe you shouldn't pay just for us to show up. Honest assessments only." },
              { title: "Deer Park Locals", text: "We live where we work. Our reputation in the neighborhood is everything." },
              { title: "Master Technicians", text: "We don't send 'handymen'. You get a fully qualified professional every time." }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-slate-400 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          
          <a href={PHONE_LINK} className="mt-12 inline-block bg-white text-slate-900 px-10 py-5 rounded-2xl font-black text-xl hover:bg-blue-50 transition-all shadow-xl">
             Speak With A Tech
          </a>
        </div>
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const faqs = [
    { q: "How fast is your response time?", a: "For emergencies in Deer Park, we typically arrive within 45-90 minutes depending on technician availability." },
    { q: "Do you provide written estimates?", a: "Always. We never start a job without a clear, written price breakdown that you've approved." },
    { q: "Are you available on weekends?", a: "Yes, we are on call 24/7 for emergencies. We know plumbing disasters don't wait for business hours." },
    { q: "Do you handle commercial plumbing?", a: "While we specialize in residential work, we do handle small to medium commercial service calls in the Deer Park area." },
    { q: "Is your work guaranteed?", a: "Every job comes with our Absolute Guarantee. If it's not fixed right, we make it right—no questions asked." }
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-black tracking-widest text-xs uppercase mb-3">Common Questions</h2>
          <h3 className="text-4xl font-black text-slate-900">Got Questions? <br/> We've Got Answers.</h3>
        </div>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className={`rounded-3xl border transition-all duration-300 ${openIndex === i ? 'border-blue-200 bg-blue-50/30' : 'border-slate-100 bg-white'}`}>
              <button 
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full px-8 py-6 text-left flex justify-between items-center group"
              >
                <span className={`font-extrabold text-lg ${openIndex === i ? 'text-blue-900' : 'text-slate-700 group-hover:text-blue-600'}`}>{f.q}</span>
                <div className={`p-2 rounded-full transition-all ${openIndex === i ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-100 text-slate-400 group-hover:bg-blue-100 group-hover:text-blue-600'}`}>
                  <ChevronDown size={20} />
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === i ? 'max-h-48' : 'max-h-0'}`}>
                <div className="px-8 pb-8 text-slate-600 leading-relaxed font-medium">
                  {f.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => (
  <section className="py-24 bg-blue-600 relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
    </div>
    <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
      <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter">Save Your Home From <br/> Water Damage.</h2>
      <p className="text-xl text-blue-50 mb-12 max-w-xl mx-auto font-bold opacity-90">
        Stop the leak. Clear the drain. Repair the heater. <br/> One call handles it all.
      </p>
      <a href={PHONE_LINK} className="inline-flex items-center gap-6 bg-white text-blue-600 text-3xl md:text-5xl font-black px-12 py-8 rounded-[2rem] shadow-2xl hover:bg-blue-50 transform hover:scale-105 active:scale-95 transition-all">
        <Phone size={48} fill="currentColor" /> {PHONE_NUMBER}
      </a>
      <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/80 font-black uppercase text-xs tracking-widest">
         <div className="flex items-center gap-2"><Clock size={16}/> Available Now</div>
         <div className="flex items-center gap-2"><CheckCircle2 size={16}/> Fully Licensed</div>
         <div className="flex items-center gap-2"><ShieldCheck size={16}/> Absolute Guarantee</div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-950 text-slate-500 py-20 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-4 gap-16 mb-16">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-blue-600 p-2 rounded-xl">
              <Wrench className="text-white w-5 h-5" />
            </div>
            <span className="font-extrabold text-2xl text-white tracking-tighter">
              ABSOLUTE <span className="text-blue-500">PLUMBING</span>
            </span>
          </div>
          <p className="text-lg leading-relaxed max-w-md mb-8">
            Providing expert plumbing repairs and maintenance to Deer Park, TX families. We pride ourselves on transparent communication and superior results.
          </p>
          <div className="flex gap-4">
             {[1,2,3].map(i => (
                <div key={i} className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer text-white">
                   <Star size={18} fill="currentColor" />
                </div>
             ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">Contact</h4>
          <ul className="space-y-6">
            <li className="flex gap-4">
              <MapPin className="text-blue-500 flex-shrink-0" size={20} />
              <span className="text-sm">{ADDRESS}</span>
            </li>
            <li className="flex items-center gap-4">
              <Phone className="text-blue-500" size={20} />
              <a href={PHONE_LINK} className="text-white font-bold hover:text-blue-400 transition-colors">{PHONE_NUMBER}</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">Service Hours</h4>
          <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
             <div className="flex justify-between text-sm mb-2">
                <span className="text-white font-bold">Emergency</span>
                <span className="text-blue-400 font-black">24/7</span>
             </div>
             <div className="flex justify-between text-sm">
                <span>Office Hours</span>
                <span>8am - 5pm</span>
             </div>
          </div>
        </div>
      </div>
      
      <div className="pt-8 border-t border-white/5 text-xs font-bold uppercase tracking-widest flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} {BUSINESS_NAME}. Deer Park's Elite Plumber.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
        </div>
      </div>
    </div>
  </footer>
);

const MobileActionTray = () => (
  <div className="fixed bottom-6 left-6 right-6 z-[60] md:hidden">
    <a href={PHONE_LINK} className="w-full bg-red-600 text-white flex items-center justify-between px-8 py-5 rounded-[2rem] shadow-2xl shadow-red-600/40 font-black text-xl animate-pulse-red">
      <div className="flex items-center gap-3">
        <Phone size={24} fill="currentColor" />
        <span>TAP TO CALL</span>
      </div>
      <ChevronDown size={24} className="-rotate-90 opacity-50" />
    </a>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <TrustRibbon />
        <Services />
        <WhyChooseUs />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
      <MobileActionTray />
    </div>
  );
}
