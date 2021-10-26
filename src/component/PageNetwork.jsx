import React from "react";
import "./PageNetwork.css";
import { getRequest } from "../utils/request.jsx";

export default class PageNetwork extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			nodes: [
				"http://localhost:5000",
				"https://api.db.cy.lu",
				"https://api.distributed.lu",
			],
			nodeInformation: {},
		};
	}

	componentDidMount() {
		this.fetchNodes();
	}

	fetchNodes() {
		this.setState({ nodeInformation: {} }, () => {
			Promise.all(this.state.nodes.map(PageNetwork.fetchNode)).then((data) => {
				const nodeInformation = {};

				data.forEach((d, i) => {
					nodeInformation[this.state.nodes[i]] = d;
				});

				this.setState({ nodeInformation });
			});
		});
	}

	static fetchNode(baseUrl) {
		const url = baseUrl + "/network/get_node_information";

		return new Promise((resolve) => getRequest(url, (data) => {
			resolve(data);
		}, () => {
			resolve("ERROR");
		}, () => {
			resolve("ERROR");
		}));
	}

	changeState(field, value) {
		this.setState({ [field]: value });
	}

	render() {
		return (
			<div id="PageNetwork" className="page max-sized-page">
				<div className={"row row-spaced"}>
					<div className="col-md-12">
						{JSON.stringify(this.state.nodeInformation)}
					</div>
				</div>
			</div>
		);
	}
}
