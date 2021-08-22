import React from "react";
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
export class ResumeData extends React.PureComponent {
  render() {
    return (
      <div id="resumePrintPage" className="row nopadding">
        <div className="form-inline nopadding mt-3">
          <div className="leftSide ml-5 col-lg-3 col-md-3 col-sm-4 col-xs-5 ">
            <div className="mt-5 profileIcon">
              <i className="fas fa-user-circle"></i>
            </div>
            <div className="leftData">
              <h4 className="leftHeader text-uppercase">Contact</h4>
              <hr className="leftHeaderLine" />
              <div className="leftHeader mt-3">
                <p>{this.props.details.address}</p>
                <p>{this.props.details.email}</p>
                <p>{this.props.details.phoneno}</p>
                <a href={this.props.details.linkdn}>
                  {this.props.details.linkdn}
                </a>
                <br />
              </div>
            </div>
            <div className="leftData mt-5">
              <h4 className="leftHeader text-uppercase">Education</h4>
              <hr className="leftHeaderLine" />
              <div className="leftHeader mt-3">
                <p className="text-uppercase">10th</p>
                <p>{this.props.details.address}</p>
                <p>{this.props.details.email}</p>
                <p>{this.props.details.phoneno}</p>
              </div>
            </div>
            <div className="leftData mt-5 mb-5">
              <h4 className="leftHeader text-uppercase">Technical Skills</h4>
              <hr className="leftHeaderLine" />
              <div className="leftHeader mt-3">
                {skillList.map((skill, index1) => (
                  <span className="skillSet" key={index1}>
                    <button className="btn btn-outline-secondary ml-1 mt-1">
                      {skill}
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="rightSide col-lg-8 col-md-8 col-sm-7 col-xs-6">
            <div className="rightHeader">
              <h1 className="text-uppercase font-weight-bold">
                {this.props.details.fname} {this.props.details.lname}{" "}
              </h1>
              <p>{this.props.details.curPosition}</p>
              <span className="rightSideData">
                {this.props.details.profileDesc}
              </span>
            </div>
            <br />
            <div className="mt-5">
              <h4 className="rightHeader text-uppercase">Work Experience</h4>
              <hr className="rightHeaderLine" />

              {this.props.details.experience.map((expData, index) => {
                return (
                  <div key={expData.id}>
                    <ul className="events">
                      <li>
                        <time></time>
                        <span className="rightHeader m-0">
                          <p className="text-uppercase">
                            {expData.companyName} /{expData.designation}
                          </p>
                          <p className="mt--1">
                            {expData.durationFrom} - {expData.durationTo}
                          </p>
                          <p>{expData.achievements}</p>
                          <ul>
                            <li className="projListitem">point 1</li>
                            <li className="projListitem">point 1</li>
                            <li className="projListitem">point 1</li>
                          </ul>
                        </span>
                      </li>
                    </ul>
                  </div>
                );
              })}
            </div>
            <div className="mt-5">
              <h4 className="rightHeader text-uppercase">
                Tool and Technologies
              </h4>
              <hr className="rightHeaderLine" />
              <div className="rightlistData">
                {skillList.map((skill, index1) => (
                  <span className="skillSet" key={index1}>
                    <button className="btn btn-outline-secondary ml-1 mt-1">
                      {skill}
                    </button>
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-5">
              <h4 className="rightHeader text-uppercase">
                Certificates and Achievements
              </h4>
              <hr className="rightHeaderLine" />
              <div className="rightlistData">
                <ul>
                  <li>
                    William Grand | <em>Grand Interactive, llc. | CEO</em>
                  </li>
                  <li>(617) 448-0910 | wgrand@grandinteractive.com</li>
                  <li>
                    Eric Chauvin | <em>PadMatcher Inc. | CEO</em>
                  </li>
                  <li>(617) 448-0910 | eric@padmatcher.com</li>
                  <li>
                    Chris Heller <em>Penrose Realty LLC. | Broker</em>
                  </li>
                  <li>(617) 794-4554 | chris@penroserealty.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
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
