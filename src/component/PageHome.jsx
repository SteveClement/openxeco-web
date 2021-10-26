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
			<div id={"PageHome"}>
				<div className={"row"}>
					<div className="col-md-12">
						<h1>What is openXeco?</h1>
					</div>

					<div className="col-md-12">
						<p>
							<b>openXeco</b> is an open source project to manage and interconnect
							an ecosystems.
						</p>

						<p>
							openXeco is an open source project to manage and interconnect
							the ecosystems.
						</p>
					</div>

					<div className="col-md-4">
						<div className="box">
							<div className="box-wrap">
								<div className="box-logo">
									<i className="fas fa-globe-europe"/>
								</div>
								<div className="box-text">
									Ecosystem awareness
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-4">
						<div className="box">
							<div className="box-wrap">
								<div className="box-logo">
									<i className="fas fa-layer-group"/>
								</div>
								<div className="box-text">
									Content management
								</div>
								<div className="box-subtext">
									Par
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-4">
						<div className="box">
							<div className="box-wrap">
								<div className="box-logo">
									<i className="fas fa-shapes"/>
								</div>
								<div className="box-text">
									Ecosystem inclusion
								</div>
								<div className="box-subtext">
									Use your own taxonomy to classify the entities and
									the articles
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-12">
						<p>
							Each organization has access to the source code of the project to
							run its own node. A node is an independant instance that stores its
							own data. The administrator of the organization is then allowed to
						</p>

						<p>
							A node can be connected to the network by handshaking another node.
							With those
						</p>
					</div>

					<div className="col-md-12">
						<h1>What is openXeco?</h1>
					</div>

					<div className="col-md-12">
						<div className="center">
							<img
								src="/img/openxeco-node.png"
							/>
						</div>
					</div>

					<div className="col-md-4">
						<div className="box">
							<div className="box-wrap">
								<div className="box-logo">
									<i className="fas fa-building"></i>
								</div>
								<div className="box-text">
									Entity
								</div>
								<div className="box-subtext">
									Private sector, public sector and civil society
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-4">
						<div className="box">
							<div className="box-wrap">
								<div className="box-logo">
									<i className="fas fa-feather-alt"></i>
								</div>
								<div className="box-text">
									Article
								</div>
								<div className="box-subtext">
									News, events, job offers and more
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-4">
						<div className="box">
							<div className="box-wrap">
								<div className="box-logo">
									<i className="fas fa-shapes"/>
								</div>
								<div className="box-text">
									Taxonomy
								</div>
								<div className="box-subtext">
									Use your own taxonomy to classify the entities and
									the articles
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-12">
						<h1>What is openXeco?</h1>
					</div>

					<div className="col-md-12">
						<div className="center">
							<img
								src="/img/openxeco-network.png"
							/>
						</div>
					</div>

					<div className="col-md-4">
						<div className="box">
							<div className="box-wrap">
								<div className="box-logo">
									<i className="fas fa-building"></i>
								</div>
								<div className="box-text">
									Entity
								</div>
								<div className="box-subtext">
									Private sector, public sector and civil society
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-4">
						<div className="box">
							<div className="box-wrap">
								<div className="box-logo">
									<i className="fas fa-feather-alt"></i>
								</div>
								<div className="box-text">
									Article
								</div>
								<div className="box-subtext">
									News, events, job offers and more
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-4">
						<div className="box">
							<div className="box-wrap">
								<div className="box-logo">
									<i className="fas fa-shapes"/>
								</div>
								<div className="box-text">
									Taxonomy
								</div>
								<div className="box-subtext">
									Use your own taxonomy to classify the entities and
									the articles
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-12">
						{this.state.ss}
					</div>
				</div>
			</div>
		);
	}
}
