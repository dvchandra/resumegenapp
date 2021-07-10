import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Experience from "./experience";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Tooltip from "@material-ui/core/Tooltip";
import Alert from "@material-ui/lab/Alert";
import ExpTable from "./expTable";
import axios from 'axios';
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
    const {fname,lname,age,gender,email,address,phoneno,experience} = userdata
        const body = {
  fname,lname,age,gender,email,address,phoneno,experience
  };

  axios
    .post('/post', body)
    .then(() => console.log('Resume Created'))
    .catch(err => {
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
      achievements: ""
    });
    event.preventDefault();
  }
  return (
    <div className="userForm">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Avatar
            alt="Remy Sharp"
            src="https://image.flaticon.com/icons/png/512/2922/2922506.png"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" component="h4">
            welcome , User
          </Typography>
        </Grid>
      </Grid>
      <Card>
        <CardContent>
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
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={12} md={12} lg={6}>
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
                          </Grid>
                          <Grid item xs={12} sm={12} md={12} lg={6}>
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
                          </Grid>
                          <Grid item xs={12} sm={12} md={12} lg={6}>
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
                          </Grid>
                          <Grid item xs={12} sm={12} md={12} lg={6}>
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
                          </Grid>
                          <Grid item xs={12} sm={12} md={12} lg={12}>
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
                          </Grid>
                        </Grid>
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
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </div>
  );
}
export default UserForm;
