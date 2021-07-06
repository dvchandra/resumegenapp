import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
function UserForm(props) {
  const [userdata, setdata] = useState({
    fname: "",
    lname: "",
    age: "",
    gender: "",
    email: "",
    address: "",
    phoneno: ""
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
  function submitData(event) {
    props.addUser(userdata);
    setdata({
      fname: "",
      lname: "",
      age: "",
      gender: "",
      email: "",
      address: "",
      phoneno: ""
    });
    event.preventDefault();
  }
  return (
    <div>
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
                  name="age"
                  id="age"
                  label="Age"
                  variant="outlined"
                  value={userdata.age}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={6}>
                <FormControl>
                  <InputLabel htmlFor="gender">Gender</InputLabel>
                  <Select
                    native
                    value={userdata.gender}
                    onChange={handleChange}
                    inputProps={{
                      name: "gender",
                      id: "gender"
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={"Male"}>Male</option>
                    <option value={"Female"}>Female</option>
                  </Select>
                </FormControl>
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
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Button
                  onClick={submitData}
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  submit details
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </div>
  );
}
export default UserForm;
