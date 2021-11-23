const db = require('../config/connection');
const { Education, Experience, Profile, Skills} = require('../models');
const educationSeeds = require('../educationSeeds.js');
const experienceSeeds = require('../experienceSeeds.js');
const profileSeeds = require('../profileSeeds.js');
const skillSeeds = require('../skillSeeds.js');

db.once('open', async () => {
	try {
		await Education.deleteMany({});
		await Experience.deleteMany({});
		await Profile.deleteMany({});
		await Skills.deleteMany({});

		await Education.create(educationSeeds);
		await Experience.create(experienceSeeds);
		await Profile.create(profileSeeds);
		await Skills.create(skillSeeds);

		console.log('Donezo!');
		process.exit(0);
	} catch (err) {
		throw err;
	}
});