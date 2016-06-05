import React from "react";
import { Link } from "react-router";

const Photo = React.createClass ({
	render() {
		const { post, i, commments } = this.props;
		return (
			<figure className="grid-figure">
				<div className="grid-photo-wrap">
					<Link to={`/view/${post.code}`}>
						<img src={post.display_src} alt={post.caption} className="grid-photo" />
					</Link>
				</div>
			</figure>

		)
	}
});

export default Photo;