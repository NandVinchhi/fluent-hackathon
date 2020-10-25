import React from "react";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Table,
  Button,
  Label,
  FormGroup,
  Input,
  UncontrolledTooltip,
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";



import {
  intonationgraph
} from "variables/charts.js";

const chartColor = "#FFFFFF";

// General configuration for the charts with Line gradientStroke
const gradientChartOptionsConfiguration = {
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  tooltips: {
    bodySpacing: 4,
    mode: "nearest",
    intersect: 0,
    position: "nearest",
    xPadding: 10,
    yPadding: 10,
    caretPadding: 10,
  },
  responsive: 1,
  scales: {
    yAxes: [
      {
        display: 0,
        ticks: {
          display: false,
          maxTicksLimit: 7,
        },
        gridLines: {
          zeroLineColor: "transparent",
          drawTicks: false,
          display: false,
          drawBorder: false,
        },
      },
    ],
    xAxes: [
      {
        display: 0,
        ticks: {
          display: false,
        },
        gridLines: {
          zeroLineColor: "transparent",
          drawTicks: false,
          display: false,
          drawBorder: false,
        },
      },
    ],
  },
  layout: {
    padding: { left: 0, right: 0, top: 15, bottom: 15 },
  },
};

var gradientChartOptionsConfigurationWithNumbersAndGrid = {
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  tooltips: {
    bodySpacing: 4,
    mode: "nearest",
    intersect: 0,
    position: "nearest",
    xPadding: 10,
    yPadding: 10,
    caretPadding: 10,
  },
  responsive: 1,
  scales: {
    yAxes: [
      {
        gridLines: {
          zeroLineColor: "transparent",
          drawBorder: false,
        },
        ticks: {
          maxTicksLimit: 7,
        },
      },
    ],
    xAxes: [
      {
        display: 0,
        ticks: {
          display: false,
        },
        gridLines: {
          zeroLineColor: "transparent",
          drawTicks: false,
          display: false,
          drawBorder: false,
        },
      },
    ],
  },
  layout: {
    padding: { left: 0, right: 0, top: 15, bottom: 15 },
  },
};

function hexToRGB(hex, alpha) {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
}

const pacegraph = {
  data: (canvas) => {
    var ctx = canvas.getContext("2d");
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#f96332");
    gradientStroke.addColorStop(1, chartColor);
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#f96332", 0.4));
    return {
      labels: JSON.parse(window.sessionStorage.getItem("labelArray")),
      datasets: [
        {
          label: "Pace (WPM)",
          borderColor: "#f96332",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#f96332",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: JSON.parse(window.sessionStorage.getItem("paceValues")),
        },
      ],
    };
  },
  options: gradientChartOptionsConfigurationWithNumbersAndGrid,
};

const dashboardPanelChart = {
  data: (canvas) => {
    const ctx = canvas.getContext("2d");
    var chartColor = "#FFFFFF";
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#80b6f4");
    gradientStroke.addColorStop(1, chartColor);
    var gradientFill = ctx.createLinearGradient(0, 200, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, "rgba(255, 255, 255, 0.14)");

    return {
      labels: JSON.parse(window.sessionStorage.getItem("labelArray")),
      datasets: [
        {
          label: "Overall Score",
          borderColor: chartColor,
          pointBorderColor: chartColor,
          pointBackgroundColor: "#2c2c2c",
          pointHoverBackgroundColor: "#2c2c2c",
          pointHoverBorderColor: chartColor,
          pointBorderWidth: 1,
          pointHoverRadius: 7,
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: JSON.parse(window.sessionStorage.getItem("overallscoreValues")),
        },
      ],
    };
  },
  options: {
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 0,
        bottom: 0,
      },
    },
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "#fff",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
    },
    legend: {
      position: "bottom",
      fillStyle: "#FFF",
      display: false,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: "rgba(255,255,255,0.4)",
            fontStyle: "bold",
            beginAtZero: true,
            maxTicksLimit: 5,
            padding: 10,
          },
          gridLines: {
            drawTicks: true,
            drawBorder: false,
            display: true,
            color: "rgba(255,255,255,0.1)",
            zeroLineColor: "transparent",
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
            color: "rgba(255,255,255,0.1)",
          },
          ticks: {
            padding: 10,
            fontColor: "rgba(255,255,255,0.4)",
            fontStyle: "bold",
          },
        },
      ],
    },
  },
};

const eloquencegraph = {
  data: (canvas) => {
    var ctx = canvas.getContext("2d");
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#18ce0f");
    gradientStroke.addColorStop(1, chartColor);
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#18ce0f", 0.4));
    return {
      labels: JSON.parse(window.sessionStorage.getItem("labelArray")),
      datasets: [
        {
          label: "Filler Words",
          borderColor: "#18ce0f",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#18ce0f",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: JSON.parse(window.sessionStorage.getItem("eloquenceValues")),
        },
      ],
    };
  },
  options: gradientChartOptionsConfigurationWithNumbersAndGrid,
};

