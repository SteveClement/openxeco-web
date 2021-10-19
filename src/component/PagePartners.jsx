import React from "react";
import "./PagePartners.css";

export default class PagePartners extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
		};
	}

	changeState(field, value) {
		this.setState({ [field]: value });
	}

	render() {
		return (
			<div id="PagePartners" className="page max-sized-page">
				<div className={"row row-spaced"}>
					<div className="col-md-12">
						{this.state.ss}
					</div>
				</div>
			</div>
		);
	}
}
