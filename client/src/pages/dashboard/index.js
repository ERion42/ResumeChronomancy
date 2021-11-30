import React from 'react';
import EducationForm from '../../components/forms/EducationForm';
import ExperienceForm from '../../components/forms/ExperiencesForm';



function Dashboard() {
    // Waiting for forms for Skills and Experience... odds are we're going to have to re-do this one. I feel like we probably need 
    const [checked, setChecked]=React.useState(false);
      const [checkedOne, setCheckedOne] = React.useState(false);
      const [checkedTwo, setCheckedTwo] = React.useState(false);
      const [checkedThree, setCheckedThree] = React.useState(false);
      const [checkedFour, setCheckedFour] = React.useState(false);
      const [checkedFive, setCheckedFive] = React.useState(false);
      const [checkedSix, setCheckedSix] = React.useState(false);
      const [checkedSeven, setCheckedSeven] = React.useState(false);
      const [checkedEight, setCheckedEight] = React.useState(false);
      const [checkedNine, setCheckedNine] = React.useState(false);
      const [checkedTen, setCheckedTen] = React.useState(false);
      const [checkedEleven, setCheckedEleven] = React.useState(false);
      const [checkedTwelve, setCheckedTwelve] = React.useState(false);
      const [checkedThirteen, setCheckedThirteen] = React.useState(false);
      const [checkedFourteen, setCheckedFourteen] = React.useState(false);
    
      const handleChange = () => {
          setChecked(!checked)
      }
      const handleChangeOne = () => {
        setCheckedOne(!checkedOne);
      };
      const handleChangeTwo = () => {
        setCheckedTwo(!checkedTwo);
      };
      const handleChangeThree = () => {
        setCheckedThree(!checkedThree);
      };
      const handleChangeFour = () => {
        setCheckedFour(!checkedFour);
      };
      const handleChangeFive = () => {
        setCheckedFive(!checkedFive);
      };
      const handleChangeSix = () => {
        setCheckedSix(!checkedSix);
      };
      const handleChangeSeven = () => {
        setCheckedSeven(!checkedSeven);
      };
      const handleChangeEight = () => {
        setCheckedEight(!checkedEight);
      };
      const handleChangeNine = () => {
        setCheckedNine(!checkedNine);
      };
      const handleChangeTen = () => {
        setCheckedTen(!checkedTen);
      };
      const handleChangeEleven = () => {
        setCheckedEleven(!checkedEleven);
      };
      const handleChangeTwelve = () => {
        setCheckedTwelve(!checkedTwelve);
      };
      const handleChangeThirteen = () => {
        setCheckedThirteen(!checkedThirteen);
      };
      const handleChangeFourteen = () => {
        setCheckedFourteen(!checkedFourteen);
      };
    return (
        <div className="container ">
            <div class="row">
                <div className="col-md-4 bg-info rounded m-1 pb-4 mt-4 ">
                    <h2>Education</h2>
                    <ul className="list-group checkbox-list-group">
                        {/* Template for Item List */}
                        <a href="#" className="list-group-item list-group-item-action" aria-current="true"  >
                            <div class="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Item Heading</h5>
                            </div>
                            <p className="mb-1">Secondary Information</p>
                            <small>Tertiary Information</small>
                            <div>
                                <label>
                                    <input
                                    type="checkbox"
                                    checked={checked}
                                    onChange={handleChange}
                                    />
                                </label>
                            </div>
                            
                        </a>

                        <a href="#" className="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Item Heading</h5>
                            </div>
                            <p className="mb-1">Secondary Information</p>
                            <small>Tertiary Information</small>
                            <div>
                                <label>
                                    <input
                                    type="checkbox"
                                    checked={checkedOne}
                                    onChange={handleChangeOne}
                                    />
                                </label>
                            </div>
                        </a>

                        <a href="#" className="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Item Heading</h5>
                            </div>
                            <p className="mb-1">Secondary Information</p>
                            <small>Tertiary Information</small>
                            <div>
                                <label>
                                    <input
                                    type="checkbox"
                                    checked={checkedTwo}
                                    onChange={handleChangeTwo}
                                    />
                                </label>
                            </div>
                        </a>

                        <a href="#" className="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Item Heading</h5>
                            </div>
                            <p className="mb-1">Secondary Information</p>
                            <small>Tertiary Information</small>
                            <div>
                                <label>
                                    <input
                                    type="checkbox"
                                    checked={checkedThree}
                                    onChange={handleChangeThree}
                                    />
                                </label>
                            </div>
                        </a>

                        <a href="#" className="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Item Heading</h5>
                            </div>
                            <p className="mb-1">Secondary Information</p>
                            <small>Tertiary Information</small>
                            <div>
                                <label>
                                    <input
                                    type="checkbox"
                                    checked={checkedFour}
                                    onChange={handleChangeFour}
                                    />
                                </label>
                            </div>
                        </a>
                    </ul>
                </div>
                <div className="col-md bg-warning rounded m-1 mt-4">
                    <h2>Skills</h2>
                    <ul className="list-group">
                        {/* Template for Item List */}
                        <a href="#" className="list-group-item list-group-item-action" aria-current="true">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Item Heading</h5>
                            </div>
                            <p className="mb-1">Secondary Information</p>
                            <small>Tertiary Information</small>
                            <div>
                                <label>
                                    <input
                                    type="checkbox"
                                    checked={checkedFive}
                                    onChange={handleChangeFive}
                                    />
                                </label>
                            </div>
                        </a>

                        <a href="#" className="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Item Heading</h5>
                            </div>
                            <p className="mb-1">Secondary Information</p>
                            <small>Tertiary Information</small>
                            <div>
                                <label>
                                    <input
                                    type="checkbox"
                                    checked={checkedSix}
                                    onChange={handleChangeSix}
                                    />
                                </label>
                            </div>
                        </a>

                        <a href="#" className="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Item Heading</h5>
                            </div>
                            <p className="mb-1">Secondary Information</p>
                            <small>Tertiary Information</small>
                            <div>
                                <label>
                                    <input
                                    type="checkbox"
                                    checked={checkedSeven}
                                    onChange={handleChangeSeven}
                                    />
                                </label>
                            </div>
                        </a>

                        <a href="#" className="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Item Heading</h5>
                            </div>
                            <p className="mb-1">Secondary Information</p>
                            <small>Tertiary Information</small>
                            <div>
                                <label>
                                    <input
                                    type="checkbox"
                                    checked={checkedEight}
                                    onChange={handleChangeEight}
                                    />
                                </label>
                            </div>
                        </a>

                        <a href="#" className="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Item Heading</h5>
                            </div>
                            <p className="mb-1">Secondary Information</p>
                            <small>Tertiary Information</small>
                            <div>
                                <label>
                                    <input
                                    type="checkbox"
                                    checked={checkedNine}
                                    onChange={handleChangeNine}
                                    />
                                </label>
                            </div>
                        </a>
                    </ul>
                </div>
                <div className="col-md bg-primary rounded m-1 mt-4">
                    <h3>Experience</h3>
                    <ul className="list-group">
                        {/* Template for Item List */}
                        <a href="#" className="list-group-item list-group-item-action" aria-current="true">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Item Heading</h5>
                            </div>
                            <p className="mb-1">Secondary Information</p>
                            <small>Tertiary Information</small>
                            <div>
                                <label>
                                    <input
                                    type="checkbox"
                                    checked={checkedTen}
                                    onChange={handleChangeTen}
                                    />
                                </label>
                            </div>
                        </a>

                        <a href="#" className="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Item Heading</h5>
                            </div>
                            <p className="mb-1">Secondary Information</p>
                            <small>Tertiary Information</small>
                            <div>
                                <label>
                                    <input
                                    type="checkbox"
                                    checked={checkedEleven}
                                    onChange={handleChangeEleven}
                                    />
                                </label>
                            </div>
                        </a>

                        <a href="#" className="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Item Heading</h5>
                            </div>
                            <p className="mb-1">Secondary Information</p>
                            <small>Tertiary Information</small>
                            <div>
                                <label>
                                    <input
                                    type="checkbox"
                                    checked={checkedTwelve}
                                    onChange={handleChangeTwelve}
                                    />
                                </label>
                            </div>
                        </a>

                        <a href="#" className="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Item Heading</h5>
                            </div>
                            <p className="mb-1">Secondary Information</p>
                            <small>Tertiary Information</small>
                            <div>
                                <label>
                                    <input
                                    type="checkbox"
                                    checked={checkedThirteen}
                                    onChange={handleChangeThirteen}
                                    />
                                </label>
                            </div>
                        </a>

                        <a href="#" className="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Item Heading</h5>
                            </div>
                            <p className="mb-1">Secondary Information</p>
                            <small>Tertiary Information</small>
                            <div>
                                <label>
                                    <input
                                    type="checkbox"
                                    checked={checkedFourteen}
                                    onChange={handleChangeFourteen}
                                    />
                                </label>
                            </div>
                        </a>
                    </ul>
                </div>
            </div>
            <div className="row justify-content-center">
                <button className="col-6 bg-success rounded m-1 text-center text-white">
                    <h1>Generate Resume</h1>
                </button>
            </div>
        </div>
        
    );
}

export default Dashboard;