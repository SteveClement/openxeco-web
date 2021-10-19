import React from "react";
import "./App.css";
import "./css/medium-editor.css";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
import { BrowserRouter } from "react-router-dom";
import { withCookies } from "react-cookie";
import InsideApp from "./component/InsideApp.jsx";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
		};
	}

	render() {
		return (
			<div id="App">
				<BrowserRouter>
					<InsideApp
						settings={this.state.settings}
						email={this.state.email}
						cookies={this.props.cookies}
					/>
				</BrowserRouter>

				<NotificationContainer/>
			</div>
		);
	}
}

export default withCookies(App);
