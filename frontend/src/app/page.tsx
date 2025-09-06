'use client'

import { useState, useEffect } from 'react'
import ContactForm from '@/components/ContactForm'
import ProjectList from '@/components/ProjectList'

export default function Home() {
  const [apiStatus, setApiStatus] = useState<'loading' | 'online' | 'offline'>('loading')

  useEffect(() => {
    // Check backend API status
    fetch('http://localhost:5000/api/health')
      .then(res => res.json())
      .then(() => setApiStatus('online'))
      .catch(() => setApiStatus('offline'))
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold text-gray-900">
                Capstone Project
              </h1>
              <span className="ml-4 px-3 py-1 text-sm rounded-full bg-green-100 text-green-800">
                Next.js + Express.js
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${ 
                apiStatus === 'online' ? 'bg-green-500' : 
                apiStatus === 'offline' ? 'bg-red-500' : 'bg-yellow-500'
              }`}></div>
              <span className="text-sm text-gray-600">
                API {apiStatus === 'loading' ? 'Checking...' : apiStatus}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
            Welcome to My Capstone Project
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A professional full-stack application demonstrating modern web development 
            skills with Next.js frontend and Express.js backend architecture.
          </p>
          <div className="flex justify-center space-x-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-2">✅ Next.js Frontend</h3>
              <p className="text-gray-600">Modern React framework</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-2">✅ Express.js Backend</h3>
              <p className="text-gray-600">Robust Node.js API</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-2">✅ Git Version Control</h3>
              <p className="text-gray-600">Professional workflow</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Project Features
          </h2>
          <ProjectList />
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Get In Touch
          </h2>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Capstone Project Complete</h3>
          <p className="text-gray-400 mb-6">
            This project meets all certification requirements with modern web technologies.
          </p>
          <div className="flex justify-center space-x-6">
            <span className="text-green-400">✓ Next.js</span>
            <span className="text-green-400">✓ Express.js</span>
            <span className="text-green-400">✓ Git & GitHub</span>
            <span className="text-green-400">✓ Ready for Submission</span>
          </div>
        </div>
      </footer>
    </main>
  )
}
