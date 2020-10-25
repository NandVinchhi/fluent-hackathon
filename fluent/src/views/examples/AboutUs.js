import React from "react";
// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";
import { useHistory } from 'react-router-dom';

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
} from "reactstrap";

// core components
import DropdownFixedNavbar from "components/Navbars/DropdownFixedNavbar.js";
import AboutUsHeader from "components/Headers/AboutUsHeader.js";

function AboutUs() {
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
  const history = useHistory();
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
      <DropdownFixedNavbar />
      <div className="wrapper" style={{height: '100%'}}>
        <AboutUsHeader />
        <div className="section">
          <div className=" text-center">
            <div className="features-3">
              <Container>
                <Row>
                  <Col className="mr-auto ml-auto" md="8" style={{marginTop: -50}}>
                    <h2 className="title">Quick. Easy. Efficient</h2>
                    <h4 className="description">
                      Fluent provides the optimal platform for creating
                      refined audio and video speech recordings using AI,
                      as well as speech quality Analytics for improving
                      public speaking skills.
                    </h4>
                  </Col>
                </Row>
                <div className="section section-pills text-center">
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
                            <NavItem >
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
                                // style={justIconVerticalTabs === "2" ? {backgroundColor: '#2ca8ff'} : {backgroundColor: '444444'}}
                              >
                                <i className="now-ui-icons business_bulb-63"></i>
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
                                <i className="now-ui-icons business_chart-bar-32"></i>
                              </NavLink>
                            </NavItem>
                          </Nav>
                          <TabContent
                            className="tab-space"
                            activeTab={"justIconVerticalTabs" + justIconVerticalTabs}
                          >
                            <TabPane tabId="justIconVerticalTabs1">
                              <br></br>
                              <h4 style={{fontWeight: 'bold'}}>Audio Processing</h4>
                              <h5>Remove filter words from raw audio to get polished outputs instantly.</h5>
                            </TabPane>
                            <TabPane tabId="justIconVerticalTabs2">
                              <br></br>
                              <h4 style={{fontWeight: 'bold'}}>Realtime Analytics</h4>
                              <h5>Provide realtime insights when speaking in presentations and conferences.</h5>
                            </TabPane>
                            <TabPane tabId="justIconVerticalTabs3">
                              <br></br>
                              <h4 style={{fontWeight: 'bold'}}>Progress Statistics</h4>
                              <h5>Interactive graphs and charts that depict progress of speech quality over time.</h5>
                            </TabPane>
                          </TabContent>
                        </Col>
                      </Row>
                    </div>
                  </Container>
                </div>
              </Container>
              <div className="separator-line bg-info"></div>
            </div>
            
          </div>
            
          </div>

          <div className="section-about-us" style={{marginTop: -100}}>
          <Container >
            <Row >
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Using AI to refine speech and build confidence.</h2>
              </Col>
            </Row>
            <div className="separator separator-info"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/landing-page-speech-2.jpeg") + ")",
                    }}
                  >
                    <p className="blockquote blockquote-info">
                      "Speech is power. Speech is to persuade, to convert, to compel. It is to bring another out of his bad sense into your good sense." <br></br>
                      <br></br>
                      <small>Ralph Waldo Emerson</small>
                    </p>
                  </div>
                  <div
                    className="image-container image-left-bottom"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/landing-page-speech-3.jpeg") + ")",
                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/landing-page-speech-1.jpeg") + ")",
                    }}
                  ></div>

                  <h2 style={{fontWeight: "bold"}}>Why Fluent?</h2>

                  <hr></hr>


                  <h4 className="info-title">
                      Get instant results
                  </h4>
                  <p className="description">
                    Fluent provides users with fast and reliable speech analysis, insights, and results, all at the click of a button.

                  </p>


                  <h4 className="info-title">Improve your speech</h4>
                  <p className="description">
                    Fluent gives users a platform to learn and improve their public
                    speaking by giving them speech insights based on their realtime everyday conferenced and presentations.
                    All you have to do is hit the start button!
                  </p>

                  <h4 className="info-title">Fluent provides Versatility</h4>
                  <p className="description">
                    Fluent crops and edits inputs of various video and audio formats, helping you strengthen your speaking skills,
                    whether it's for an interview or a presentation, along with providing you optional insights. All you need to do is hit the upload button! 
                  </p>


                  
                </Col>
              </Row>
            </div>
          </Container>
        </div>
          
        </div>
    </>
  );
}

export default AboutUs;
