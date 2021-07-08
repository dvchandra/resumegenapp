import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import SaveSharpIcon from "@material-ui/icons/SaveSharp";

export default function Exprience(props) {
  const [userExp, setuserExp] = useState({
    companyName: "",
    designation: "",
    durationFrom: "",
    durationTo: "",
    achievements: "",
    id: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setuserExp((prevData) => {
      return {
        ...prevData,
        [name]: value,
        id: props.id + Math.floor(Math.random() * 6)
      };
    });
  }
  function addData(event) {
    event.preventDefault();
    props.addexpData(userExp);
    setuserExp((prevData) => {
      return {
        companyName: "",
        designation: "",
        durationFrom: "",
        durationTo: "",
        achievements: "",
        id: ""
      };
    });
  }
  return (
    <div>
      {props.showData && (
        <div>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <TextField
                name="companyName"
                id="companyName"
                label="Company Name"
                variant="outlined"
                type="text"
                value={userExp.companyName}
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
                value={userExp.designation}
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
                value={userExp.durationFrom}
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
                value={userExp.durationTo}
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
                value={userExp.achievements}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
          </Grid>
          <Button id="saveButton" variant="contained" onClick={addData}>
            <SaveSharpIcon />
            &nbsp; Save
          </Button>
        </div>
      )}
    </div>
  );
}
