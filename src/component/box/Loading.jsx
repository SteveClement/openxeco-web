import React from "react";
import "./Loading.css";

export default class Loading extends React.Component {
	render() {
		return (
			<div className="Loading" style={{ height: this.props.height ? this.props.height : "100%" }}>
				<div className="Loading-logo">
					<img
						src={"/ll"}
						alt="Loading logo"
					/>
				</div>
			</div>
		);
	}
}
