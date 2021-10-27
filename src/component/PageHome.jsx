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
				<div className={"row row-spaced"}>
					<div className="col-md-12">
						<h1>What is openXeco?</h1>
					</div>

					<div className="col-md-12">
						<p>
							<b>openXeco</b> is an open source project to manage and interconnect
							ecosystems.
						</p>

						<p>
							The software solution offers multiple apps with simple UX to enhance
							the management of a community. This includes the management of content,
							a repertory to manage the ecosystem awareness and the relationships and
							many other functionnalities.
						</p>

						<p>
							On another side, the ecosystem gets involves into the organisation. Members
							have a controlled access to the system to activeley be part of the mouvement.
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

					<div className="col-md-12 row-spaced">
						<p>
							Each organization has access to the source code of the project to
							run its own node. A node is an independant instance with its own database.
							The administrator of the organization has a complete control on the
							data.
						</p>

						<p>
							Each node can connect to the <b>openXeco</b> network. A node can collect
							the data that are accessible to complete his database. On another hand,
							an administrator can open his data to the network to promote himself and
							his ecosystem.
						</p>
					</div>

					<div className="col-md-12">
						<h1>What can an organization do with a node?</h1>
					</div>

					<div className="col-md-12">
						<p>
							A node is composed of a database and its connected API. Thanks to the API,
							our generic web applications can get, add, delete and update data.
						</p>

						<p>
							Here is a short description of the generic web applications that are accessible:
						</p>

						<ul>
							<li>
								<b>Administration portal</b>: the organization can manage the accounts and
								all other object of the system
							</li>
							<li>
								<b>Ecosystem portal</b>: any physical person can create an account to edit
								personal information, entity information or articles.
							</li>
						</ul>
					</div>

					<div className="col-md-12">
						<div className="center">
							<img
								src="/img/openxeco-node.png"
							/>
						</div>
					</div>

					<div className="col-md-12">
						<p>
							Also, additional web applications can access the services through the API. An
							organization can build customized portal, dashboard or any kind of
							application to complete its toolset.
						</p>

						<p>
						</p>
					</div>

					<div className="col-md-12">
						<h1>What object are manageable?</h1>
					</div>

					<div className="col-md-12">
						<p>
							Also, additional web applications can access the services through the API. An
							organization can build customized portal, dashboard or any kind of
							application to complete its toolset.
						</p>
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
						<p>
							Also, additional web applications can access the services through the API. An
							organization can build customized portal, dashboard or any kind of
							application to complete its toolset.
						</p>
					</div>

					<div className="col-md-12">
						<h1>How do we interconnect the nodes?</h1>
					</div>

					<div className="col-md-12 row-spaced">
						A node can connect to another one thanks to an handshaking system. The combinason
						of handshakes creates a network of nodes.
					</div>

					<div className="col-md-12">
						<div className="center">
							<img
								src="/img/openxeco-network.png"
							/>
						</div>
					</div>

					<div className="col-md-12 row-spaced">
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
