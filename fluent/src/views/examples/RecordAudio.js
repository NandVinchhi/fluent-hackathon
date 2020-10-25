import React from "react";
// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";
import recording from "./recording.gif";

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

import MicRecorder from 'mic-recorder-to-mp3';
import 'react-voice-recorder/dist/index.css'
const Mp3Recorder = new MicRecorder({ bitRate: 128 });

class RecordAudio extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isRecording: false,
      blobURL: '',
      isBlocked: false,
    };
  }

  start = () => {
    if (this.state.isBlocked) {
      console.log('Permission Denied');
    } else {
      Mp3Recorder
        .start()
        .then(() => {
          this.setState({ isRecording: true });
        }).catch((e) => console.error(e));
    }
  };

  stop = () => {
    Mp3Recorder
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        var reader = new FileReader();
        var audioControl = document.getElementById('audio');
        reader.addEventListener("loadend", function() {

                  
                  var base64FileData = reader.result.toString();

                  console.log(base64FileData);
                  audioControl.src = base64FileData;
                  window.sessionStorage.setItem("input_audio1", base64FileData.substr(22));
                  

                });

                reader.readAsDataURL(blob);
                this.setState({isRecording:false});
      }).catch((e) => console.log(e));
  };

  componentDidMount() {
    navigator.getUserMedia({ audio: true },
      () => {
        console.log('Permission Granted');
        this.setState({ isBlocked: false });
      },
      () => {
        console.log('Permission Denied');
        this.setState({ isBlocked: true })
      },
    );
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Button disabled = {this.state.isRecording} onClick = {this.start} style={{fontSize: 20, marginTop: 50}} className="btn-round" color="info" type="button">
              Record
          </Button>
          <Button disabled = {!this.state.isRecording} onClick = {this.stop} style={{fontSize: 20, marginTop: 50}} className="btn-round" color="info" type="button">
              Stop
          </Button>
          
          <br/>
          <br/>
          {this.state.isRecording && (<img src = {recording} style = {{width:"7%"}}/>)}
          <br/>
          <audio src={this.state.blobURL} id="audio" controls="controls" />
          
        </header>
      </div>
    );
  }
}

export default RecordAudio;
