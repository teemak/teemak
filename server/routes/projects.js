const mongoose = require('mongoose');
const Project = mongoose.model('project');

module.exports = app => {
    
    app.get('/api/projects', (req, res) => {
        Project
            .find()
            .then(projects => res.json(projects))
            .catch(err => res.status(400).json(err));
    });

    app.post('/api/projects', (req, res) => {
        const { title, image, description, stack,
            icons, github, demo, frontend, backend 
        } = req.body;

        const project = new Project({ title,
            image, description, stack, links 
        }); 

        project.links.github = req.body.github;
        project.links.demo = req.body.demo;
        project.stack.frontend = req.body.frontend;
        project.stack.backend = req.body.backend;

        project
            .save()
            .then(project => res.json(project))
            .catch(err => res.status(400).json(err));
    });

}
