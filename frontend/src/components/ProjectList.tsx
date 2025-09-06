'use client'

import { useState, useEffect } from 'react'

interface Project {
  id: number
  title: string
  description: string
  technology: string
  status: 'completed' | 'in-progress' | 'planned'
}

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch projects from backend API
    fetch('http://localhost:5000/api/projects')
      .then(res => res.json())
      .then(data => {
        setProjects(data.projects || [])
        setLoading(false)
      })
      .catch(error => {
        console.error('Failed to fetch projects:', error)
        // Fallback to static data if API fails
        setProjects([
          {
            id: 1,
            title: 'Responsive Frontend',
            description: 'Modern React components with Tailwind CSS styling',
            technology: 'Next.js + TypeScript',
            status: 'completed'
          },
          {
            id: 2,
            title: 'RESTful API Backend',
            description: 'Express.js server with proper routing and middleware',
            technology: 'Express.js + Node.js',
            status: 'completed'
          },
          {
            id: 3,
            title: 'Form Validation',
            description: 'Client-side and server-side form validation',
            technology: 'React Hook Form',
            status: 'completed'
          },
          {
            id: 4,
            title: 'API Integration',
            description: 'Frontend communicates with backend APIs',
            technology: 'Fetch API',
            status: 'completed'
          }
        ])
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map(i => (
          <div key={i} className="bg-gray-200 p-6 rounded-lg animate-pulse">
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
            <div className="h-3 bg-gray-300 rounded mb-4"></div>
            <div className="h-3 bg-gray-300 rounded w-3/4"></div>
          </div>
        ))}
      </div>
    )
  }

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800'
      case 'in-progress': return 'bg-yellow-100 text-yellow-800'
      case 'planned': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusIcon = (status: Project['status']) => {
    switch (status) {
      case 'completed': return '✅'
      case 'in-progress': return '🔄'
      case 'planned': return '📋'
      default: return '❓'
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map(project => (
        <div key={project.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              {project.title}
            </h3>
            <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(project.status)}`}>
              {getStatusIcon(project.status)} {project.status.replace('-', ' ')}
            </span>
          </div>
          
          <p className="text-gray-600 mb-4">
            {project.description}
          </p>
          
          <div className="bg-gray-50 px-3 py-2 rounded-md">
            <span className="text-sm font-medium text-indigo-600">
              {project.technology}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
