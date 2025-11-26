import React, { useState, useEffect } from 'react';

import { 

  CheckCircle2, 

  Brain, 

  Heart, 

  ShieldCheck, 

  ArrowRight, 

  Menu, 

  X, 

  ChevronDown, 

  ChevronUp,

  Star,

  BookOpen,

  FileText,

  Video,

  Activity,

  GraduationCap,

  Award,

  Microscope,

  Users,

  Clock,

  Check,

  HelpCircle

} from 'lucide-react';

const LandingPage = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [openFaq, setOpenFaq] = useState(null);

  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effects for sticky nav and mobile CTA

  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 50);

    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, []);

  const toggleFaq = (index) => {

    setOpenFaq(openFaq === index ? null : index);

  };

  const scrollToSection = (id) => {

    const element = document.getElementById(id);

    if (element) {

      element.scrollIntoView({ behavior: 'smooth' });

    }

    setIsMenuOpen(false);

  };

  // Component for the "Mockup" of the guide to make it tangible

  const GuideMockup = () => (

    <div className="relative w-full max-w-sm mx-auto perspective-1000 hidden lg:block">

      {/* Background Page */}

      <div className="absolute top-4 -right-4 w-full h-full bg-teal-100 rounded-lg shadow-sm border border-teal-200 transform rotate-6 z-0"></div>

      

      {/* Main Page */}

      <div className="relative bg-white rounded-lg shadow-2xl border border-gray-100 overflow-hidden transform transition-transform hover:-translate-y-2 duration-500 z-10 h-[500px] flex flex-col">

        <div className="h-6 bg-teal-600 w-full flex items-center px-4">

            <div className="flex gap-1">

                <div className="w-2 h-2 rounded-full bg-white/50"></div>

                <div className="w-2 h-2 rounded-full bg-white/50"></div>

            </div>

        </div>

        <div className="p-8 space-y-6 flex-1 flex flex-col">

          <div className="flex items-center gap-4 border-b border-gray-100 pb-6">

            <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-bold text-xl">JD</div>

            <div>

              <div className="h-4 w-32 bg-gray-200 rounded animate-pulse mb-2"></div>

              <div className="h-3 w-20 bg-gray-100 rounded"></div>

            </div>

          </div>

          

          <div className="space-y-3">

            <div className="flex justify-between items-center">

              <div className="h-4 w-32 bg-teal-600 rounded"></div>

              <div className="h-4 w-12 bg-teal-100 rounded"></div>

            </div>

            <div className="h-2 w-full bg-gray-100 rounded"></div>

            <div className="h-2 w-5/6 bg-gray-100 rounded"></div>

            <div className="h-2 w-full bg-gray-100 rounded"></div>

          </div>

          <div className="p-5 bg-teal-50 rounded-xl border border-teal-100 mt-2">

            <div className="flex gap-2 items-center mb-3">

              <Star className="w-5 h-5 text-yellow-500 fill-current" />

              <div className="h-4 w-32 bg-teal-800 rounded opacity-50"></div>

            </div>

            <div className="space-y-2">

              <div className="h-2 w-full bg-teal-200/50 rounded"></div>

              <div className="h-2 w-4/5 bg-teal-200/50 rounded"></div>

            </div>

          </div>

          <div className="grid grid-cols-2 gap-4 mt-auto">

            <div className="h-24 bg-gray-50 rounded-lg border border-gray-100 flex flex-col items-center justify-center gap-2">

              <Activity className="text-teal-400 w-8 h-8" />

              <div className="h-2 w-12 bg-gray-200 rounded"></div>

            </div>

            <div className="h-24 bg-gray-50 rounded-lg border border-gray-100 flex flex-col items-center justify-center gap-2">

              <Brain className="text-teal-400 w-8 h-8" />

              <div className="h-2 w-12 bg-gray-200 rounded"></div>

            </div>

          </div>

        </div>

        

        {/* Floating Badge */}

        <div className="absolute top-20 right-[-10px] bg-yellow-400 text-yellow-900 text-xs font-bold px-4 py-1.5 rounded-l-full shadow-md z-20">

          PERSONALIZED PLAN

        </div>

      </div>

    </div>

  );

  const testimonials = [

    {

      text: "What really impressed me was the thoughtfulness put into the ordering of the recommendations. Knowing where exactly to start, I felt less overwhelmed, and it made it easier to implement the suggestions step by step.",

      author: "Sarah",

      role: "Aunt of a 12-year-old autistic nephew"

    },

    {

      text: "Every page is full of insights, inspiration, and educational resources. The developmental recommendations are a perfect blend of research-based strategies and explain the 'why', all presented with empathy.",

      author: "Kristin",

      role: "Parent, Ontario, Canada"

    },

    {

      text: "The perfect blend of research-based strategies and techniques, with an empathetic and supportive hand guiding parents through their journey.",

      author: "Samantha",

      role: "Special Education Teacher & Mother"

    }

  ];

  const faqs = [

    {

      question: "How is this different from what I find on Google?",

      answer: "Google gives you everything—and nothing specific to your child. ThriveGuide analyzes your child's unique profile and filters through dozens of evidence-based approaches to give you the five most relevant strategies, in the right order. It's like having a team of specialists review your child's case and tell you exactly where to focus."

    },

    {

      question: "Who created this?",

      answer: "ThriveGuide was developed by autism specialists with over 70 years of combined clinical experience, led by Jonathan Alderson. Every recommendation is grounded in peer-reviewed research and real-world practice with thousands of families."

    },

    {

      question: "What ages does this work for?",

      answer: "ThriveGuide is designed for children across the autism spectrum, from early childhood through adolescence. The recommendations adapt based on your child's developmental stage and specific profile."

    },

    {

      question: "How long does it take to complete?",

      answer: "The parent questionnaire takes about 20-30 minutes. Your personalized ThriveGuide is delivered within 24 hours (often sooner)."

    },

    {

      question: "Does this replace therapy?",

      answer: "No—and it's not meant to. ThriveGuide helps you know where to focus while you wait for services, how to maximize the therapy you're already doing, and which approaches are most likely to help your specific child. Think of it as your roadmap, not the destination."

    },

    {

      question: "What if it doesn't help?",

      answer: "We offer a 100% money-back guarantee. If you don't find value in your ThriveGuide, just email us and we'll refund your purchase. We're confident you'll find it worthwhile—but the risk is entirely on us."

    }

  ];

  return (

    <div className="font-sans text-gray-800 bg-white pb-20 md:pb-0">

      {/* Navigation */}

      <nav className={`fixed w-full transition-all duration-300 z-50 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'}`}>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex justify-between items-center h-16">

            <div className="flex-shrink-0 flex items-center gap-2">

              <span className={`text-2xl font-bold tracking-tight ${scrolled ? 'text-teal-600' : 'text-gray-900'}`}>ThriveGuide</span>

            </div>

            

            {/* Desktop Menu */}

            <div className="hidden md:flex items-center space-x-8">

              <button onClick={() => scrollToSection('how-it-works')} className="text-gray-600 hover:text-teal-600 font-medium transition-colors">How It Works</button>

              <button onClick={() => scrollToSection('pricing')} className="text-gray-600 hover:text-teal-600 font-medium transition-colors">Pricing</button>

              <button onClick={() => scrollToSection('faq')} className="text-gray-600 hover:text-teal-600 font-medium transition-colors">FAQ</button>

              <button onClick={() => scrollToSection('pricing')} className="bg-teal-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-teal-700 transition duration-300 shadow-md transform hover:-translate-y-0.5">

                Get Your Guide

              </button>

            </div>

            {/* Mobile Menu Button */}

            <div className="md:hidden flex items-center">

              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-teal-600 p-2">

                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}

              </button>

            </div>

          </div>

        </div>

        {/* Mobile Menu */}

        {isMenuOpen && (

          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg animate-fade-in-down">

            <div className="px-4 pt-2 pb-6 space-y-2">

              <button onClick={() => scrollToSection('how-it-works')} className="block w-full text-left px-3 py-3 text-gray-600 hover:bg-gray-50 rounded-md font-medium">How It Works</button>

              <button onClick={() => scrollToSection('pricing')} className="block w-full text-left px-3 py-3 text-gray-600 hover:bg-gray-50 rounded-md font-medium">Pricing</button>

              <button onClick={() => scrollToSection('faq')} className="block w-full text-left px-3 py-3 text-gray-600 hover:bg-gray-50 rounded-md font-medium">FAQ</button>

              <button onClick={() => scrollToSection('pricing')} className="block w-full text-center mt-4 bg-teal-600 text-white px-6 py-3 rounded-full font-bold hover:bg-teal-700">

                Get Started

              </button>

            </div>

          </div>

        )}

      </nav>

      {/* Hero Section */}

      <section className="pt-32 pb-20 bg-gradient-to-b from-teal-50 via-white to-white px-4 sm:px-6 lg:px-8 overflow-hidden">

        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Hero Content */}

            <div className="text-center lg:text-left z-10">

              {/* Trust Badge */}

              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 mb-8">

                <div className="flex">

                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />)}

                </div>

                <span className="text-xs font-bold text-gray-600 uppercase tracking-wide">Trusted by 1,000+ Parents</span>

              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">

                You Know Your Child Best.<br />

                <span className="text-teal-600">Now Get a Plan That Matches.</span>

              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">

                Skip the 18-month waitlist. In about an hour, get personalized goals and strategies from autism specialists—so you can start helping your child today.

              </p>

              

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-10">

                <button onClick={() => scrollToSection('pricing')} className="w-full sm:w-auto bg-teal-600 text-white text-xl font-bold px-8 py-4 rounded-full shadow-lg hover:bg-teal-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">

                  Get Your Plan – $89 <ArrowRight className="w-5 h-5" />

                </button>

                <div className="flex items-center justify-center gap-2 text-sm text-gray-500 py-4 sm:py-0">

                  <ShieldCheck className="w-5 h-5 text-teal-500" />

                  <span className="font-medium">100% Money-Back Guarantee</span>

                </div>

              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm font-medium text-gray-700">

                <div className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full">

                  <CheckCircle2 className="text-teal-500 w-4 h-4" /> Built by Therapists

                </div>

                <div className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full">

                  <CheckCircle2 className="text-teal-500 w-4 h-4" /> 70+ Years Experience

                </div>

              </div>

            </div>

            {/* Hero Visual Mockup */}

            <div className="relative flex justify-center items-center">

              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-teal-100/40 to-yellow-100/40 rounded-full blur-3xl -z-10"></div>

              <GuideMockup />

              {/* Mobile Only Placeholder */}

              <div className="lg:hidden w-64 h-80 bg-white border border-gray-200 rounded-lg shadow-xl p-4 flex flex-col items-center justify-center text-center space-y-4 relative overflow-hidden">

                <div className="absolute top-0 left-0 w-full h-2 bg-teal-600"></div>

                <Activity className="w-12 h-12 text-teal-500" />

                <div>

                  <div className="font-bold text-gray-900">Your Personalized Guide</div>

                  <div className="text-xs text-gray-500 mt-1">Generated instantly</div>

                </div>

                <div className="w-full space-y-2 mt-4">

                  <div className="h-2 bg-gray-100 rounded w-full"></div>

                  <div className="h-2 bg-gray-100 rounded w-3/4 mx-auto"></div>

                  <div className="h-2 bg-gray-100 rounded w-5/6 mx-auto"></div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Trust Strip */}

      <div className="bg-white border-y border-gray-100 py-10 bg-gray-50/50">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">Methods Grounded In</p>

          <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-8 md:gap-16">

             <div className="flex items-center gap-3 font-semibold text-gray-600">

                <div className="bg-teal-100 p-2 rounded-lg"><Brain className="w-6 h-6 text-teal-700" /></div>

                <span>Neuroscience</span>

             </div>

             <div className="flex items-center gap-3 font-semibold text-gray-600">

                <div className="bg-blue-100 p-2 rounded-lg"><Microscope className="w-6 h-6 text-blue-700" /></div>

                <span>Evidence-Based Research</span>

             </div>

             <div className="flex items-center gap-3 font-semibold text-gray-600">

                <div className="bg-purple-100 p-2 rounded-lg"><Users className="w-6 h-6 text-purple-700" /></div>

                <span>Child Psychology</span>

             </div>

          </div>

        </div>

      </div>

      {/* Problem Section */}

      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">

        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">

            We Know What You're Going Through

          </h2>

          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">

            You're doing everything right. You got the diagnosis. You're researching therapies at midnight. You're advocating at school meetings. And yet...

          </p>

          <div className="grid md:grid-cols-2 gap-8 items-center">

            <div className="bg-red-50 p-8 rounded-2xl border border-red-100">

              <ul className="space-y-4">

                <li className="flex items-start gap-3">

                  <X className="text-red-500 w-5 h-5 flex-shrink-0 mt-1" />

                  <span className="text-gray-700">The waitlist for a specialist is <strong>12-18 months</strong></span>

                </li>

                <li className="flex items-start gap-3">

                  <X className="text-red-500 w-5 h-5 flex-shrink-0 mt-1" />

                  <span className="text-gray-700">Google gives you 47 options that <strong>all contradict each other</strong></span>

                </li>

                <li className="flex items-start gap-3">

                  <X className="text-red-500 w-5 h-5 flex-shrink-0 mt-1" />

                  <span className="text-gray-700">A psych-ed assessment costs <strong>$3,500+</strong></span>

                </li>

                <li className="flex items-start gap-3">

                  <X className="text-red-500 w-5 h-5 flex-shrink-0 mt-1" />

                  <span className="text-gray-700">Every day feels like precious development time slipping away</span>

                </li>

              </ul>

            </div>

            

            <div className="text-center md:text-left space-y-6">

              <h3 className="text-2xl font-bold text-gray-900">

                You just want someone to tell you: <br/>

                <span className="text-teal-600 text-3xl block mt-2">"Start here. Do this first."</span>

              </h3>

              <p className="text-xl text-gray-600 font-medium">That's exactly what ThriveGuide does.</p>

              <button onClick={() => scrollToSection('how-it-works')} className="text-teal-600 font-bold flex items-center gap-2 hover:gap-3 transition-all mx-auto md:mx-0">

                See how it works <ArrowRight className="w-4 h-4" />

              </button>

            </div>

          </div>

        </div>

      </section>

      {/* Solution Section */}

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Your "5 to Thrive": A Clear Path Forward</h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">

              In about one hour, you'll receive a personalized guide with five specific goals—prioritized in the exact order that will help your child make the fastest progress.

            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">

            <div className="bg-white p-8 rounded-2xl text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100">

              <div className="bg-teal-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">

                <Brain className="text-teal-600 w-8 h-8" />

              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">Get Insights</h3>

              <p className="text-gray-600 text-sm leading-relaxed">

                Our algorithm analyzes your child's unique profile—connecting physical health, environment, and development patterns.

              </p>

            </div>

            <div className="bg-white p-8 rounded-2xl text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100">

              <div className="bg-teal-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">

                <Activity className="text-teal-600 w-8 h-8" />

              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">Take Action</h3>

              <p className="text-gray-600 text-sm leading-relaxed">

                Receive your "5 to Thrive"—five prioritized recommendations so you know exactly where to begin. No more guessing.

              </p>

            </div>

            <div className="bg-white p-8 rounded-2xl text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100">

              <div className="bg-teal-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">

                <Heart className="text-teal-600 w-8 h-8" />

              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">Feel Confident</h3>

              <p className="text-gray-600 text-sm leading-relaxed">

                Every recommendation is backed by scientific research and explained clearly. You'll understand not just what to do, but why.

              </p>

            </div>

          </div>

          

          <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">

            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal-400 to-teal-600"></div>

            <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center">What's Inside Your ThriveGuide</h3>

            <div className="grid md:grid-cols-2 gap-y-8 gap-x-12">

              <div className="flex items-start gap-4">

                <div className="bg-teal-100 p-2 rounded-lg shrink-0">

                  <Star className="text-teal-600 w-6 h-6" />

                </div>

                <div>

                  <h4 className="font-bold text-lg text-gray-900 mb-1">Your "5 to Thrive"</h4>

                  <p className="text-gray-600 text-sm">Five personalized, prioritized goals matched to your child's specific needs.</p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="bg-teal-100 p-2 rounded-lg shrink-0">

                  <Brain className="text-teal-600 w-6 h-6" />

                </div>

                <div>

                  <h4 className="font-bold text-lg text-gray-900 mb-1">ThriveGuide Insights</h4>

                  <p className="text-gray-600 text-sm">Fresh perspectives on your child's development you may not have considered.</p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="bg-teal-100 p-2 rounded-lg shrink-0">

                  <FileText className="text-teal-600 w-6 h-6" />

                </div>

                <div>

                  <h4 className="font-bold text-lg text-gray-900 mb-1">Psychometric Scores</h4>

                  <p className="text-gray-600 text-sm">Up to 5 assessments with clear interpretations based on your child's profile.</p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="bg-teal-100 p-2 rounded-lg shrink-0">

                  <BookOpen className="text-teal-600 w-6 h-6" />

                </div>

                <div>

                  <h4 className="font-bold text-lg text-gray-900 mb-1">Research Backing</h4>

                  <p className="text-gray-600 text-sm">Scientific sources linked to every recommendation, so you can trust the advice.</p>

                </div>

              </div>

              <div className="flex items-start gap-4 md:col-span-2 bg-teal-50 p-4 rounded-xl border border-teal-100">

                <div className="bg-teal-200 p-2 rounded-lg shrink-0">

                  <Video className="text-teal-700 w-6 h-6" />

                </div>

                <div>

                  <h4 className="font-bold text-lg text-gray-900 mb-1">Bonus: Parent Training Videos</h4>

                  <p className="text-gray-600 text-sm">"The Essentials" course from our founder Jonathan Alderson, covering foundational strategies.</p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Expert Section */}

      <section className="py-20 bg-white border-t border-gray-100 px-4 sm:px-6 lg:px-8">

        <div className="max-w-6xl mx-auto">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div className="order-2 md:order-1">

              <div className="inline-block bg-teal-100 text-teal-800 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">Expert Led</div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet Your Autism Expert</h2>

              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">

                <p>

                  Hi! My name is <strong>Jonathan Alderson</strong>, autism specialist, Harvard graduate, and author of the award-winning book <em>Challenging the Myths of Autism</em>.

                </p>

                <p>

                  As an autism program director, I've seen remarkable success working with <span className="text-teal-700 font-semibold">over 2,000 autistic children</span> and their families for over 25 years!

                </p>

                <p>

                  But many of the parents I've supported feel hopeless with their child stuck on waiting lists, overwhelmed with the financial cost, and uncertain.

                </p>

                

                <div className="bg-teal-50 p-6 rounded-xl border-l-4 border-teal-500 my-6 shadow-sm">

                  <p className="font-bold text-teal-900 mb-2">My promise to you:</p>

                  <p className="text-teal-800 text-base">

                    I want to empower you with a <strong>FREE parenting course</strong> included in your ThriveGuide. It's my way of ensuring you have the skills you need immediately.

                  </p>

                </div>

                <p className="font-handwriting text-3xl text-teal-600 pt-4 font-bold" style={{ fontFamily: 'cursive' }}>

                  Your learning fuels their growth

                </p>

              </div>

            </div>

            <div className="order-1 md:order-2 flex justify-center">

              <div className="relative">

                {/* Image Placeholder */}

                <div className="w-72 h-72 md:w-96 md:h-96 bg-gray-200 rounded-full overflow-hidden border-8 border-teal-50 shadow-2xl relative z-10">

                  <svg className="w-full h-full text-gray-400" fill="currentColor" viewBox="0 0 24 24">

                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />

                  </svg>

                </div>

                

                {/* Badges */}

                <div className="absolute bottom-4 -left-6 z-20 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3 border border-gray-100 animate-bounce-slow">

                  <div className="bg-teal-100 p-2 rounded-full">

                    <GraduationCap className="text-teal-600 w-6 h-6" />

                  </div>

                  <div>

                    <p className="font-bold text-gray-900 text-sm">Harvard Graduate</p>

                    <p className="text-xs text-gray-500">Autism Specialist</p>

                  </div>

                </div>

                <div className="absolute top-10 -right-6 z-20 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3 border border-gray-100">

                  <div className="bg-yellow-100 p-2 rounded-full">

                    <Award className="text-yellow-600 w-6 h-6" />

                  </div>

                  <div>

                    <p className="font-bold text-gray-900 text-sm">Award Winning</p>

                    <p className="text-xs text-gray-500">Author</p>

                  </div>

                </div>

                

                {/* Decorative background element */}

                <div className="absolute top-0 right-0 w-full h-full bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 transform translate-x-4 translate-y-4 -z-0"></div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* NEW SECTION: "Is this for me?" */}

      <section className="py-20 bg-teal-900 text-white px-4 sm:px-6 lg:px-8">

        <div className="max-w-6xl mx-auto">

            <h2 className="text-3xl font-bold text-center mb-12">Is ThriveGuide Right for Your Family?</h2>

            <div className="grid md:grid-cols-2 gap-8">

                <div className="bg-teal-800 p-8 rounded-2xl border border-teal-700">

                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><CheckCircle2 className="text-teal-400" /> Perfect if you are...</h3>

                    <ul className="space-y-4">

                        <li className="flex items-start gap-3">

                            <Check className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />

                            <span>Stuck on a waitlist with no support.</span>

                        </li>

                        <li className="flex items-start gap-3">

                            <Check className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />

                            <span>Dealing with a recent diagnosis and feel overwhelmed.</span>

                        </li>

                        <li className="flex items-start gap-3">

                            <Check className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />

                            <span>Wanting to maximize your time at home with proven strategies.</span>

                        </li>

                         <li className="flex items-start gap-3">

                            <Check className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />

                            <span>Looking for a research-backed starting point.</span>

                        </li>

                    </ul>

                </div>

                <div className="bg-teal-900 p-8 rounded-2xl border border-teal-800 opacity-80">

                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-gray-300"><HelpCircle className="text-gray-400" /> Not for you if...</h3>

                    <ul className="space-y-4 text-gray-300">

                        <li className="flex items-start gap-3">

                            <X className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />

                            <span>You are looking for a medical diagnosis (we provide educational support).</span>

                        </li>

                        <li className="flex items-start gap-3">

                            <X className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />

                            <span>You want a "quick fix" or pill without active parent involvement.</span>

                        </li>

                        <li className="flex items-start gap-3">

                            <X className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />

                            <span>You are looking for emergency crisis intervention.</span>

                        </li>

                    </ul>

                </div>

            </div>

        </div>

      </section>

      {/* Process Section */}

      <section id="how-it-works" className="py-20 bg-gray-900 text-white px-4 sm:px-6 lg:px-8 border-t border-gray-800">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">

            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>

            <p className="text-gray-400 text-xl">Three simple steps. About one hour total. Results you can act on immediately.</p>

          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">

            {/* Connecting line for desktop */}

            <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gray-700 -z-0 transform scale-x-75"></div>

            <div className="relative z-10 bg-gray-800 p-8 rounded-2xl border border-gray-700 transition transform hover:-translate-y-1 duration-300">

              <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-xl font-bold mb-6 mx-auto md:mx-0 shadow-lg shadow-teal-500/30">1</div>

              <h3 className="text-xl font-bold mb-3">Complete Profile</h3>

              <p className="text-sm text-gray-400 mb-4 font-mono bg-gray-900 inline-block px-2 py-1 rounded">20-30 MINUTES</p>

              <p className="text-gray-300 text-sm leading-relaxed">

                Answer questions about your child's development, behaviors, health, and home environment. You know your child—we just need you to share what you see.

              </p>

            </div>

            <div className="relative z-10 bg-gray-800 p-8 rounded-2xl border border-gray-700 transition transform hover:-translate-y-1 duration-300">

              <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-xl font-bold mb-6 mx-auto md:mx-0 shadow-lg shadow-teal-500/30">2</div>

              <h3 className="text-xl font-bold mb-3">Algorithm Analyzes</h3>

              <p className="text-sm text-gray-400 mb-4 font-mono bg-gray-900 inline-block px-2 py-1 rounded">INSTANT</p>

              <p className="text-gray-300 text-sm leading-relaxed">

                Built by autism therapists with 70+ years of combined experience, our system identifies patterns and connections across dozens of evidence-based strategies.

              </p>

            </div>

            <div className="relative z-10 bg-gray-800 p-8 rounded-2xl border border-gray-700 transition transform hover:-translate-y-1 duration-300">

              <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-xl font-bold mb-6 mx-auto md:mx-0 shadow-lg shadow-teal-500/30">3</div>

              <h3 className="text-xl font-bold mb-3">Receive Your Guide</h3>

              <p className="text-sm text-gray-400 mb-4 font-mono bg-gray-900 inline-block px-2 py-1 rounded">WITHIN 24 HOURS</p>

              <p className="text-gray-300 text-sm leading-relaxed">

                Your personalized guide arrives via email—complete with your "5 to Thrive," insights, research links, and parent training access.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Testimonials */}

      <section className="py-20 bg-teal-50 px-4 sm:px-6 lg:px-8">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">What Parents Are Saying</h2>

          <div className="grid md:grid-cols-3 gap-8">

            {testimonials.map((t, i) => (

              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm relative">

                <div className="text-teal-400 absolute top-6 left-6 opacity-30">

                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.896 14.321 15.923 14.929 15.081C15.537 14.239 16.29 13.561 17.189 13.047C18.089 12.533 19.062 12.276 20.109 12.276V7C19.062 7 18.089 7.257 17.189 7.771C16.29 8.285 15.537 8.963 14.929 9.805C14.321 10.647 14.017 11.62 14.017 12.724V21H14.017ZM5.01699 21L5.01699 18C5.01699 16.896 5.32099 15.923 5.92899 15.081C6.53699 14.239 7.28999 13.561 8.18999 13.047C9.08999 12.533 10.063 12.276 11.109 12.276V7C10.063 7 9.08999 7.257 8.18999 7.771C7.28999 8.285 6.53699 8.963 5.92899 9.805C5.32099 10.647 5.01699 11.62 5.01699 12.724V21H5.01699Z" /></svg>

                </div>

                <p className="text-gray-700 italic mb-6 relative z-10 pt-6">{t.text}</p>

                <div>

                  <p className="font-bold text-gray-900">{t.author}</p>

                  <p className="text-sm text-gray-500">{t.role}</p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Pricing Section */}

      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">An Investment That Makes Sense</h2>

          

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 mb-12">

            <div className="overflow-x-auto">

              <table className="w-full text-left border-collapse">

                <thead>

                  <tr className="bg-gray-50 border-b border-gray-200">

                    <th className="p-6 text-sm font-semibold text-gray-500 uppercase tracking-wider w-1/2">Alternative</th>

                    <th className="p-6 text-sm font-semibold text-gray-500 uppercase tracking-wider text-center">Wait Time</th>

                    <th className="p-6 text-sm font-semibold text-gray-500 uppercase tracking-wider text-right">Typical Cost</th>

                  </tr>

                </thead>

                <tbody className="divide-y divide-gray-100">

                  <tr>

                    <td className="p-6 text-gray-700 font-medium">Full Psycho-Educational Assessment</td>

                    <td className="p-6 text-center text-gray-500"><Clock className="inline w-4 h-4 mr-1"/> Weeks</td>

                    <td className="p-6 text-gray-900 font-bold text-right">$3,500+</td>

                  </tr>

                  <tr>

                    <td className="p-6 text-gray-700 font-medium">Single Private Therapy Session</td>

                    <td className="p-6 text-center text-gray-500"><Clock className="inline w-4 h-4 mr-1"/> Days</td>

                    <td className="p-6 text-gray-900 font-bold text-right">$150 - $250</td>

                  </tr>

                  <tr>

                    <td className="p-6 text-gray-700 font-medium">Waitlist for Public Services</td>

                    <td className="p-6 text-center text-red-500 font-bold">12 - 18 months</td>

                    <td className="p-6 text-gray-900 font-bold text-right">Free</td>

                  </tr>

                  <tr className="bg-teal-50 relative">

                    <td className="p-6">

                      <div className="absolute top-0 left-0 bg-teal-600 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded-br">Best Value</div>

                      <span className="text-teal-900 font-bold text-lg block">ThriveGuide</span>

                      <span className="text-teal-700 text-sm">Personalized goals, insights, research, and training</span>

                    </td>

                    <td className="p-6 text-center text-teal-700 font-bold"><Clock className="inline w-4 h-4 mr-1"/> &lt; 24 Hours</td>

                    <td className="p-6 text-teal-700 font-bold text-2xl text-right align-middle">$89</td>

                  </tr>

                </tbody>

              </table>

            </div>

            <div className="p-8 md:p-12 text-center bg-gradient-to-br from-teal-50 to-white">

              <div className="text-5xl font-extrabold text-gray-900 mb-2">$89</div>

              <p className="text-gray-500 mb-8 font-medium">One-time fee. Yours forever. No subscription.</p>

              

              <button className="w-full md:w-2/3 bg-teal-600 text-white text-xl font-bold px-8 py-4 rounded-full shadow-lg hover:bg-teal-700 hover:shadow-xl transition-all duration-300 mb-6">

                Get Your Personalized ThriveGuide Now

              </button>

              

              <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-sm text-gray-500">

                <ShieldCheck className="w-5 h-5 text-teal-500" />

                <span className="font-semibold text-gray-700">100% MONEY-BACK GUARANTEE</span>

                <span className="hidden md:inline">•</span>

                <span>If you don't find value, we refund every penny.</span>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FAQ Section */}

      <section id="faq" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">

        <div className="max-w-3xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Common Questions</h2>

          <div className="space-y-4">

            {faqs.map((faq, index) => (

              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">

                <button

                  onClick={() => toggleFaq(index)}

                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"

                >

                  <span className="font-bold text-gray-900 text-lg">{faq.question}</span>

                  {openFaq === index ? <ChevronUp className="text-teal-600" /> : <ChevronDown className="text-gray-400" />}

                </button>

                <div 

                  className={`px-6 text-gray-600 transition-all duration-300 ease-in-out ${

                    openFaq === index ? 'max-h-96 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'

                  }`}

                >

                  {faq.answer}

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Footer / Final CTA */}

      <footer className="bg-teal-900 text-white pt-20 pb-24 md:pb-10 px-4 sm:px-6 lg:px-8">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-6">You've Waited Long Enough</h2>

          <p className="text-xl text-teal-100 mb-10 max-w-2xl mx-auto">

            Every week on a waitlist is a week your child could be making progress. Every hour spent lost in Google is an hour you could be taking action.

          </p>

          

          <button onClick={() => scrollToSection('pricing')} className="bg-white text-teal-900 text-xl font-bold px-10 py-4 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300 mb-6 inline-flex items-center gap-2">

            Get Your ThriveGuide – $89 <ArrowRight className="w-5 h-5" />

          </button>

          

          <p className="text-teal-200 mb-16 text-sm font-medium">100% Money-Back Guarantee</p>

          <div className="border-t border-teal-800 pt-10 flex flex-col md:flex-row justify-between items-center text-teal-400 text-sm">

            <div className="mb-4 md:mb-0 text-left">

              <span className="font-bold text-white text-lg block mb-2">ThriveGuide</span>

              Questions? Email us at <a href="mailto:support@thriveguide.co" className="underline hover:text-white">support@thriveguide.co</a>

            </div>

            <div className="text-center md:text-right flex flex-col items-center md:items-end gap-2">

              <p>&copy; {new Date().getFullYear()} ThriveGuide. All rights reserved.</p>

              <div className="flex gap-4 text-xs text-teal-500">

                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>

                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>

              </div>

            </div>

          </div>

        </div>

      </footer>

      {/* Mobile Sticky CTA */}

      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 md:hidden z-50 flex justify-between items-center shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">

        <div>

           <span className="block text-xs text-gray-500 uppercase font-bold">Total Price</span>

           <span className="block text-xl font-black text-teal-600">$89</span>

        </div>

        <button 

          onClick={() => scrollToSection('pricing')}

          className="bg-teal-600 text-white font-bold py-3 px-6 rounded-full shadow-md hover:bg-teal-700 active:bg-teal-800 transition-colors"

        >

          Get Started

        </button>

      </div>

    </div>

  );

};

export default LandingPage;
