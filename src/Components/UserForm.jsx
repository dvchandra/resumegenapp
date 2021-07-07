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
    companyName: "",
    designation: "",
    durationFrom: "",
    durationTo: "",
    achievements: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;

    setdata((prevData) => {
      return {
        ...prevData,
        [name]: value
      };
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
    props.addUser(userdata);
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
          <form noValidate autoComplete="off">
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
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={12} md={12} lg={12}>
                            <TextField
                              name="companyName"
                              id="companyName"
                              label="Company Name"
                              variant="outlined"
                              type="text"
                              value={userdata.companyName}
                              onChange={handleChange}
                              fullWidth
                              required
                            />
                          </Grid>

                          <Grid item xs={12} sm={12} md={12} lg={12}>
                            <TextField
                              name="designation"
                              id="designation"
                              label="Designation"
                              variant="outlined"
                              type="text"
                              value={userdata.designation}
                              onChange={handleChange}
                              fullWidth
                              required
                            />
                          </Grid>
                          <Grid item xs={12} sm={12} md={12} lg={12}>
                            <TextField
                              name="durationFrom"
                              id="durationFrom"
                              label="Worked From"
                              variant="outlined"
                              type="date"
                              value={userdata.durationFrom}
                              onChange={handleChange}
                              fullWidth
                              required
                              InputLabelProps={{
                                shrink: true
                              }}
                            />
                            <TextField
                              name="durationTo"
                              id="durationTo"
                              label="Worked Till"
                              variant="outlined"
                              type="date"
                              value={userdata.durationTo}
                              onChange={handleChange}
                              fullWidth
                              required
                              InputLabelProps={{
                                shrink: true
                              }}
                            />
                          </Grid>
                          <Grid item xs={12} sm={12} md={12} lg={12}>
                            <TextField
                              name="achievements"
                              id="achievements"
                              label="Achievements"
                              variant="outlined"
                              type="text"
                              value={userdata.achievements}
                              onChange={handleChange}
                              fullWidth
                              required
                            />
                          </Grid>
                        </Grid>
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
