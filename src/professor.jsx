import React, { Component } from 'react';

export default class Professor extends Component {

  render() {
    return (
      <div style={styles.container}>
        <nav style={navbar}>
					<span>Professor</span>
				</nav>
				<div style={centeredContainer}>
					<p>Professor</p>
				</div>
      </div>
    );
  }
}

const styles = {
	container: {
		flex: 1,
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
