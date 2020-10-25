import React from "react";
// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  TabContent,
  TabPane,
  NavItem,
  NavLink,
  Nav,
  CardHeader,
} from "reactstrap";

// core components
import DropdownFixedNavbar from "components/Navbars/DropdownFixedNavbar.js";
import UploadFixedNavbar from "components/Navbars/UploadFixedNavbar.js";
import AboutUsHeader from "components/Headers/AboutUsHeader.js";

function AnalyzeSpeech() {
  const [horizontalTabs, setHorizontalTabs] = React.useState("1");
  const [verticalTabs, setVerticalTabs] = React.useState("1");
  const [iconHorizontalTabs, setIconHorizontalTabs] = React.useState("1");
  const [iconVerticalTabs, setIconVerticalTabs] = React.useState("1");
  const [justIconHorizontalTabs, setJustIconHorizontalTabs] = React.useState(
    "1"
  );
  const [justIconVerticalTabs, setJustIconVerticalTabs] = React.useState("1");

  const [tabs, setTabs] = React.useState("1");

  const [specialitySelect, setSpecialitySelect] = React.useState(null);
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("about-us");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("about-us");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <UploadFixedNavbar />
      <div className="wrapper" style={{backgroundColor: "transparent", height: '100%'}}>
        {/* <AboutUsHeader /> */}
        <div>
          <div className="about-description text-center">
            <div className="features-3">
              <Container>
                <Row>
                  <Col className="mr-auto ml-auto" md="8">
                    <h2 className="title">Realtime Analysis</h2>
                    <h4 className="description">
                      Get realtime insights on speech as well as body language and posture while speaking live.
                    </h4>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
          {/* <div className="separator-line bg-info"></div> */}

          <div className="section section-pills text-center" style={{marginTop: -100}}>
            <Container>
              <div id="navigation-pills">

                <Row>
                  <Col md="12">
                    <Nav
                      className="nav-pills-primary nav-pills-just-icons"
                      pills
                      role="tablist"
                      style={{justifyContent: 'center'}}
                    >
                      <NavItem>
                        <NavLink
                          className={justIconVerticalTabs === "1" ? "active" : ""}
                          href="#pablo"
                          onClick={(e) => {
                            e.preventDefault();
                            setJustIconVerticalTabs("1");
                          }}
                        
                        >
                          <i className="now-ui-icons media-2_sound-wave"></i>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={justIconVerticalTabs === "2" ? "active" : ""}
                          href="#pablo"
                          onClick={(e) => {
                            e.preventDefault();
                            setJustIconVerticalTabs("2");
                          }}
                        >
                          <i className="now-ui-icons media-1_camera-compact"></i>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={justIconVerticalTabs === "3" ? "active" : ""}
                          href="#pablo"
                          onClick={(e) => {
                            e.preventDefault();
                            setJustIconVerticalTabs("3");
                          }}
                        >
                          <i className="now-ui-icons tech_laptop"></i>
                        </NavLink>
                      </NavItem>
                    </Nav>
                    <TabContent
                      className="tab-space"
                      activeTab={"justIconVerticalTabs" + justIconVerticalTabs}
                    >
                      <TabPane tabId="justIconVerticalTabs1">
                        <br></br>
                        <h2>Audio Only</h2>
                        Collaboratively administrate empowered markets via
                        plug-and-play networks. Dynamically procrastinate B2C users
                        after installed base benefits. <br></br>
                        <br></br>
                        Dramatically visualize customer directed convergence without
                        revolutionary ROI.
                      </TabPane>
                      <TabPane tabId="justIconVerticalTabs2">
                        <br></br>
                        <h2>Video Only</h2>
                        Efficiently unleash cross-media information without
                        cross-media value. Quickly maximize timely deliverables for
                        real-time schemas. <br></br>
                        <br></br>
                        Dramatically maintain clicks-and-mortar solutions without
                        functional solutions.
                      </TabPane>
                      <TabPane tabId="justIconVerticalTabs3">
                        <br></br>
                        <h2>Audio and Video</h2>
                        Completely synergize resource taxing relationships via
                        premier niche markets. Professionally cultivate one-to-one
                        customer service with robust ideas. <br></br>
                        <br></br>
                        Dynamically innovate resource-leveling customer service for
                        state of the art customer service.
                      </TabPane>
                    </TabContent>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>


          <div className="projects-5">
            <Container>
              <hr></hr>
            </Container>
          </div>

          <div className="text-center" style={{marginTop: -80}}>
            <div>
              <Container>
                <Row>
                  <Col className="mr-auto ml-auto" md="12">
                    <h2 className="title">Analysis</h2>
                    <div className="section">
                      <Container>
                        <Row>
                          <Col className="ml-auto mr-auto" md="10" xl="8">
                            <Card>
                              <CardHeader>
                                <Nav
                                  className="nav-tabs-neutral justify-content-center"
                                  data-background-color="blue"
                                  role="tablist"
                                  tabs
                                >
                                  <NavItem>
                                    <NavLink
                                      className={tabs === "1" ? "active" : ""}
                                      href="#pablo"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        setTabs("1");
                                      }}
                                    >
                                      Pace
                                    </NavLink>
                                  </NavItem>
                                  <NavItem>
                                    <NavLink
                                      className={tabs === "2" ? "active" : ""}
                                      href="#pablo"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        setTabs("2");
                                      }}
                                    >
                                      Eloquence
                                    </NavLink>
                                  </NavItem>
                                  <NavItem>
                                    <NavLink
                                      className={tabs === "3" ? "active" : ""}
                                      href="#pablo"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        setTabs("3");
                                      }}
                                    >
                                      Word Choice
                                    </NavLink>
                                  </NavItem>
                                  {/* <NavItem>
                                    <NavLink
                                      className={tabs === "4" ? "active" : ""}
                                      href="#pablo"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        setTabs("4");
                                      }}
                                    >
                                      Intonation
                                    </NavLink>
                                  </NavItem> */}
                                </Nav>
                              </CardHeader>
                              <CardBody>
                                <TabContent className="text-center" activeTab={"tabs" + tabs}>
                                  <TabPane tabId="tabs1">
                                    <h2 style={{marginTop: 10, fontWeight: 'normal', color: 'red'}}>
                                      Slow
                                    </h2>
                                    <p>
                                      Your speaking rate is 25 words per minute. Consider speaking a bit faster!
                                    </p>
                                  </TabPane>
                                  <TabPane tabId="tabs2">
                                    <h2 style={{marginTop: 10, fontWeight: 'normal', color: 'orange'}}>
                                      Room for improvement
                                    </h2>
                                    <p>
                                      You said 23 filler words. Aim to say less filler words next time!
                                    </p>
                                  </TabPane>
                                  <TabPane tabId="tabs3">
                                    <h2 style={{marginTop: 10, fontWeight: 'normal', color: 'green'}}>
                                      Excellent
                                    </h2>
                                    <p>
                                      Your word choice score is 92%, indicating that you used a rich and diverse set of words. Keep it up!
                                    </p>
                                  </TabPane>
                                  <TabPane tabId="tabs4">
                                    <h2 style={{marginTop: 10, fontWeight: 'normal', color: 'red'}}>
                                      Monotone
                                    </h2>
                                    <p>
                                      Try to diversify your pitch variation next time! 
                                    </p>
                                  </TabPane>
                                </TabContent>
                              </CardBody>
                            </Card>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  </Col>
                </Row>
              </Container>  
            </div>
          </div>
          
        </div>
        
      </div>
    </>
  );
}

export default AnalyzeSpeech;
