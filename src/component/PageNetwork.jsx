import React from "react";
import "./PageNetwork.css";
import LoadingBar from "react-top-loading-bar";
import createEngine, { DefaultNodeModel, DiagramModel } from "@projectstorm/react-diagrams";
import { CanvasWidget } from "@projectstorm/react-canvas-core";
import { getRequest } from "../utils/request.jsx";

export default class PageNetwork extends React.Component {
	constructor(props) {
		super(props);

		this.fetchNodes = this.fetchNodes.bind(this);
		this.fetchNode = this.fetchNode.bind(this);
		this.buildDiagram = this.buildDiagram.bind(this);

		this.state = {
			nodes: [
				"http://localhost:5001",
				"http://localhost:5002",
				"http://localhost:5000",
				"https://api.db.cy.lu",
				"https://api.distributed.lu",
			],
			nodeInformation: {},
			loadingProgress: 0,
			engine: null,
			value: 0,
		};
	}

	componentDidMount() {
		this.fetchNodes();
		this.setState({ engine: createEngine() });
	}

	componentDidUpdate(_, prevState) {
		if (prevState.nodeInformation !== this.state.nodeInformation) {
			this.buildDiagram();
		}
	}

	fetchNodes() {
		this.setState({ nodeInformation: {} }, () => {
			Promise.all(this.state.nodes.map(this.fetchNode)).then((data) => {
				const nodeInformation = {};

				data.forEach((d, i) => {
					nodeInformation[this.state.nodes[i]] = d;
				});

				this.setState({ nodeInformation });
			});
		});
	}

	fetchNode(baseUrl) {
		const url = baseUrl + "/network/get_node_information";

		return new Promise((resolve) => getRequest(url, (data) => {
			resolve(data);
			this.setState({ loadingProgress: this.state.loadingProgress + 1 });
		}, () => {
			resolve(null);
			this.setState({ loadingProgress: this.state.loadingProgress + 1 });
		}, () => {
			resolve(null);
			this.setState({ loadingProgress: this.state.loadingProgress + 1 });
		}));
	}

	buildDiagram() {
		const canvas = document.getElementById("PageNetwork");

		if (!canvas) {
			return null;
		}

		const centerX = canvas.offsetWidth / 2;
		const centerY = canvas.offsetHeight / 2;

		const nodes = [];

		const node1 = new DefaultNodeModel({
			name: "openXeco",
			color: "#03e3e3",
		});
		node1.setPosition(centerX, centerY);
		node1.setLocked(true);
		const port1 = node1.addOutPort("Out");
		nodes.push(node1);

		Object.keys(this.state.nodeInformation).forEach((n, i) => {
			const angle = Object.keys(this.state.nodeInformation).length * i;
			const x = centerX + Math.cos(angle) * 150;
			const y = centerY + Math.sin(angle) * 150;

			if (this.state.nodeInformation[n] !== null) {
				const node2 = new DefaultNodeModel({
					name: this.state.nodeInformation[n].project_name,
					color: "#03e3e3",
				});
				node2.setPosition(x, y);
				node2.setLocked(true);
				nodes.push(node2);
				const port2 = node2.addOutPort("Out");
				const link = port1.link(port2);
				link.setColor("#ffffff");
				link.setLocked(true);
				nodes.push(link);
			} else {
				const node2 = new DefaultNodeModel({
					name: n,
					color: "#dddddd",
				});
				node2.setPosition(x, y);
				node2.setLocked(true);
				nodes.push(node2);
				const port2 = node2.addOutPort("Out");
				const link = port1.link(port2);
				link.setColor("#ffffff");
				link.setLocked(true);
				nodes.push(link);
			}
		});

		const model = new DiagramModel();

		nodes.forEach((n) => {
			model.addAll(n);
		});

		this.state.engine.setModel(model);

		return null;
	}

	changeState(field, value) {
		this.setState({ [field]: value });
	}

	render() {
		return (
			<div id="PageNetwork">
				{this.state.engine
					&& <CanvasWidget
						className="myDiagramDiv"
						engine={this.state.engine}
					/>
				}
				<LoadingBar
					className="LoadingBar"
					color='#f11946'
					progress={(this.state.loadingProgress / this.state.nodes.length) * 100}
				/>
			</div>
		);
	}
}
