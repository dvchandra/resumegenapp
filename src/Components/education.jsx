import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SaveSharpIcon from "@material-ui/icons/SaveSharp";

export default function Education(props) {
  const [userEdu, setuserEdu] = useState({
    institurName: "",
    degree: "",
    durationFrom: "",
    durationTo: "",
    major: "",
    id: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setuserEdu((prevData) => {
      return {
        ...prevData,
        [name]: value,
        id: props.id + Math.floor(Math.random() * 6)
      };
    });
  }
  function addData(event) {
    event.preventDefault();
    props.addeduData(userEdu);
    setuserEdu((prevData) => {
      return {
        institurName: "",
        degree: "",
        durationFrom: "",
        durationTo: "",
        major: "",
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
                name="institurName"
                id="institurName"
                label="Institute Name"
                variant="outlined"
                type="text"
                value={userEdu.institurName}
                onChange={handleChange}
                fullWidth
                required
              />
            </div>

            <div class="col-lg-12">
              <TextField
                name="degree"
                id="degree"
                label="Degree"
                variant="outlined"
                type="text"
                value={userEdu.degree}
                onChange={handleChange}
                fullWidth
                required
              />
            </div>
            <div class="col-lg-12">
              <TextField
                name="major"
                id="major"
                label="Major"
                variant="outlined"
                type="text"
                value={userEdu.major}
                onChange={handleChange}
                fullWidth
                required
              />
            </div>
            <div class="col-lg-12">
              <TextField
                name="durationFrom"
                id="durationFrom"
                label="Studied From"
                variant="outlined"
                type="date"
                value={userEdu.durationFrom}
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
                label="Studied Till"
                variant="outlined"
                type="date"
                value={userEdu.durationTo}
                onChange={handleChange}
                fullWidth
                required
                InputLabelProps={{
                  shrink: true
                }}
              />
            </div>
          </div>
          <button id="saveButton" class="btn btn-secondary" onClick={addData}>
            <SaveSharpIcon />
            &nbsp; Save
          </button>
        </div>
      )}
    </div>
  );
}
