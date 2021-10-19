import React from "react";
import "./PageHome.css";

export default class PageHome extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
		};
	}

	render() {
		return (
			<div className={"PageHome"}>
				<div className={"row"}>
					<div className="col-md-12">
						<h1>What is openXeco?</h1>
					</div>

					<div className="col-md-12">
						fezgezf
					</div>

					<div className="col-md-12">
						<h1>What is openXeco?</h1>
					</div>

					<div className="col-md-12">
						{this.state.ss}
					</div>
				</div>
			</div>
		);
	}
}
