import React from "react";
// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";
import ReactAudioPlayer from 'react-audio-player';
import AudioUpload from "components/AudioUpload.js";
import loading from "./loading.gif";
import PerfectScrollbar from "perfect-scrollbar";

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
  CardHeader,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
} from "reactstrap";

// core components
import DropdownFixedNavbar from "components/Navbars/DropdownFixedNavbar.js";
import UploadFixedNavbar from "components/Navbars/UploadFixedNavbar.js";
import AboutUsHeader from "components/Headers/AboutUsHeader.js";


function UploadSpeech() {
  const [specialitySelect, setSpecialitySelect] = React.useState(null);
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [iconTabs, setIconTabs] = React.useState("1");
  const [tabs, setTabs] = React.useState("1");
  const [output_audio, set_output_audio] = React.useState("");

  const [paceTitle, setPaceTitle] = React.useState("None");
  const [paceText, setPaceText] = React.useState("Upload an audio file to view results.");
  const [paceColor, setPaceColor] = React.useState("#626262");

  const [choiceTitle, setChoiceTitle] = React.useState("None");
  const [choiceText, setChoiceText] = React.useState("Upload an audio file to view results.");
  const [choiceColor, setChoiceColor] = React.useState("#626262");

  const [eloTitle, setEloTitle] = React.useState("None");
  const [eloText, setEloText] = React.useState("Upload an audio file to view results.");
  const [eloColor, setEloColor] = React.useState("#626262");

  const [isLoading, setIsLoading] = React.useState(false);




  const handleProcess = () => {
    console.log(window.sessionStorage.getItem("input_audio"))
    setIsLoading(true);
    fetch('http://3.131.38.145:8080/audio', {method: 'post',headers: {'Accept': 'application/json','Content-Type': 'application/json'},
                          body: JSON.stringify({userid:window.sessionStorage.getItem("id"), audio:window.sessionStorage.getItem("input_audio")})}).then((Response) => Response.json()).then((Result) => {
                              if (Result.status == "success"){
                                console.log(Result);

                                if(Result.pace < 50){
                                  setPaceTitle("Slow");
                                  setPaceText("Your speaking rate is " + Result.pace.toString() + " words per minute. Consider speaking a little faster.");
                                  setPaceColor("orange");
                                }

                                else if (Result.pace >= 50 && Result.pace < 85){
                                  setPaceTitle("Just Right");
                                  setPaceText("Your speaking rate is " + Result.pace.toString() + " words per minute. This indicates a good pace.");
                                  setPaceColor("green");
                                }

                                else {
                                  setPaceTitle("Fast");
                                  setPaceText("Your speaking rate is " + Result.pace.toString() + " words per minute. Consider speaking a little slower.");
                                  setPaceColor("red");
                                }

                                if(Result.eloquence < 5){
                                  setEloTitle("Great");
                                  setEloText("Your said " + Result.eloquence.toString() + " filler words. Aim to say lesser of them next time!");
                                  setEloColor("green");
                                }

                                else if (Result.eloquence >= 5 && Result.eloquence < 15){
                                  setEloTitle("Room for Improvement");
                                  setEloText("Your said " + Result.eloquence.toString() + " filler words. Aim to say lesser of them next time!");
                                  setEloColor("orange");
                                }

                                else {
                                  setEloTitle("Needs work");
                                  setEloText("Your said " + Result.eloquence.toString() + " filler words. Aim to say lesser of them next time!");
                                  setEloColor("red");
                                }

                                if(Result.word_choice > 80){
                                  setChoiceTitle("Excellent");
                                  setChoiceText("Your word choice score is " + Result.word_choice.toString() + "%, indicating that you used a rich and diverse set of words. Keep it up!");
                                  setChoiceColor("green");
                                }

                                else if (Result.word_choice <=80 && Result.word_choice > 50){
                                  setChoiceTitle("Room for Improvement");
                                  setChoiceText("Your word choice score is " + Result.word_choice.toString() + "%, indicating that your vocabulary is good, but could be far better with some practice!");
                                  setChoiceColor("orange");
                                }

                                else {
                                  setChoiceTitle("Needs work");
                                  setChoiceText("Your word choice score is " + Result.word_choice.toString() + "%, indicating that your vocabulary needs a significant amount of work.");
                                  setChoiceColor("red");
                                }

                                set_output_audio("data:audio/mpeg;base64," + Result.output_audio);
                                setIsLoading(false);
                              }
                            else{
                              console.log(Result);
                              setIsLoading(false);
                            }})
  };

  React.useEffect(() => {
    document.body.classList.add("about-us");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.sessionStorage.removeItem("input_audio");
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
                    <h2 className="title">Upload</h2>
                    <h4 className="description">
                      Get refined audio clips and speech analytics from raw files.
                    </h4>
                  </Col>
                </Row>
              </Container>  
              <div style={{marginTop: 40, marginBottom: 0}} className="separator-line bg-info"></div>
            </div>
            
          </div>

          <div>
            <div id="file-uploader">
              <Container>
                <div className="title">
                  {/* <h4>File Uploader</h4> */}
                </div>
                <Row>
                  <Col md="12" sm="12" style={{backgroundColor: 'transparent' ,textAlign: 'center'}}>
                    <h3>
                      Upload audio or video file
                    </h3>
                    <AudioUpload />
                  </Col>
                  {/* <Col md="2" sm="2" style={{backgroundColor: 'transparent', textAlign: 'center', alignSelf: 'center'}}>
                    <h1>OR</h1>
                  </Col>
                  <Col md="5" sm="2" style={{backgroundColor: 'transparent', textAlign: 'center'}}>
                    <h3>Record your audio live</h3>
                  </Col> */}
                </Row>
              </Container>
              <Container className="text-center">
                <Button onClick = {handleProcess} style={{fontSize: 20, marginTop: 50}} className="btn-round" color="info" type="button">
                  Process
                </Button>
              </Container>
            </div>
          </div>

          

          {/* <div className="separator-line bg-info"></div> */}
          <div className="projects-5">
            <Container>
              <hr></hr>
            </Container>
          </div>

          <div className="text-center" style={{marginTop: -80}}>
            <div>
              <Container>
                <Row>
                  <Col className="mr-auto ml-auto" md="8">
                    <h2 className="title">Results</h2>

                    {isLoading && (<img src = {loading} style = {{width:"20%"}}/>)}
                    {!isLoading && (<ReactAudioPlayer src={output_audio} autoPlay controls />)}
                  </Col>
                </Row>
              </Container>  
            </div>
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

                                    {paceColor == "red" && (<h2 style={{marginTop: 10, fontWeight: 'normal', color: "red"}}>
                                      {paceTitle}
                                    </h2>)}

                                    {paceColor == "orange" && (<h2 style={{marginTop: 10, fontWeight: 'normal', color: "orange"}}>
                                      {paceTitle}
                                    </h2>)}

                                    {paceColor == "green" && (<h2 style={{marginTop: 10, fontWeight: 'normal', color: "green"}}>
                                      {paceTitle}
                                    </h2>)}
                                    
                                    {paceColor == "#626262" && (<h2 style={{marginTop: 10, fontWeight: 'normal', color: "#626262"}}>
                                      {paceTitle}
                                    </h2>)}

                                    <p>
                                      {paceText}
                                    </p>
                                  </TabPane>
                                  <TabPane tabId="tabs2">
                                    {eloColor == "red" && (<h2 style={{marginTop: 10, fontWeight: 'normal', color: "red"}}>
                                      {eloTitle}
                                    </h2>)}

                                    {eloColor == "orange" && (<h2 style={{marginTop: 10, fontWeight: 'normal', color: "orange"}}>
                                      {eloTitle}
                                    </h2>)}

                                    {eloColor == "green" && (<h2 style={{marginTop: 10, fontWeight: 'normal', color: "green"}}>
                                      {eloTitle}
                                    </h2>)}
                                    
                                    {eloColor == "#626262" && (<h2 style={{marginTop: 10, fontWeight: 'normal', color: "#626262"}}>
                                      {eloTitle}
                                    </h2>)}
                                    <p>
                                      {eloText}
                                    </p>

                                  </TabPane>
                                  <TabPane tabId="tabs3">
                                    {choiceColor == "red" && (<h2 style={{marginTop: 10, fontWeight: 'normal', color: "red"}}>
                                      {choiceTitle}
                                    </h2>)}

                                    {choiceColor == "orange" && (<h2 style={{marginTop: 10, fontWeight: 'normal', color: "orange"}}>
                                      {choiceTitle}
                                    </h2>)}

                                    {choiceColor == "green" && (<h2 style={{marginTop: 10, fontWeight: 'normal', color: "green"}}>
                                      {choiceTitle}
                                    </h2>)}
                                    
                                    {choiceColor == "#626262" && (<h2 style={{marginTop: 10, fontWeight: 'normal', color: "#626262"}}>
                                      {choiceTitle}
                                    </h2>)}
                                    <p>
                                      {choiceText}
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

          <div className="projects-5">
            <Container>
              {/* <hr></hr> */}
            </Container>
          </div>
          
        </div>
        
      </div>
    </>
  );
}

export default UploadSpeech;