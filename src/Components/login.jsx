import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
export default function Login(props) {
  const [loginData, setloginData] = useState({
    email: "",
    password: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;

    setloginData((prevData) => {
      return {
        ...prevData,
        [name]: value
      };
    });
  }
  function getGoogle(event) {
    // axios
    //   .get('/post')
    //   .then(() => console.log('Resume Created'))
    //   .catch(err => {
    //     console.error(err);
    //   });
  }
  function signupverify(event) {
    event.preventDefault();
    props.authenticate(true);
  }
  return (
    <div className="row">
      <div className="col-lg-8 ">
        <div className="card ml-5">
          <div className="card-body">
            <form method="POST" noValidate autoComplete="off">
              <Typography>Login</Typography>

              <div className="row">
                <div className="col-lg-8">
                  <TextField
                    name="email"
                    id="email"
                    label="Email ID"
                    variant="outlined"
                    type="email"
                    value={loginData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-lg-8">
                  <TextField
                    name="password"
                    id="password"
                    label="Password"
                    variant="outlined"
                    type="password"
                    value={loginData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <button className="btn btn-primary" onClick={signupverify}>
                signup
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="col-lg-4 pl-0 pr-0">
        <Card>
          <CardContent>
            <div>
              <a
                class="btn btn-block btn-social btn-google"
                href="/auth/google"
                role="button"
              >
                <i class="fab fa-google"></i>
                Sign Up with Google
              </a>
            </div>
            <div className="mt-2">
              <a
                class="btn btn-block btn-social btn-facebook"
                href="/auth/facebook"
                role="button"
              >
                <i class="fab fa-facebook"></i>
                Sign Up with Facebook
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
