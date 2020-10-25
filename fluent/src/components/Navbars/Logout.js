import React, {Component} from "react";
import {Link} from 'react-router-dom';


class Logout extends Component {
	 constructor(props) {
      super(props);
      }
	render(){
		window.sessionStorage.removeItem("id");
		this.props.history.push("/login-page");
		return null;
	}
}

export default Logout;
