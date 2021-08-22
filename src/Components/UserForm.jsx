import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Experience from "./experience";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Tooltip from "@material-ui/core/Tooltip";
import Alert from "@material-ui/lab/Alert";
import ExpTable from "./expTable";
import axios from "axios";
function getSteps() {
  return ["Personal Details", "Experience", "Education"];
}
function UserForm(props) {
  const [userdata, setdata] = useState({
    fname: "",
    lname: "",
    age: "",
    gender: "",
    email: "",
    address: "",
    phoneno: "",
    linkdn: "",
    curPosition: "",
    profileDesc: "",
    experience: [
      {
        companyName: "",
        designation: "",
        durationFrom: "",
        durationTo: "",
        achievements: "",
        id: "00"
      }
    ]
  });
  const [addExpFlag, setExpFlag] = useState(false);
  const [sucessFlag, setsucessFlag] = useState(false);
  function handleChange(event) {
    const { name, value } = event.target;

    setdata((prevData) => {
      return {
        ...prevData,
        [name]: value
      };
    });
  }
  function handleAddExp() {
    setExpFlag(true);
    setsucessFlag(false);
  }
  function addExperience(userExp) {
    setdata((prevData) => {
      return { ...prevData, experience: [...prevData.experience, userExp] };
    });
    setExpFlag(false);
    setsucessFlag(true);
    removeEmptyData();
  }
  function removeEmptyData() {
    setdata((prevData) => {
      let exp = prevData.experience.filter((exp) => {
        return exp.id !== "00";
      });
      return { ...prevData, experience: exp };
    });
  }
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();
  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };
  const handleReset = () => {
    setActiveStep(0);
  };
  function submitData(event) {
    removeEmptyData();
    props.addUser(userdata);
    const {
      fname,
      lname,
      age,
      gender,
      email,
      address,
      phoneno,
      linkdn,
      curPosition,
      profileDesc,
      experience
    } = userdata;
    const objId = props.userData;
    const body = {
      fname,
      lname,
      age,
      gender,
      email,
      address,
      phoneno,
      experience,
      linkdn,
      curPosition,
      profileDesc,
      objId
    };

    axios
      .post("https://resume-genapp-bend.herokuapp.com/sendResumeData", body)
      .then(() => console.log("Resume Created"))
      .catch((err) => {
        console.error(err);
      });

    setdata({
      fname: "",
      lname: "",
      age: "",
      gender: "",
      email: "",
      address: "",
      phoneno: "",
      companyName: "",
      designation: "",
      durationFrom: "",
      durationTo: "",
      achievements: "",
      linkdn: "",
      curPosition: "",
      profileDesc: ""
    });
    event.preventDefault();
  }
  return (
    <div className="userForm">
      <div>
        <div>
          <Avatar
            alt="Remy Sharp"
            src="https://image.flaticon.com/icons/png/512/2922/2922506.png"
          />
        </div>
        <div>
          <h4>Welcome , {props.name}</h4>
        </div>
      </div>
      <div className="card shadow-sm p-3 mb-5 bg-white rounded">
        <div className="card-body">
          <form method="POST" noValidate autoComplete="off">
            <div className="stepper">
              <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                  const stepProps = {};
                  const labelProps = {};
                  if (isStepOptional(index)) {
                    labelProps.optional = (
                      <Typography variant="caption">Optional</Typography>
                    );
                  }
                  if (isStepSkipped(index)) {
                    stepProps.completed = false;
                  }
                  return (
                    <Step key={label} {...stepProps}>
                      <StepLabel {...labelProps}>{label}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
              <div>
                {activeStep === steps.length ? (
                  <div>
                    <Typography>
                      All steps completed - you&apos;re finished
                    </Typography>
                    <Button onClick={handleReset}>Reset</Button>
                  </div>
                ) : (
                  <div>
                    {activeStep === 0 ? (
                      <div className="personal">
                        <div className="form-inline">
                          <div className="col-lg-6">
                            <TextField
                              name="fname"
                              id="fname"
                              label="First Name"
                              variant="outlined"
                              value={userdata.fname}
                              onChange={handleChange}
                              fullWidth
                              required
                            />
                          </div>
                          <div className="col-lg-6">
                            <TextField
                              name="lname"
                              id="lname"
                              label="Last Name"
                              variant="outlined"
                              value={userdata.lname}
                              onChange={handleChange}
                              fullWidth
                              required
                            />
                          </div>
                          <div className="col-lg-6">
                            <TextField
                              name="email"
                              id="email"
                              label="Email"
                              variant="outlined"
                              type="email"
                              value={userdata.email}
                              onChange={handleChange}
                              fullWidth
                              required
                            />
                          </div>
                          <div className="col-lg-6">
                            <TextField
                              name="phoneno"
                              id="phoneno"
                              label="Phone Number"
                              variant="outlined"
                              type="phoneno"
                              value={userdata.phoneno}
                              onChange={handleChange}
                              fullWidth
                              required
                            />
                          </div>
                          <div className="col-lg-12">
                            <TextField
                              name="address"
                              id="address"
                              label="Address"
                              variant="outlined"
                              type="address"
                              value={userdata.address}
                              onChange={handleChange}
                              fullWidth
                              required
                            />
                          </div>
                          <div className="col-lg-6">
                            <TextField
                              name="linkdn"
                              id="linkdn"
                              label="Linkdn Address"
                              variant="outlined"
                              type="linkdn"
                              value={userdata.linkdn}
                              onChange={handleChange}
                              fullWidth
                              required
                            />
                          </div>
                          <div className="col-lg-6">
                            <TextField
                              name="curPosition"
                              id="curPosition"
                              label="Current Position"
                              variant="outlined"
                              type="curPosition"
                              value={userdata.curPosition}
                              onChange={handleChange}
                              fullWidth
                              required
                            />
                          </div>
                          <div className="col-lg-12">
                            <TextField
                              name="profileDesc"
                              id="profileDesc"
                              label="Brief Description"
                              variant="outlined"
                              type="profileDesc"
                              value={userdata.profileDesc}
                              onChange={handleChange}
                              fullWidth
                              required
                            />
                          </div>
                        </div>
                      </div>
                    ) : activeStep === 1 ? (
                      <div className="experience">
                        {sucessFlag && (
                          <div>
                            <Alert severity="success">
                              Sucessfully added Experience!
                            </Alert>
                            {userdata.experience.map((exp, index) => {
                              return (
                                <ExpTable key={index} id={index} data={exp} />
                              );
                            })}
                          </div>
                        )}
                        {addExpFlag ? (
                          <div>
                            {userdata.experience.map((exp, index) => {
                              return (
                                <Experience
                                  key={index}
                                  id={index}
                                  addexpData={addExperience}
                                  showData={
                                    index === userdata.experience.length - 1
                                  }
                                />
                              );
                            })}
                          </div>
                        ) : (
                          <Tooltip title="Add Experience" aria-label="add">
                            <Fab
                              color="primary"
                              aria-label="add"
                              onClick={handleAddExp}
                            >
                              <AddIcon />
                            </Fab>
                          </Tooltip>
                        )}
                      </div>
                    ) : (
                      <h1>nothing</h1>
                    )}
                    <div>
                      <Button disabled={activeStep === 0} onClick={handleBack}>
                        Back
                      </Button>
                      {isStepOptional(activeStep) && (
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleSkip}
                        >
                          Skip
                        </Button>
                      )}

                      {activeStep === steps.length - 1 ? (
                        <Button
                          onClick={submitData}
                          variant="contained"
                          color="primary"
                        >
                          submit details
                        </Button>
                      ) : (
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleNext}
                        >
                          Next
                        </Button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default UserForm;
