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

import {Recorder} from 'react-voice-recorder'
import 'react-voice-recorder/dist/index.css'

class RecordAudio extends React.Component {
  render() {
    this.state = {
      audioDetails: {
        url: null,
        blob: null,
        chunks: null,
        duration: {
          h: 0,
          m: 0,
          s: 0
        }
      }
    }

    // handleAudioStop(data){
    //   console.log(data)
    //   this.setState({ audioDetails: data });
    // }

    // handleAudioUpload(file) {
    //     console.log(file);
    // }

    // handleRest() {
    //     const reset = {
    //       url: null,
    //       blob: null,
    //       chunks: null,
    //       duration: {
    //         h: 0,
    //         m: 0,
    //         s: 0
    //       }
    //     };
    //     this.setState({ audioDetails: reset });
    //   }
  
    return (
      <Recorder
        record={true}
        title={"New recording"}
        audioURL={this.state.audioDetails.url}
        showUIAudio
        handleAudioStop={data => this.handleAudioStop(data)}
        handleAudioUpload={data => this.handleAudioUpload(data)}
        handleRest={() => this.handleRest()} 
    />
    );
  }
}

export default RecordAudio;
