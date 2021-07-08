import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
const skillList = [
  "Mobile Development",
  "Xamarin",
  "CSS3",
  "Adobe Photoshop",
  "HTML5",
  "CSS3",
  "JQUERY",
  "UI Design",
  "Company Branding",
  "Responsive Web Design"
];
const intList = [
  "Faith",
  "Biblical Studies",
  "Playing Guitar",
  "Song Writing",
  "Health & Nutrition",
  "Reading"
];
export class ResumeData extends React.PureComponent {
  render() {
    return (
      <div id="resumeGen">
        <Grid container spacing={0}>
          <Grid item xs={12} sm={12} md={12} lg={3}>
            <div className="left">
              <h2>
                {this.props.details.fname} {this.props.details.lname}{" "}
              </h2>
              <p>{this.props.details.address}</p>
              <p>{this.props.details.email}</p>
              <p>{this.props.details.phoneno}</p>
            </div>
          </Grid>
          <div className="vl"></div>
          <Grid item xs={12} sm={12} md={12} lg={7}>
            <div className="right">
              <div className="inner">
                <section>
                  <h1>Employment</h1>
                  {this.props.details.experience.map((expData, index) => {
                    return (
                      <div key={expData.id}>
                        <p>
                          {expData.companyName}| {expData.designation}
                          <br />
                          <br />
                          <em>
                            {expData.durationFrom} - {expData.durationTo}
                          </em>
                        </p>
                        <p>{expData.achievements}</p>
                        <hr />
                      </div>
                    );
                  })}
                </section>
                <section>
                  <h1>Technical Skills</h1>
                  {skillList.map((skill, index1) => (
                    <span className="skillSet" key={index1}>
                      <Button size="small" variant="contained">
                        {skill}
                      </Button>
                    </span>
                  ))}
                </section>
                <section>
                  <h1>References</h1>
                  <p>
                    William Grand | <em>Grand Interactive, llc. | CEO</em>
                  </p>
                  <p>(617) 448-0910 | wgrand@grandinteractive.com</p>
                  <p>
                    Eric Chauvin | <em>PadMatcher Inc. | CEO</em>
                  </p>
                  <p>(617) 448-0910 | eric@padmatcher.com</p>
                  <p>
                    Chris Heller <em>Penrose Realty LLC. | Broker</em>
                  </p>
                  <p>(617) 794-4554 | chris@penroserealty.com</p>
                </section>
                <section>
                  <h1>Personal Interests</h1>
                  {intList.map((interest, index2) => (
                    <span className="skillSet" key={index2}>
                      <Button size="small" variant="contained">
                        {interest}
                      </Button>
                    </span>
                  ))}
                </section>
                <section>
                  <div className="handmade">
                    <p>dv</p>
                  </div>
                </section>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}
// <div>
//   {/* <h1> </h1>
//   <h1></h1>
//   <h1>{this.props.details.age} </h1>
//   <h1>{this.props.details.gender} </h1>
//   <h1>{this.props.details.email} </h1> */}
// </div>
