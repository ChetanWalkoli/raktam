import { Stethoscope } from 'lucide-react';

const Lander = () => {
    return (
      <div className="font-sans text-black bg-white">
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
          <div className='flex gap-3 font-bold text-lg='>
            <Stethoscope /> Raktam
          </div>
          <nav className="space-x-6 text-sm font-medium">
            <a href="#donate" className="hover:text-[#ff2b8c]">Donate</a>
            <a href="#request" className="hover:text-[#ff2b8c]">Need Blood</a>
            <a href="#ai" className="hover:text-[#ff2b8c]">Raktam AI</a>
            <a href="#dashboard" className="hover:text-[#ff2b8c]">Login</a>
          </nav>
        </header>
  
        {/* Hero Section */}
        <section className="relative bg-cover bg-center h-[80vh]" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white p-4">
            <h1 className="text-4xl md:text-6xl font-bold">Raktam : Life Flows Through You</h1>
            <p className="mt-4 text-lg md:text-xl">A smarter, faster way to donate, request, and track blood health.</p>
            <button className="mt-6 px-6 py-3 bg-[#ff2b8c] hover:bg-[#e02177] text-white font-semibold rounded">
              Get Started
            </button>
          </div>
        </section>
  
        {/* Features Section */}
        <section id="features" className="py-20 px-6 bg-[#f9f9f9] text-center">
          <h2 className="text-3xl font-bold mb-12 text-[#007bff]">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div>
              <img src="/donor_register.png" alt="Donor Registration" className="mx-auto h-20 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Donor Registration</h3>
              <p>Quickly sign up, track your eligibility, and get notified of local donation needs.</p>
            </div>
            <div>
              <img src="/request_blood.png" alt="Request Blood" className="mx-auto h-20 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Request Blood</h3>
              <p>Find nearby donors instantly when lives depend on every second.</p>
            </div>
            <div>
              <img src="/ai_ctb.png" alt="AI CTB" className="mx-auto h-20 mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI-powered CTB Analysis</h3>
              <p>Upload your reports and get fast, AI-generated interpretation of key blood markers.</p>
            </div>
          </div>
        </section>
  
        {/* AI Tools */}
        <section id="ai" className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#007bff] mb-6">AI-Powered Blood Health</h2>
            <p className="text-lg mb-12">
              Leveraging artificial intelligence to provide personalized blood health tips, track donation cycles, and optimize wellness.
            </p>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="p-6 bg-[#f1f5ff] rounded shadow">
                <h3 className="text-xl font-semibold mb-2">CTB Report Analyzer</h3>
                <p>Upload a Complete Blood Test (CTB) report and receive insights instantly with doctor-style recommendations.</p>
              </div>
              <div className="p-6 bg-[#fff4fa] rounded shadow">
                <h3 className="text-xl font-semibold mb-2">Personalized Tips</h3>
                <p>Get daily AI-generated suggestions to improve your blood iron, hemoglobin, hydration and immunity.</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* How it Works */}
        <section id="how-it-works" className="py-20 bg-[#e6f0ff] text-center px-6">
          <h2 className="text-3xl font-bold text-[#007bff] mb-8">How Raktam Works</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-10">
            <div>
              <img src="/signup.png" alt="Sign Up" className="h-16 mx-auto mb-4" />
              <h4 className="font-semibold">1. Register as Donor</h4>
              <p>Answer a few questions and become a certified donor in minutes.</p>
            </div>
            <div>
              <img src="/search.png" alt="Find Donors" className="h-16 mx-auto mb-4" />
              <h4 className="font-semibold">2. Request or Search</h4>
              <p>Request urgent blood or browse nearby donors based on type and location.</p>
            </div>
            <div>
              <img src="/ai_track.png" alt="AI Tracking" className="h-16 mx-auto mb-4" />
              <h4 className="font-semibold">3. Track Health</h4>
              <p>Monitor health and improve readiness for your next donation cycle with AI.</p>
            </div>
          </div>
        </section>
  
        {/* Testimonials */}
        <section id="testimonials" className="py-20 bg-white text-center px-6">
          <h2 className="text-3xl font-bold text-[#ff2b8c] mb-10">What Users Say</h2>
          <blockquote className="max-w-3xl mx-auto text-xl italic">
            “Raktam helped us find a rare blood type within 20 minutes. It literally saved a life. The AI tips are a bonus for long-term donors!”
          </blockquote>
          <p className="mt-4 font-medium text-gray-600">— Asha M., Delhi</p>
        </section>
  
        {/* Call to Action */}
        <section className="py-20 px-6 bg-[#ff2b8c] text-white text-center">
          <h2 className="text-3xl font-bold mb-6">Join the Raktam Network</h2>
          <p className="mb-6">Every drop counts. Be the difference between life and death today.</p>
          <button className="px-8 py-3 bg-white text-[#ff2b8c] font-bold rounded hover:bg-gray-100">
            Become a Donor
          </button>
        </section>
  
        {/* Footer */}
        <footer className="bg-gray-100 text-center text-sm py-6">
          <p>© {new Date().getFullYear()} Raktam. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="/terms" className="hover:text-[#007bff]">Terms</a>
            <a href="/privacy" className="hover:text-[#007bff]">Privacy</a>
          </div>
        </footer>
      </div>
    );
  };
  
  export default Lander;