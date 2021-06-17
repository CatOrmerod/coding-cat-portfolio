const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('aboutme');
});

router.get('/projects', (req, res) => {
    res.render('projects');
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
  
module.exports = router;