const wordchoicegraph = {
  data: (canvas) => {
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#2CA8FF", 0.6));
    return {
      labels: JSON.parse(window.sessionStorage.getItem("labelArray")),
      datasets: [
        {
          label: "% Unique Words",
          backgroundColor: gradientFill,
          borderColor: "#2CA8FF",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#2CA8FF",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          borderWidth: 1,
          data: JSON.parse(window.sessionStorage.getItem("wordchoiceValues")),
        },
      ],
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      bodySpacing: 4,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
      xPadding: 10,
      yPadding: 10,
      caretPadding: 10,
    },
    responsive: 1,
    scales: {
      yAxes: [
        {
          ticks: {
            maxTicksLimit: 7,
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawBorder: false,
          },
        },
      ],
      xAxes: [
        {
          display: 0,
          ticks: {
            display: false,
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false,
          },
        },
      ],
    },
    layout: {
      padding: { left: 0, right: 0, top: 15, bottom: 15 },
    },
  },
};

const pronunciationgraph = {
  data: (canvas) => {
    var ctx = canvas.getContext("2d");
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#ffe600");
    gradientStroke.addColorStop(1, chartColor);
    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#ffe600", 0.4));
    return {
      labels: JSON.parse(window.sessionStorage.getItem("labelArray")),
      datasets: [
        {
          label: "Pronunciation Accuracy %",
          borderColor: "#ffe600",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#ffe600",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: JSON.parse(window.sessionStorage.getItem("pronunciationValues")),
        },
      ],
    };
  },
  options: gradientChartOptionsConfigurationWithNumbersAndGrid,
};


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pacelinegraph: true,
      eloquencelinegraph: true,
      wordchoicelinegraph: true,
      pronunciationlinegraph: true,
    };
  }

  // setLineGraph() {
  //   this.setState({
  //     linegraph: true
  //   });
  // }

  // setBarGraph() {
  //   this.setState({
  //     linegraph: false
  //   });
  // }

  componentDidMount() {
    
    console.log("Hello");
    fetch('http://3.131.38.145:8080/stats', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },                    
      body: JSON.stringify({userid:window.sessionStorage.getItem("id")})}).then((Response) => Response.json()).then((Result) => {
        if (Result.status == "success"){
          console.log(Result)
          let labelArray = []
          for (let i = 0; i < Result['pace'].length; i++){
            labelArray.push("Recording " + (i+1));
          }

          window.sessionStorage.setItem("labelArray", JSON.stringify(labelArray));
          window.sessionStorage.setItem("paceValues", JSON.stringify(Result["pace"]));
          window.sessionStorage.setItem("eloquenceValues", JSON.stringify(Result["eloquence"]));
          window.sessionStorage.setItem("wordchoiceValues", JSON.stringify(Result["word_choice"]));
          window.sessionStorage.setItem("pronunciationValues", JSON.stringify(Result["pronunciation"]));
          window.sessionStorage.setItem("overallscoreValues", JSON.stringify(Result["overall_score"]));

          console.log(labelArray)
          console.log(Result['pace'])
        }
      })
  }

  render() {

    const setPaceLineGraph = () => {
      this.setState({
        pacelinegraph: true
      });
    }
  
    const setPaceBarGraph = () => {
      this.setState({
        pacelinegraph: false
      });
    }

    const setEloquenceLineGraph = () => {
      this.setState({
        eloquencelinegraph: true
      });
    }
  
    const setEloquenceBarGraph = () => {
      this.setState({
        eloquencelinegraph: false
      });
    }

    const setWordchoiceLineGraph = () => {
      this.setState({
        wordchoicelinegraph: true
      });
    }
  
    const setWordchoiceBarGraph = () => {
      this.setState({
        wordchoicelinegraph: false
      });
    }

    const setPronunciationLineGraph = () => {
      this.setState({
        pronunciationlinegraph: true
      });
    }
  
    const setPronunciationBarGraph = () => {
      this.setState({
        pronunciationlinegraph: false
      });
    }

    return (
      <>
        <PanelHeader
          size="lg"
          content={
            <Line
              data={dashboardPanelChart.data}
              options={dashboardPanelChart.options}
            />
          }
        />
        <div className="content">
          <Row>
            <Col xs={12} md={6} xl={6}>
              <Card className="card-chart">
                <CardHeader className="text-left">
                  <CardTitle tag="h4" style={{marginTop: 0, padding: 10, fontWeight: 'normal'}}>Pace</CardTitle>
                  <h5 className="card-category" style={{marginTop: 0, padding: 10}}>The speed at which you talk (words per minute).</h5>
                  
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-round btn-outline-default btn-icon"
                      color="default"
                    >
                      <i className="now-ui-icons loader_gear" />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem onClick={setPaceLineGraph}>Line Graph</DropdownItem>
                      <DropdownItem onClick={setPaceBarGraph}>Bar Graph</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    { this.state.pacelinegraph && <Line
                      data={pacegraph.data}
                      options={pacegraph.options}
                    />}

                    { !this.state.pacelinegraph && <Bar
                      data={pacegraph.data}
                      options={pacegraph.options}
                    />}
                    
                  </div>
                </CardBody>
                <CardFooter style={{padding: 15}}>
                  <div className="stats">
                    <i className="now-ui-icons arrows-1_refresh-69" /> Just
                    Updated
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col xs={12} md={6} xl={6}>
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h4" style={{marginTop: 0, padding: 10, fontWeight: 'normal'}}>Eloquence</CardTitle>
                  <h5 className="card-category" style={{marginTop: 0, padding: 10}}>The extent to which you minimize filler words (number of filler words).</h5>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-round btn-outline-default btn-icon"
                      color="default"
                    >
                      <i className="now-ui-icons loader_gear" />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem onClick={setEloquenceLineGraph}>Line Graph</DropdownItem>
                      <DropdownItem onClick={setEloquenceBarGraph}>Bar Graph</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    {this.state.eloquencelinegraph && <Line
                      data={eloquencegraph.data}
                      options={eloquencegraph.options}
                    />}
                    {!this.state.eloquencelinegraph && <Bar
                      data={eloquencegraph.data}
                      options={eloquencegraph.options}
                    />}
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="stats" style={{padding: 15}}>
                    <i className="now-ui-icons arrows-1_refresh-69" /> Just
                    Updated
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col xs={12} md={6} xl={6}>
              <Card className="card-chart">
                <CardHeader className="text-left">
                  <CardTitle tag="h4" style={{marginTop: 0, padding: 10, fontWeight: 'normal'}}>Word Choice</CardTitle>
                  <h5 className="card-category" style={{marginTop: 0, padding: 10}}>The extent to which you diversify your vocabulary (percent unique words).</h5>
                  
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-round btn-outline-default btn-icon"
                      color="default"
                    >
                      <i className="now-ui-icons loader_gear" />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem onClick={setWordchoiceLineGraph}>Line Graph</DropdownItem>
                      <DropdownItem onClick={setWordchoiceBarGraph}>Bar Graph</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    {this.state.wordchoicelinegraph && <Line
                      data={wordchoicegraph.data}
                      options={wordchoicegraph.options}
                    />}

                    {!this.state.wordchoicelinegraph && <Bar
                      data={wordchoicegraph.data}
                      options={wordchoicegraph.options}
                    />}
                  </div>
                </CardBody>
                <CardFooter style={{padding: 15}}>
                  <div className="stats">
                    <i className="now-ui-icons arrows-1_refresh-69" /> Just
                    Updated
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col xs={12} md={6} xl={6}>
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h4" style={{marginTop: 0, padding: 10, fontWeight: 'normal'}}>Pronunciation</CardTitle>
                  <h5 className="card-category" style={{marginTop: 0, padding: 10}}>The extent to which you pronounce words clearly (percent confidence).</h5>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-round btn-outline-default btn-icon"
                      color="default"
                    >
                      <i className="now-ui-icons loader_gear" />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem onClick={setPronunciationLineGraph}>Line Graph</DropdownItem>
                      <DropdownItem onClick={setPronunciationBarGraph}>Bar Graph</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    {this.state.pronunciationlinegraph && <Line
                      data={pronunciationgraph.data}
                      options={pronunciationgraph.options}
                    />}

                    {!this.state.pronunciationlinegraph && <Bar
                      data={pronunciationgraph.data}
                      options={pronunciationgraph.options}
                    />}

                  </div>
                </CardBody>
                <CardFooter>
                  <div className="stats" style={{padding: 15}}>
                    <i className="now-ui-icons arrows-1_refresh-69" /> Just
                    Updated
                  </div>
                </CardFooter>
              </Card>
            </Col>

            {/* <Col xs={12} md={4}>
              <Card className="card-chart">
                <CardHeader>
                <CardTitle tag="h4" style={{marginTop: 0, padding: 10, fontWeight: 'normal'}}>Intonation</CardTitle>
                  <h5 className="card-category" style={{marginTop: 0, padding: 10}}>The extent to which you vary your voice and pitch (qualitative).</h5>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-round btn-outline-default btn-icon"
                      color="default"
                    >
                      <i className="now-ui-icons loader_gear" />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Line Graph</DropdownItem>
                      <DropdownItem>Bar Graph</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={intonationgraph.data}
                      options={intonationgraph.options}
                    />
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="stats" style={{padding: 15}}>
                    <i className="now-ui-icons arrows-1_refresh-69" /> Just
                    Updated
                  </div>
                </CardFooter>
              </Card>
            </Col> */}
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;
