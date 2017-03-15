import React, { Component } from 'react';
import {logoutUser} from "./firebaseAPI";

export default class Professor extends Component {

	handleLogout(){
		logoutUser().then(() => {
			console.log("signed out sucsessfully")
		})
	}

  render() {
    return (
      <div style={styles.container}>
        <nav style={styles.navbar}>
					<span>Professor</span>
				</nav>
				<div style={styles.centeredContainer}>
					<p>Professor</p>
				</div>
				<button onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }
}

const styles = {
	container: {
		flex: 1,
		backgroundColor: "red",
	},
	navbar: {
		flexDirection: "row",
		alignItems: "stretch",
		justifyContent: "center",
		backgroundColor: "grey",
	},
	centeredContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "black",
	}
}
