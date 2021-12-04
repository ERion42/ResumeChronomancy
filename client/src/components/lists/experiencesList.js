import React from 'react';

const ExperiencesList = ({ experiences }) => {
  if (!experiences.length) {
    return <h3>No Skills Yet</h3>;
  }

  return (
    <div>
      <div className="flex-row justify-space-between my-4">
        {experiences &&
          experiences.map((experience) => (
            <div key={experience} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {experience} <br />
                </h4>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ExperiencesList;
