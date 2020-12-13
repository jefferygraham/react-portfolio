import React from "react";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML5", percentage: "90%", value: "90" },
        { id: "CSS3_skill", content: "CSS3", percentage: "90%", value: "90" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          percentage: "90%",
          value: "90"
        },
        {
          id: "React_skill",
          content: "React",
          percentage: "80%",
          value: "80"
        },
        {
          id: "ReactNative_skill",
          content: "React-Native",
          percentage: "80%",
          value: "80"
        },
        {
          id: "NodeJS_skill",
          content: "Node.js",
          percentage: "80%",
          value: "80"
        },
        {
          id: "Java_skill",
          content: "Java",
          percentage: "75%",
          value: "75"
        },
        {
          id: "Wordpress_skill",
          content: "Wordpress",
          percentage: "80%",
          value: "80"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "Goal-oriented web developer with strong commitment to collaboration and solutions-oriented problem solving. Experienced in HTML, CSS, Bootstrap, JavaScript, React, React-Native, Node.js as well as WordPress. Uses various web design packages to develop custom-crafted, user-focused websites and applications. Committed to high standards of user experience, usability, speed and security. "
        },
        {
          id: "second-p-about",
          content:
            "Professional strengths include creative problem-solving, written, and verbal communication, and time management with a serviceoriented mindset from previous experience in the education industry and military."
        },
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.percentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.percentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
