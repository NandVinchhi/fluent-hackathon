import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";
import ReactAudioPlayer from 'react-audio-player';

import { Button } from "reactstrap";



function ImageUpload(props) {
  const [file, setFile] = React.useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = React.useState(
    null
  );
  const fileInput = React.createRef();
  const handleImageChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = (e) => {
      
      window.sessionStorage.setItem("input_audio", e.target.result.substr(23));
      setFile(file);
      setImagePreviewUrl(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
      
      
    }
  };
  // const handleSubmit = e => {
  // e.preventDefault();
  // this.state.file is the file/image uploaded
  // in this function you can save the image (this.state.file) on form submit
  // you have to call it yourself
  // };
  const handleClick = () => {
    fileInput.current.click();
  };
  const handleRemove = () => {
    setFile(null);
    setImagePreviewUrl(null);
    fileInput.current.value = null;
    window.location.reload(false);
  };
  return (
    <div className="fileinput text-center">
      <input type="file" onChange={handleImageChange} ref={fileInput} />
      <ReactAudioPlayer src={imagePreviewUrl} autoPlay controls />
      <div
        className={
          "fileinput-new thumbnail img-raised" +
          (props.avatar ? " img-circle" : "")
        }
      >
      
        
      </div>
      <div>
        {file === null ? (
          <Button className="btn-round" color="default" onClick={handleClick}>
            {"Select file"}
          </Button>
        ) : (
          <span>
            <Button className="btn-round" color="default" onClick={handleClick}>
              Change
            </Button>
            {props.avatar ? <br /> : null}
            <Button color="danger" className="btn-round" onClick={handleRemove}>
              <i className="fa fa-times" /> Remove
            </Button>
          </span>
        )}
      </div>
    </div>
  );
}

ImageUpload.propTypes = {
  avatar: PropTypes.bool,
};

export default ImageUpload;
