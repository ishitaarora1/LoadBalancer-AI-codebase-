import React from "react";

export default function Home() {
  return (
    <div className="bg-white min-h-screen font-sans text-gray-800">
      <nav className="flex justify-between items-center px-10 py-6 shadow-md">
        <h1 className="text-xl font-bold text-purple-700">LoadBalancer AI</h1>
        <div className="space-x-6">
          <a href="#about" className="hover:text-purple-600">About</a>
          <a href="#features" className="hover:text-purple-600">Features</a>
          <a href="#launch" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">Launch Portal</a>
        </div>
      </nav>

      <header className="text-center py-20 bg-gradient-to-r from-purple-100 to-blue-100">
        <h2 className="text-4xl font-bold mb-4">AI-Powered Fairness in Project Allocation</h2>
        <p className="text-lg mb-6">Eliminating politics. Predicting burnout. Empowering skills.</p>
        <a href="#launch" className="bg-purple-600 text-white px-6 py-3 rounded shadow hover:bg-purple-700">
          Launch Portal
        </a>
      </header>

      <section id="about" className="flex flex-col md:flex-row items-center px-10 py-16 bg-white">
        <img
          src="/founder.jpg"
          alt="Founder Ishita Arora"
          className="w-60 h-60 object-cover rounded-full shadow-lg mb-6 md:mb-0 md:mr-10"
        />
        <div className="max-w-2xl">
          <h3 className="text-2xl font-bold mb-4">The Why Behind LoadBalancer AI – A Founder’s Note</h3>
          <p className="text-gray-700 leading-relaxed">
            In most organizations, burnout, bias, and silent resignations are treated like myths. They’re whispered on
            YouTube, buried under fancy dashboards — but never really acknowledged in systems.
            <br /><br />I lived it. I flagged it. And when no platform showed me the numbers behind the unfairness — I built one.
            LoadBalancer AI brings together skill matching, behavior analysis, and AI-led burnout prediction into one brutally honest, yet constructive system.
            <br /><br />When the world tells you \"You're not good enough,\" LoadBalancer AI shows you:
            “You upskilled 12%. Your match score improved. The system sees you.”
          </p>
        </div>
      </section>

      <section id="features" className="bg-gray-50 px-10 py-16 text-center">
        <h3 className="text-3xl font-bold mb-10">Why LoadBalancer AI?</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-white shadow-md p-6 rounded">
            <h4 className="font-semibold text-purple-600 mb-2">Skill Matching</h4>
            <p>Match employees to projects based on real-time skill data.</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded">
            <h4 className="font-semibold text-purple-600 mb-2">Behavioral Insights</h4>
            <p>Discover which personality traits affect project allocations.</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded">
            <h4 className="font-semibold text-purple-600 mb-2">Burnout Predictor</h4>
            <p>Use AI to detect silent resignations & emotional fatigue.</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded">
            <h4 className="font-semibold text-purple-600 mb-2">Bias Detection</h4>
            <p>Uncover systemic patterns of internal bias and favoritism.</p>
          </div>
        </div>
      </section>

      <footer className="text-center py-6 text-sm text-gray-500">
        © 2025 LoadBalancer AI. Built with empathy.
      </footer>
    </div>
  );
}
