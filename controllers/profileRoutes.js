const router = require("express").Router();
const { Project, Admin, Contact } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    // Get all blog posts and JOIN with user and comment data
    const projectData = await Project.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });

    // Serialize data so the template can read it
    const projects = projectData.map((project) => project.get({ plain: true }));

    // Pass serialized data and session flag into template
    console.log("logged in status", req.session.logged_in);
    res.render("profile", {
      projects,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/update/:id", withAuth, async (req, res) => {
  try {
    const projectData = await Project.findByPk(req.params.id, {});

    const project = projectData.get({ plain: true });
    console.log(project);

    res.render("update", {
      ...project,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
