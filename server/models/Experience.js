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
    startDate: {
        type: Date,
        required: true,
        max: Date.now
    },
    endDate: {
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
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "Profile"
    }
});

const Experience = model("Experience", experienceSchema);

module.exports = Experience;