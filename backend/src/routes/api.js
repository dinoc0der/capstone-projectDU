const express = require('express');
const router = express.Router();

// Sample data for projects
const projects = [
  {
    id: 1,
    title: 'Responsive Frontend',
    description: 'Modern React components with Tailwind CSS styling and TypeScript',
    technology: 'Next.js + TypeScript',
    status: 'completed',
    features: ['Responsive design', 'Component architecture', 'Type safety'],
    createdAt: '2025-01-01'
  },
  {
    id: 2,
    title: 'RESTful API Backend',
    description: 'Express.js server with proper routing, middleware, and error handling',
    technology: 'Express.js + Node.js',
    status: 'completed',
    features: ['REST API', 'Middleware', 'Error handling', 'CORS support'],
    createdAt: '2025-01-02'
  },
  {
    id: 3,
    title: 'Form Validation System',
    description: 'Client-side and server-side form validation with user feedback',
    technology: 'React Hook Form + Express Validator',
    status: 'completed',
    features: ['Client validation', 'Server validation', 'Error messages'],
    createdAt: '2025-01-03'
  },
  {
    id: 4,
    title: 'API Integration',
    description: 'Frontend communicates seamlessly with backend APIs',
    technology: 'Fetch API + Async/Await',
    status: 'completed',
    features: ['API calls', 'Error handling', 'Loading states'],
    createdAt: '2025-01-04'
  },
  {
    id: 5,
    title: 'Git Version Control',
    description: 'Professional Git workflow with proper commit messages and branching',
    technology: 'Git + GitHub',
    status: 'completed',
    features: ['Version control', 'Commit history', 'Repository structure'],
    createdAt: '2025-01-05'
  }
];

// GET /api/projects - Get all projects
router.get('/projects', (req, res) => {
  try {
    console.log('📋 Fetching projects list');
    
    res.json({
      success: true,
      count: projects.length,
      projects: projects,
      message: 'Projects retrieved successfully'
    });
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch projects',
      message: error.message
    });
  }
});

// GET /api/projects/:id - Get project by ID
router.get('/projects/:id', (req, res) => {
  try {
    const projectId = parseInt(req.params.id);
    const project = projects.find(p => p.id === projectId);
    
    if (!project) {
      return res.status(404).json({
        success: false,
        error: 'Project not found',
        message: `Project with ID ${projectId} does not exist`
      });
    }
    
    console.log(`📋 Fetching project ${projectId}`);
    
    res.json({
      success: true,
      project: project
    });
  } catch (error) {
    console.error('Error fetching project:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch project',
      message: error.message
    });
  }
});

// POST /api/contact - Handle contact form submission
router.post('/contact', (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields',
        message: 'Please provide name, email, and message'
      });
    }
    
    // Email validation
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email format',
        message: 'Please provide a valid email address'
      });
    }
    
    // Log the contact form submission
    console.log('📧 Contact form submission received:');
    console.log(`   Name: ${name}`);
    console.log(`   Email: ${email}`);
    console.log(`   Message: ${message.substring(0, 100)}${message.length > 100 ? '...' : ''}`);
    
    // In a real application, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Add to CRM system
    
    // Simulate processing time
    setTimeout(() => {
      res.json({
        success: true,
        message: 'Contact form submitted successfully!',
        data: {
          id: Date.now(),
          name,
          email,
          submittedAt: new Date().toISOString(),
          status: 'received'
        }
      });
    }, 500);
    
  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to process contact form',
      message: error.message
    });
  }
});

// GET /api/stats - Get project statistics
router.get('/stats', (req, res) => {
  try {
    const stats = {
      totalProjects: projects.length,
      completedProjects: projects.filter(p => p.status === 'completed').length,
      inProgressProjects: projects.filter(p => p.status === 'in-progress').length,
      plannedProjects: projects.filter(p => p.status === 'planned').length,
      technologies: [...new Set(projects.map(p => p.technology))],
      lastUpdated: new Date().toISOString()
    };
    
    console.log('📊 Fetching project statistics');
    
    res.json({
      success: true,
      stats: stats
    });
  } catch (error) {
    console.error('Error fetching stats:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch statistics',
      message: error.message
    });
  }
});

module.exports = router;
