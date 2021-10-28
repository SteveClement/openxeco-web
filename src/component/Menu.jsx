import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

export default class Menu extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
		};
	}

	render() {
		return (
			<div id="Menu">
				<Link to="/">
					<div
						className={"Menu-element "
							+ (this.props.selectedMenu === null ? "Menu-element-selected" : "")}
						onClick={() => this.props.changeMenu(null)}>
						Presentation
					</div>
				</Link>
				<Link to="/network">
					<div
						className={"Menu-element "
							+ (this.props.selectedMenu === "network" ? "Menu-element-selected" : "")}
						onClick={() => this.props.changeMenu("network")}>
						Network
					</div>
				</Link>
				<Link to="/contact">
					<div
						className={"Menu-element "
							+ (this.props.selectedMenu === "contact" ? "Menu-element-selected" : "")}
						onClick={() => this.props.changeMenu("contact")}>
						Contact & links
					</div>
				</Link>
			</div>
		);
	}
}
