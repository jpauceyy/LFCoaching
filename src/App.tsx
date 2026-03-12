import { motion } from "motion/react";
import {
  Check,
  ChevronRight,
  Instagram,
  Menu,
  Play,
  Quote,
  Star,
  X,
} from "lucide-react";
import React, { useState } from "react";

const BRAND_RED = "#8B0000";

// ============================================================================
// INSTAGRAM FEED IMAGES
// Replace these URLs with links to your actual Instagram photos.
// You can right-click an image on Instagram and select "Copy image address"
// or upload your photos to a hosting service and paste the links here.
// ============================================================================
// ============================================================================
// INSTAGRAM VIDEOS
// ============================================================================
const INSTAGRAM_VIDEOS = [
  "https://www.instagram.com/p/DVy7Nf-iC7w/embed",
  "https://www.instagram.com/p/DVZHu_nCE26/embed",
  "https://www.instagram.com/p/DVQoE6SiB_W/embed",
  "https://www.instagram.com/p/DVNyJzGiHKA/embed",
  "https://www.instagram.com/p/DU9m8glCM2B/embed",
];

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/contact@lukefenners.com", {
        method: "POST",
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#8B0000] selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
              <LFLogo className="w-8 h-8 text-[#8B0000]" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {["Home", "Packages", "About", "Results", "Apply"].map(
                  (item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium uppercase tracking-wider transition-colors"
                    >
                      {item}
                    </a>
                  )
                )}
              </div>
            </div>
            <div className="hidden md:block">
              <a
                href="#apply"
                className="bg-[#8B0000] hover:bg-red-900 text-white px-6 py-2.5 rounded-sm font-bold uppercase tracking-wider transition-colors"
              >
                Start Now
              </a>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-zinc-900 focus:outline-none"
              >
                {isMobileMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-zinc-950 border-b border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {["Home", "Packages", "About", "Results", "Apply"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium uppercase tracking-wider"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* 1. Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
            alt="Gym Background"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold uppercase tracking-tighter leading-[0.9] mb-6"
          >
            Transform Your Body. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B0000] to-red-500">
              Build Real Strength.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto font-light"
          >
            Online coaching for weight loss, muscle gain, and peak performance.
            No excuses, just results.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#apply"
              className="bg-[#8B0000] hover:bg-red-900 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-sm transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              Start Your Journey <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="#packages"
              className="bg-transparent border border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-sm transition-all flex items-center justify-center"
            >
              View Packages
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. Tier Packages Section */}
      <section id="packages" className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold uppercase tracking-tight mb-4">
              Coaching <span className="text-[#8B0000]">Packages</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose the level of support you need to reach your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Starter",
                price: "£49",
                desc: "Perfect for self-starters needing direction.",
                features: ["Custom Workout Plan", "Monthly Check-in", "Form Review"],
              },
              {
                name: "Pro",
                price: "£99",
                desc: "Comprehensive plan for serious results.",
                features: ["Workout + Nutrition Plan", "Weekly Check-ins", "Macro Adjustments", "Priority Email Support"],
                highlight: true,
              },
              {
                name: "Elite",
                price: "£149",
                desc: "High-level coaching and accountability.",
                features: ["Everything in Pro", "24/7 WhatsApp Support", "Video Call Check-ins", "Supplement Protocol"],
              },
              {
                name: "Elite Plus",
                price: "£199",
                desc: "The ultimate 1-on-1 coaching experience.",
                features: ["Everything in Elite", "Daily Accountability", "Custom Meal Prep Guide", "Mindset Coaching"],
              },
            ].map((pkg, idx) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`bg-zinc-900 p-8 flex flex-col relative group overflow-hidden ${pkg.highlight ? "border-t-4 border-[#8B0000]" : "border-t-4 border-zinc-800"
                  }`}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-[#8B0000] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                <h3 className="text-2xl font-heading font-bold uppercase tracking-wider mb-2">
                  {pkg.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-extrabold font-mono">{pkg.price}</span>
                  <span className="text-gray-400 font-mono">/month</span>
                </div>
                <p className="text-sm text-gray-400 mb-8 flex-grow">
                  {pkg.desc}
                </p>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#8B0000] shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#apply"
                  className={`w-full py-3 text-center font-bold uppercase tracking-wider text-sm transition-colors ${pkg.highlight
                    ? "bg-[#8B0000] hover:bg-red-900 text-white"
                    : "bg-zinc-800 hover:bg-zinc-700 text-white"
                    }`}
                >
                  Choose Plan
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Coaching Process Section */}
      <section className="py-24 bg-black border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold uppercase tracking-tight mb-4">
              How It <span className="text-[#8B0000]">Works</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-[45px] left-0 w-full h-0.5 bg-zinc-800 -translate-y-1/2 z-0" />
            {[
              { step: "01", title: "Apply", desc: "Fill out the detailed form below." },
              { step: "02", title: "Consult", desc: "We discuss your goals and history." },
              { step: "03", title: "Custom Plan", desc: "Receive your tailored program." },
              { step: "04", title: "Transform", desc: "Execute, check-in, and see results." },
            ].map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 bg-zinc-900 border-2 border-[#8B0000] rounded-full flex items-center justify-center text-2xl font-extrabold font-mono mb-6 shadow-[0_0_30px_rgba(139,0,0,0.3)]">
                  {item.step}
                </div>
                <h3 className="text-xl font-heading font-bold uppercase tracking-wider mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. About the Coach */}
      <section id="about" className="py-24 bg-zinc-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="aspect-[3/4] relative z-10">
                <img
                  src="/coach.jpg"
                  alt="Coach Portrait"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 border-2 border-[#8B0000] translate-x-4 translate-y-4 -z-10" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-extrabold uppercase tracking-tight mb-6">
                Meet Your <span className="text-[#8B0000]">Coach</span>
              </h2>
              <p className="text-xl text-gray-300 mb-6 font-light leading-relaxed">
                "I help busy people lose fat, build muscle, and create
                sustainable habits through personalised online coaching."
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed">
                With over a decade in the fitness industry, I've seen every fad
                diet and gimmick. My philosophy is built on science, hard work,
                and consistency. I don't just give you a plan; I teach you how
                to train, how to eat, and how to maintain your results for life.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-10">
                <div>
                  <div className="text-3xl md:text-4xl font-extrabold font-mono text-[#8B0000] mb-1">
                    30+
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider font-bold">
                    Clients Coached
                  </div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-extrabold font-mono text-[#8B0000] mb-1">
                    100kg+
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider font-bold">
                    Fat Lost
                  </div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-extrabold font-mono text-[#8B0000] mb-1">
                    2+
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider font-bold">
                    Years Exp
                  </div>
                </div>
              </div>

              <a
                href="#apply"
                className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-sm hover:text-[#8B0000] transition-colors"
              >
                Work With Me <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Client Results / Testimonials */}
      <section id="results" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold uppercase tracking-tight mb-4">
              Real <span className="text-[#8B0000]">Results</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Don't just take my word for it. See what my clients have achieved.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                quote: "I lost 14kg in 4 months and gained confidence I never knew I had. The accountability was exactly what I needed.",
                img: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=1000&auto=format&fit=crop",
              },
              {
                name: "James T.",
                quote: "Added 5kg of lean muscle while dropping body fat. The programming is elite and the check-ins keep you on track.",
                img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1000&auto=format&fit=crop",
              },
              {
                name: "Emma R.",
                quote: "As a busy mom, I thought I didn't have time. This coaching showed me how to fit fitness into my crazy schedule.",
                img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1000&auto=format&fit=crop",
              },
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-zinc-900 p-8 relative"
              >
                <Quote className="absolute top-6 right-6 w-12 h-12 text-zinc-800" />
                <div className="flex gap-1 text-[#8B0000] mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-8 relative z-10">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover grayscale"
                    referrerPolicy="no-referrer"
                  />
                  <span className="font-bold uppercase tracking-wider text-sm">
                    {testimonial.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra Feature: BMI Calculator */}
      <section className="py-20 bg-zinc-950 border-y border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zinc-900 p-8 md:p-12 border border-zinc-800">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-heading font-extrabold uppercase tracking-tight mb-2">
                Quick <span className="text-[#8B0000]">BMI Calculator</span>
              </h2>
              <p className="text-gray-400 text-sm">
                Get a quick baseline before applying.
              </p>
            </div>
            <BMICalculator />
          </div>
        </div>
      </section>

      {/* 4. Fitness Goal Form (Lead Capture) */}
      <section id="apply" className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold uppercase tracking-tight mb-4">
              Apply For <span className="text-[#8B0000]">Coaching</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Fill out the form below to see if we're a good fit. Serious
              inquiries only.
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-zinc-950 p-8 md:p-12 border border-zinc-800 text-center space-y-6">
              <div className="w-20 h-20 bg-[#8B0000]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-[#8B0000]" />
              </div>
              <h3 className="text-3xl font-heading font-extrabold uppercase tracking-tight text-white">
                Application Received
              </h3>
              <p className="text-gray-400 max-w-md mx-auto">
                Thank you for applying. I'll review your details and get back to you at the email provided within 24-48 hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-8 text-[#8B0000] hover:text-red-400 transition-colors font-bold uppercase tracking-wider text-sm"
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleFormSubmit}
              className="space-y-8 bg-zinc-950 p-8 md:p-12 border border-zinc-800"
            >
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_subject" value="New Coaching Application!" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-sm p-4 text-white focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-sm p-4 text-white focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                    Age
                  </label>
                  <input
                    type="number"
                    name="age"
                    required
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-sm p-4 text-white focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] outline-none transition-colors"
                    placeholder="25"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                    Gender
                  </label>
                  <select name="gender" required className="w-full bg-zinc-900 border border-zinc-800 rounded-sm p-4 text-white focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] outline-none transition-colors appearance-none">
                    <option>Select...</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                  Primary Goal
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    "Weight Loss",
                    "Weight Gain / Muscle",
                    "Strength Training",
                    "General Fitness",
                    "Athlete Performance",
                    "Other",
                  ].map((goal) => (
                    <label
                      key={goal}
                      className="flex items-center p-4 border border-zinc-800 bg-zinc-900 rounded-sm cursor-pointer hover:border-[#8B0000] transition-colors has-[:checked]:border-[#8B0000] has-[:checked]:bg-[#8B0000]/10"
                    >
                      <input
                        type="radio"
                        name="primary_goal"
                        value={goal}
                        required
                        className="w-4 h-4 text-[#8B0000] bg-zinc-800 border-zinc-700 focus:ring-[#8B0000] focus:ring-2"
                      />
                      <span className="ml-3 text-sm font-medium">{goal}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                    Current Weight (kg/lbs)
                  </label>
                  <input
                    type="text"
                    name="current_weight"
                    required
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-sm p-4 text-white focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                    Target Weight (kg/lbs)
                  </label>
                  <input
                    type="text"
                    name="target_weight"
                    required
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-sm p-4 text-white focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                  Training Experience & Current Routine
                </label>
                <textarea
                  name="training_experience"
                  required
                  rows={4}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-sm p-4 text-white focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] outline-none transition-colors resize-none"
                  placeholder="Tell me about your current fitness level..."
                ></textarea>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                  Injuries or Health Conditions
                </label>
                <textarea
                  name="injuries_or_conditions"
                  rows={2}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-sm p-4 text-white focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] outline-none transition-colors resize-none"
                  placeholder="List any physical limitations..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#8B0000] hover:bg-red-900 disabled:bg-zinc-800 disabled:text-zinc-500 text-white px-8 py-5 rounded-sm font-extrabold uppercase tracking-widest text-lg transition-all hover:scale-[1.02] disabled:hover:scale-100"
              >
                {isSubmitting ? "Submitting..." : "Get My Plan"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 7. Social Proof / Community */}
      <section className="py-24 bg-zinc-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold uppercase tracking-tight mb-4">
              Follow on <span className="text-[#8B0000]">Instagram</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Join the community and follow the journey.
            </p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {INSTAGRAM_VIDEOS.map((src, i) => (
              <div
                key={i}
                className="snap-center shrink-0 w-[85%] sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.667rem)] lg:w-[calc(20%-0.8rem)] relative rounded-sm overflow-hidden bg-zinc-900"
              >
                <div className="aspect-square relative w-full h-full">
                  <iframe
                    src={src}
                    className="absolute inset-0 w-full h-full border-0"
                    scrolling="no"
                    allowTransparency={true}
                    allow="encrypted-media"
                    title={`Instagram Video ${i + 1}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Final CTA Section */}
      <section className="py-32 bg-[#8B0000] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-heading font-extrabold uppercase tracking-tighter mb-8 text-white leading-none">
            Ready To <br /> Transform?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#apply"
              className="bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-sm transition-all hover:scale-105"
            >
              Apply For Coaching
            </a>
            <a
              href="#packages"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-sm transition-all"
            >
              View Packages
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <LFLogo className="w-6 h-6 text-[#8B0000]" />
          </div>
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} LF Coaching. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/lukefenners" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBMI = () => {
    if (height && weight) {
      const h = parseFloat(height) / 100;
      const w = parseFloat(weight);
      const calculatedBmi = w / (h * h);
      setBmi(parseFloat(calculatedBmi.toFixed(1)));
    }
  };

  let status = "";
  let color = "";
  if (bmi) {
    if (bmi < 18.5) {
      status = "Underweight";
      color = "text-yellow-500";
    } else if (bmi >= 18.5 && bmi < 25) {
      status = "Normal";
      color = "text-green-500";
    } else if (bmi >= 25 && bmi < 30) {
      status = "Overweight";
      color = "text-orange-500";
    } else {
      status = "Obese";
      color = "text-red-500";
    }
  }

  return (
    <div className="flex flex-col md:flex-row gap-6 items-end">
      <div className="w-full">
        <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
          Height (cm)
        </label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="w-full bg-black border border-zinc-800 rounded-sm p-3 text-white focus:border-[#8B0000] outline-none"
          placeholder="180"
        />
      </div>
      <div className="w-full">
        <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
          Weight (kg)
        </label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full bg-black border border-zinc-800 rounded-sm p-3 text-white focus:border-[#8B0000] outline-none"
          placeholder="80"
        />
      </div>
      <button
        onClick={calculateBMI}
        className="w-full md:w-auto bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-sm font-bold uppercase tracking-wider text-sm transition-colors whitespace-nowrap"
      >
        Calculate
      </button>

      {bmi && (
        <div className="w-full md:w-auto bg-black border border-zinc-800 p-3 rounded-sm flex flex-col justify-center items-center min-w-[120px]">
          <span className="text-2xl font-extrabold font-mono">{bmi}</span>
          <span className={`text-xs font-bold uppercase tracking-wider ${color}`}>
            {status}
          </span>
        </div>
      )}
    </div>
  );
}

function LFLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M 0 0 L 0 60 L 20 60 L 20 80 L 30 70 L 30 40 L 40 40 L 50 30 L 30 30 L 30 20 L 50 20 L 60 10 L 20 10 L 20 50 L 10 50 L 10 10 Z"
        fill="currentColor"
      />
    </svg>
  );
}
