import React from "react";

// reactstrap components
import { Row, Col, Button} from "reactstrap";

// import Carousel from "../../views/index-sections/Carousel";

// core components

function AboutUsHeader() {
  let pageHeader = React.createRef();
  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            // backgroundColor: '#1a1a1a',
            backgroundImage: "url(" + require("assets/img/landing-page-background-image.jpeg") + ")",
        
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <h1 className="title">Fluent</h1>
              <h4>
                Connecting people through refined speech.
              </h4>
              <Button
                  className="btn-default"
                  color="neutral"
                  style = {{fontSize: "10pt"}}
                  href="/upload"
                >
                  TRY IT OUT
                </Button>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default AboutUsHeader;
