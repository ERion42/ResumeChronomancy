export const saveEducations = (education) => {
  localStorage.setItem('saved_education', JSON.stringify(education));
};

export const saveExperiences = (experience) => {
  localStorage.setItem('saved_experience', JSON.stringify(experience));
};

export const saveTechnicalSkill = (technicalSkill) => {
  localStorage.setItem('saved_technicalSkill', JSON.stringify(technicalSkill));
};

export const saveLanguage = (language) => {
    localStorage.setItem('saved_language', JSON.stringify(language))
}

export const saveSoftSkill = (softSkill) => {
    localStorage.setItem('saved_softSkill', JSON.stringify(softSkill))
}

export const saveInterest = (interest) => {
    localStorage.setItem('saved_interest', JSON.stringify(interest))
}

export const saveUserInfo = (userInfo) => {
    localStorage.setItem('saved_userInfo', JSON.stringify(userInfo));
};

export const getSavedEducations = () => {
    const savedEducations = localStorage.getItem('saved_education') 
    ? JSON.parse(localStorage.getItem('saved_education')) 
    : [];

    return savedEducations
}

export const getSavedExperiences = () => {
    const savedExperiences = localStorage.getItem('saved_experience') 
    ? JSON.parse(localStorage.getItem('saved_experience')) 
    : [];

    return savedExperiences
}

export const getSavedTechnicalSkills = () => {
    const savedTechnicalSkills = localStorage.getItem('saved_technicalSkill') 
    ? JSON.parse(localStorage.getItem('saved_technicalSkill')) 
    : [];

    return savedTechnicalSkills
}

export const getSavedLanguage = () => {
    const savedLanguage = localStorage.getItem('saved_language') 
    ? JSON.parse(localStorage.getItem('saved_language')) 
    : [];

    return savedLanguage
}

export const getSavedSoftSkill = () => {
    const savedSoftSkills = localStorage.getItem('saved_softSkill') 
    ? JSON.parse(localStorage.getItem('saved_softSkill')) 
    : [];

    return savedSoftSkills
}

export const getSavedInterest = () => {
    const savedInterest = localStorage.getItem('saved_interest') 
    ? JSON.parse(localStorage.getItem('saved_interest')) 
    : [];

    return savedInterest
}

export const getSavedUserInfo = () => {
    const savedUserInfo = localStorage.getItem('saved_userInfo') ? JSON.parse(localStorage.getItem('saved_userInfo')) : [];
    return savedUserInfo
}