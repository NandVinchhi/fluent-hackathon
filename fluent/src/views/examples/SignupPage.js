import React from "react";

import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
  Row,
} from "reactstrap";

// core components
import DropdownFixedNavbar from "components/Navbars/DropdownFixedNavbar.js";

function SignupPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirm, setConfirm] = React.useState("");
  const [name, setName] = React.useState("");
  const [error, setError] = React.useState("");
  const history = useHistory();

  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  if (window.sessionStorage.getItem("id") != null){
    history.push("/");
    return null;
  }
  return (
    <>
      <DropdownFixedNavbar />
      <div className="page-header header-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/login-background.jpeg") + ")",
          }}
        ></div>
        <div className="content">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="5">
                <Card className="card-login card-plain">
                  <Form action="" className="form" method="">
                    <CardHeader className="text-center">
                      {/* <div className="logo-container"> */}
                        {/* <img
                          alt="..."
                          src={require("assets/img/now-logo.png")}
                        ></img> */}
                        <h1>Sign Up</h1>
                      {/* </div> */}
                    </CardHeader>
                    <CardBody>
                    <InputGroup
                        className={
                          "no-border input-lg" +
                          (firstFocus ? " input-group-focus" : "")
                        }
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons text_caps-small"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Full Name"
                          type="text"
                          onFocus={() => setFirstFocus(true)}
                          onBlur={() => setFirstFocus(false)}
                          onChange={(event) => setName(event.target.value)}
                        ></Input>
                      </InputGroup>
                      <InputGroup
                        className={
                          "no-border input-lg" +
                          (firstFocus ? " input-group-focus" : "")
                        }
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons users_circle-08"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Email"
                          type="text"
                          onFocus={() => setFirstFocus(true)}
                          onBlur={() => setFirstFocus(false)}
                          onChange={(event) => setEmail(event.target.value)}
                        ></Input>
                      </InputGroup>
                      <InputGroup
                        className={
                          "no-border input-lg" +
                          (lastFocus ? " input-group-focus" : "")
                        }
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons ui-1_lock-circle-open"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Password"
                          type="password"
                          onFocus={() => setLastFocus(true)}
                          onBlur={() => setLastFocus(false)}
                          onChange={(event) => setPassword(event.target.value)}
                        ></Input>
                      </InputGroup>
                      <InputGroup
                        className={
                          "no-border input-lg" +
                          (lastFocus ? " input-group-focus" : "")
                        }
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons ui-1_lock-circle-open"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Confirm Password"
                          type="password"
                          onFocus={() => setLastFocus(true)}
                          onBlur={() => setLastFocus(false)}
                          onChange={(event) => setConfirm(event.target.value)}
                        ></Input>
                      </InputGroup>
                      <p style = {{color:"#FF0000"}}>{error}</p>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button
                        block
                        className="btn-round"
                        color="info"
                        href="#pablo"
                        onClick={(e) => {e.preventDefault(); 

                          if (email != "" && password != "" && confirm == password && name != ""){
                            
                            fetch('http://3.131.38.145:8080/register', {method: 'post',headers: {'Accept': 'application/json','Content-Type': 'application/json'},
                          body: JSON.stringify({email:email, password:password, name:name})}).then((Response) => Response.json()).then((Result) => {
                              if (Result.status == "success"){
                                history.push('/login-page');
                              }
                            else{
                              setError("This email already exists.");
                            }})
                            
                          }
                          else{
                            setError("Invalid Credentials.");
                          }
                        }}
                        size="lg"
                      >
                        Get Started
                      </Button>
                    </CardFooter>
                    <div className="pull-left">
                      <h6>
                        <a
                          className="link footer-link"
                          href="/login-page"
                          onClick={(e) => e.preventDefault()}
                        >
                          <Link to="/login-page" style={{color: "white"}}>
                            Sign in
                            </Link>
                        </a>
                      </h6>
                    </div>
                    <div className="pull-right">
                      <h6>
                        <a
                          className="link footer-link"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Need Help?
                        </a>
                      </h6>
                    </div>
                  </Form>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default SignupPage;
