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
          <div class="vl"></div>
          <Grid item xs={12} sm={12} md={12} lg={7}>
            <div className="right">
              <div className="inner">
                <section>
                  <h1>Employment</h1>
                  <p>
                    Winter 2015 - Present{" "}
                    <em>Grand Interactive, llc. | Mobile App Developer</em>
                  </p>
                  <p>
                    Raised $78,000 in early stage funding, created initial
                    design concepts, and oversaw initial development. Currently
                    oversee and maintain all front end code and server
                    functionality.
                  </p>
                  <p>
                    Spring 2012 - Winter 2015 |{" "}
                    <em>PadMatcher Inc. | CTO, Co-Founder</em>
                  </p>
                  <p>
                    Raised $78,000 in early stage funding, created initial
                    design concepts, and oversaw initial development. Oversaw
                    and maintained all front end code and server functionality.
                  </p>
                  <p>
                    Fall 2011 - Fall 2013 |{" "}
                    <em>Penrose Realty llc. | Desinger & Assistant</em>
                  </p>
                  <p>
                    Responsible for all technical areas. Maintain servers,
                    computers, and provide in office technical support.
                    Rebranded company from ground up including a fully
                    responsive website.{" "}
                  </p>
                </section>
                <section>
                  <h1>Technical Skills</h1>
                  {skillList.map((skill) => (
                    <span class="skillSet">
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
                  {intList.map((interest) => (
                    <span class="skillSet">
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
