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
  const [signupFlag, setsignupFlag] = useState(false);
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
  function signupPage(event) {
    event.preventDefault();
    setsignupFlag(true);
  }
  function signupUser(event) {
    event.preventDefault();
    setsignupFlag(false);
  }
  function signupverify(event) {
    event.preventDefault();
    props.authenticate(true);
  }
  return (
    <div className="row">
      <div className="col-lg-8 col-sm-8 col-xs-8 loginForm">
        <div className="card ml-5">
          <div className="card-body">
            <form method="POST" noValidate autoComplete="off">
              {signupFlag ? (
                <Typography>Sign up</Typography>
              ) : (
                <Typography>Login</Typography>
              )}

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
              {signupFlag ? (
                <button className="btn btn-dark mr-2" onClick={signupUser}>
                  Sign up
                </button>
              ) : (
                <div>
                  <button className="btn btn-dark mr-2" onClick={signupPage}>
                    Sign up
                  </button>

                  <button className="btn btn-primary" onClick={signupverify}>
                    Login
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-4 col-xs-4 socialMedBtn">
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
