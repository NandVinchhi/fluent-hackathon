import React from "react";
import { useCallback } from "react"
import PoseNet from "react-posenet"

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

function getKeypointsObject(pose) {
  if (pose == undefined){
    return {};
  }
  return pose.keypoints.reduce((acc, { part, position }) => {
    acc[part] = position
    return acc
  }, {})
}


function Camera() {
  
  const [posesString, setPosesString] = React.useState([]);
  

  const [a, seta] = React.useState(1);
  const [b, setb] = React.useState(1);

  const [recording, setRecording] = React.useState(false);
  const [buttonText, setButtonText] = React.useState("Start Video");

  const [status, setStatus] = React.useState("None");

  // React.useEffect(() => {
    
  // }, []);

  const handleProcess = () => {
    if (recording == false){
      setButtonText("Stop Video");
    }
    else{
      setButtonText("Start Video");
    }
    setRecording(!recording);

  }

  return (
    <div >
      

      {recording && (

      <div>
      <PoseNet style = {{marginLeft:"33%"}} inferenceConfig={{ decodingMethod: "single-person" }} onEstimate={poses => {

        console.log(poses)
        if (poses == undefined) {
          console.log("eee");

        }
        else{
          var x = getKeypointsObject(poses[0]);

          if (x.leftElbow != undefined && x.leftWrist != undefined && x.rightElbow != undefined && x.rightWrist != undefined){
            if (x.leftElbow.y < x.leftWrist.y && x.rightElbow.y < x.rightWrist.y){
              setStatus("Try to use more gestures while speaking!");
            }
            else{
              setStatus("You're doing good, keep it up!");
              seta(a + 1);
            }
            setb(b + 1);
          }
        }
        }
    }/> 
    <h4 style = {{marginLeft:"40%"}}>{status}</h4>

    </div>)}

      {!recording && (<h4 style = {{marginLeft:"40%"}}>Your body langauge score is {Math.round((a/b) * 100, 1).toString()}%</h4>)}



      <Button onClick = {handleProcess} style={{marginLeft:"45.7%", fontSize: 20, marginTop: 50}} className="btn-round" color="info" type="button">
                  {buttonText}
      </Button>

    

        
    </div>
  );
}

export default Camera;
