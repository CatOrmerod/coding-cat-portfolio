const router = require('express').Router();
const adminRoutes = require('./adminRoutes');
const projectRoutes = require('./projectRoutes');
const contactRoutes = require('./contactRoutes');

router.use('/admin', adminRoutes);
router.use('/projects', projectRoutes);
router.use('/contacts', contactRoutes);

module.exports = router;