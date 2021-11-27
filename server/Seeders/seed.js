const db = require('../config/connection');
const { Education, Experience, Profile, Skills, UserInfo} = require('../models');
const educationSeeds = require('./educationSeeds.json');
const experienceSeeds = require('./experienceSeeds.json');
const profileSeeds = require('./profileSeeds.json');
const skillSeeds = require('./skillSeeds.json');
const userInfoSeeds = require('./userInfoSeeds.json');

db.once('open', async () => {
	try {
		await Education.deleteMany({});
		await Experience.deleteMany({});
		await Profile.deleteMany({});
		await Skills.deleteMany({});
		await UserInfo.deleteMany({});

		await Education.create(educationSeeds);
		await Experience.create(experienceSeeds);
		await Profile.create(profileSeeds);
		await Skills.create(skillSeeds);
		await UserInfo.create(userInfoSeeds);

		console.log('Donezo!');
		process.exit(0);
	} catch (err) {
		throw err;
	}
});