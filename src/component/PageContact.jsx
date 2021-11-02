import React from "react";
import "./PageContact.css";
import { NotificationManager as nm } from "react-notifications";

export default class PageContact extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
		};
	}

	static copyToClipboard(text) {
		const dummy = document.createElement("input");
		document.body.appendChild(dummy);
		dummy.value = text;
		dummy.select();
		dummy.setSelectionRange(0, 99999);
		document.execCommand("copy");
		document.body.removeChild(dummy);
		nm.info("Copied to clipboard!");
	}

	changeState(field, value) {
		this.setState({ [field]: value });
	}

	// eslint-disable-next-line class-methods-use-this
	render() {
		return (
			<div id="PageContact" className="page max-sized-page">
				<div className={"row row-spaced"}>
					<div className="col-md-6">
						<a
							href="#"
							onClick={() => PageContact.copyToClipboard("team@cybersecurity-luxembourg.com")}
						>
							<div className="box">
								<div className="box-wrap">
									<div className="box-logo">
										<i className="fas fa-bullhorn"/>
									</div>
									<div className="box-text">
										Email address
									</div>
									<div className="box-subtext">
										team@cybersecurity-luxembourg.com
									</div>
								</div>
							</div>
						</a>
					</div>

					<div className="col-md-6">
						<a href="https://matrix.to/#/!huiXzSjOcmBoFrcVoq:matrix.org?via=matrix.org">
							<div className="box">
								<div className="box-wrap">
									<div className="box-logo">
										<i className="fas fa-comments"/>
									</div>
									<div className="box-text">
										Matrix server
									</div>
									<div className="box-subtext">
										https://matrix.to/#/!huiXzSjOcmBoF...
									</div>
								</div>
							</div>
						</a>
					</div>

					<div className="col-md-6">
						<a href="https://github.com/CybersecurityLuxembourg">
							<div className="box">
								<div className="box-wrap">
									<div className="box-logo">
										<i className="fab fa-github"/>
									</div>
									<div className="box-text">
										GitHub repositories
									</div>
									<div className="box-subtext">
										https://github.com/CybersecurityLuxembourg
									</div>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		);
	}
}
