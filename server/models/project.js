const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = Schema({
    title: String,
    image: String,
    description: String,
    links: {
        github: String,
        demo: String
    },
    stack: {
        frontend: String,
        backend: String
    }
});

mongoose.model('project', projectSchema);
