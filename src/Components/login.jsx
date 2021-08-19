import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
export default function Login(props) {
  const [loginData, setloginData] = useState({
    email: "",
    password: "",
    name:""
  });
  const [loggedinData , setloggedinData] = useState({
    data:"",flag:"",name:""
  });
  const [signupData,setsignupData] = useState({
    data:"",flag:""
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
    setsignupFlag(!signupFlag);
    clearValue();
  }
  function signupUser(event) {

    const {email,password,name}=loginData;
    const id = Math.floor(Math.random()*100000);
    const body={id,email,password,name};
    axios
    .post('https://resume-genapp-bend.herokuapp.com/signup', body)
    .then(res =>{ setsignupData(() => {
      return {
        data:res.data.signup,
      flag:res.data.flag}})})
    .catch(err => {
      console.error(err);
    });
    if(signupData.flag===true){
   setsignupFlag(false);
   clearValue();
  }
}
  async function signupverify(event) {
    event.preventDefault();
    let passVal=false;
    const {email,password}=loginData;
    const body={email,password};
    await axios
    .post('https://resume-genapp-bend.herokuapp.com/loginUser', body)
    .then(res =>
      {setloggedinData(()=>{
        return {
          data:res.data.userId?res.data.userId:res.data.err,
          name:res.data.name?res.data.name:"",
          flag:res.data.flag
    }})
  }
).catch(err => {
      console.error(err);
      setloggedinData(()=>{
        return {data:"Data not matched",flag:false}}
      )
    })
props.authenticate(loggedinData);
}
  function clearValue(){
    setloggedinData({
      data:"",flag:""
    });
    setloginData({
      email: "",
      password: ""
    });
    setsignupData({
      data:"",flag:""
    });
  }
  function avoidPost(event) {
    event.preventDefault()
  }
  return (
    <div className="row">
      <div className="col-lg-8 col-sm-8 col-xs-8 loginForm">
        <div className="card ml-5">
          <div className="card-body">
            <form method="POST" noValidate autoComplete="off" onClick={avoidPost}>
              {signupFlag ? (
                <Typography>Sign up</Typography>
              ) : (
                <Typography>Login</Typography>
              )}
              {signupData.flag===true &&(<div className="alert alert-success" role="alert">
{signupData.data}
</div>)}
{signupData.flag===false && (<div className="alert alert-danger" role="alert">
  {signupData.data}
</div>)}
{loggedinData.flag===false && (<div className="alert alert-danger" role="alert">
  {loggedinData.data}
</div>)}

              <div className="row">
              {signupFlag && <div className="col-lg-8">
                <TextField
                  name="name"
                  id="name"
                  label="User Name"
                  variant="outlined"
                  type="text"
                  value={loginData.name}
                  onChange={handleChange}
                  required
                />
              </div>}
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
              <div>
              <button className="btn btn-dark mr-2" onClick={clearValue}>
              Reset
              </button>
              {signupFlag ? (
                <span>
                <button className="btn btn-primary mr-2" onClick={signupUser}>
                  Sign up
                </button>
                <button className="btn btn-dark mr-2" onClick={signupPage}>
                Click for Login
                </button>
                </span>
              ) : (
                <span>
                  <button className="btn btn-dark mr-2" onClick={signupPage}>
                    Click for Sign up
                  </button>

                  <button className="btn btn-primary" onClick={signupverify}>
                    Login
                  </button>
                </span>
              )}
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-4 col-xs-4 socialMedBtn">
        <Card>
          <CardContent>
            <div>
              <a
                className="btn btn-block btn-social btn-google"
                href="/auth/google"
                role="button"
              >
                <i className="fab fa-google"></i>
                Sign Up with Google
              </a>
            </div>
            <div className="mt-2">
              <a
                className="btn btn-block btn-social btn-facebook"
                href="/auth/facebook"
                role="button"
              >
                <i className="fab fa-facebook"></i>
                Sign Up with Facebook
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
