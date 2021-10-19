import React from "react";
import "./PageNetwork.css";
import { getRequest } from "../"

export default class PageNetwork extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			nodes: [
				"localhost:5000",
				"api.db.cy.lu",
				"api.distributed.lu",
			],
			nodeInformation: {},
		};
	}

	fetchRssFeeds() {
		this.setState({ nodeInformation: {} }, () => {
			Promise.all(this.state.rssFeeds.map(ArticleRssFeed.fetchRssFeed)).then((data) => {
				let nodeInformation = {};

				data.forEach((d, i) => {
					nodeInformation[this.state.nodes[i]] = d;
				});

				this.setState({ nodeInformation });
			});
		});
	}

	static fetchRssFeed(rssFeed) {
		return new Promise((resolve) => getRequest(rssFeed.url, (data) => {
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
						{this.state.ss}
					</div>
				</div>
			</div>
		);
	}
}
