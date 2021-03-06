import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SaveSharpIcon from "@material-ui/icons/SaveSharp";

export default function Exprience(props) {
  const [userExp, setuserExp] = useState({
    companyName: "",
    designation: "",
    durationFrom: "",
    durationTo: "",
    workDesc: "",
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
        workDesc: "",
        id: ""
      };
    });
  }
  return (
    <div>
      {props.showData && (
        <div>
          <div class="row">
            <div class="col-lg-12">
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
            </div>

            <div class="col-lg-12">
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
            </div>
            <div class="col-lg-12">
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
            </div>
            <div class="col-lg-12">
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
            </div>
            <div class="col-lg-12">
              <TextField
                name="workDesc"
                id="workDesc"
                label="Roles and Responsibility"
                variant="outlined"
                type="text"
                value={userExp.workDesc}
                onChange={handleChange}
                fullWidth
                required
              />
            </div>
          </div>
          <Button id="saveButton" variant="contained" onClick={addData}>
            <SaveSharpIcon />
            &nbsp; Save
          </Button>
        </div>
      )}
    </div>
  );
}
