export default function EducateAILandingPage() {
  return (
    <div className="font-sans text-black bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 shadow-md">
        <img src="logo_goby.png" alt="Educate AI Logo" className="h-10" />
        <nav className="space-x-6">
          <a href="#" className="hover:text-blue-600">Subscribe & Save</a>
          <a href="#" className="hover:text-blue-600">Shop Now</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-[80vh] bg-cover bg-center flex flex-col items-center justify-center text-center px-4" style={{ backgroundImage: "url('https://www.microsoft.com/en-us/research/wp-content/uploads/2023/03/AI_Microsoft_Research_Header_1920x720.png')" }}>
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-md">AI-POWERED LEARNING</h1>
        <p className="mt-4 text-lg md:text-xl text-white max-w-2xl">Educate AI helps students instantly get textbook-based answers, customized by grade, subject, and board.</p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">Get Started</button>
      </section>

      {/* Awards Section */}
      <section className="bg-[#1f53f3] text-white py-10 text-center">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="font-semibold">Top Educational AI</p>
            <p className="text-sm">EDTECH DIGEST</p>
          </div>
          <div>
            <p className="font-semibold">Best AI Learning Tool</p>
            <p className="text-sm">TECHCRUNCH</p>
          </div>
          <div>
            <p className="font-semibold">Innovator in EdTech 2025</p>
            <p className="text-sm">FORBES</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative bg-cover bg-center text-center text-white py-16 px-4" style={{ backgroundImage: "url('pink_toothbrush_features.jpg')" }}>
        <ul className="max-w-3xl mx-auto text-lg space-y-2">
          <li>Supports CBSE, ICSE & State Boards</li>
          <li>Grade-wise & Subject-wise textbook integration</li>
          <li>AI-Powered Instant Q&A</li>
          <li>Clean, Distraction-Free Interface</li>
          <li>Mobile & Desktop Compatible</li>
        </ul>
        <p className="mt-8 text-2xl font-bold">STUDY SMARTER WITH AI</p>
        <button className="mt-4 px-5 py-3 bg-pink-600 hover:bg-pink-700 rounded-full transition">Learn More</button>
      </section>

      {/* How it Works */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">HOW IT WORKS</h2>
        <p className="mb-10">Choose your board, subject, and grade. Ask your textbook question. Get an AI-generated, curriculum-aligned answer instantly.</p>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-xl mb-2">SELECT</h3>
            <p>Choose your Exam Board, Grade, and Subject</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">ASK</h3>
            <p>Enter your question from the textbook</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">ANSWER</h3>
            <p>Receive accurate AI-based explanations instantly</p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">STUDENT FEEDBACK</h2>
        <blockquote className="italic max-w-2xl mx-auto">“Educate AI is like having a smart tutor 24/7. It makes studying easier and saves a ton of time!”</blockquote>
        <p className="mt-4 font-semibold">— Aarav, Class 10 Student</p>
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Read More Reviews</button>
      </section>

      {/* Mission Section */}
      <section className="flex flex-col md:flex-row items-center gap-6 px-6 py-16 max-w-6xl mx-auto">
        <img src="goby_gives_back.jpg" alt="Educate Mission" className="w-full md:w-1/2 rounded-xl" />
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">OUR MISSION</h2>
          <p>Educate AI aims to bridge learning gaps and bring clarity to students from all backgrounds. We’re dedicated to empowering education with AI across India and beyond.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 px-6 text-center">
        <p>© 2025 Educate AI</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="underline">Terms of Service</a>
          <a href="#" className="underline">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
}
