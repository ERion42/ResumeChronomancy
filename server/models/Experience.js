const { Schema, model } = require("mongoose");

const experienceSchema = new Schema({
    organization: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    start_date: {
        type: Date,
        required: true,
        max: Date.now
    },
    end_date: {
        type: Date,
        required: false,
        max: Date.now
    },
    location: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    }
});

const Experience = model("Experience", experienceSchema);

module.exports = Experience;