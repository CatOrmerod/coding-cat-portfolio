const router = require('express').Router();
const { Project } = require('../models');

router.get('/', (req, res) => {
    res.render('aboutme');
});

router.get('/resume', (req, res) => {
    res.render('resume');
});

router.get('/aboutme', (req, res) => {
    res.render('aboutme');
});

router.get('/contact', (req, res) => {
    res.render('contact');
});

router.get('/projects', async (req, res) => {
    try {
      // Get all projects 
      const projectData = await Project.findAll({});
  
      // Serialize data so the template can read it
      const projects = projectData.map((project) => project.get({ plain: true }));
      console.log(projects)
      console.log("logged in status", req.session.logged_in)
      // Pass serialized data and session flag into template
      res.render('projects', { 
        projects: projects
      });
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
    res.render('login');
});

router.get('/logout', (req, res) => {
    res.render('aboutme');
});
  
module.exports = router;