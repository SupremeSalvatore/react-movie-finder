import React from 'react';
import PropTypes from 'prop-types';
import './FourColGrid.css';
const FourColGrid = props => {
	const renderMovies = () => {
		const gridMovies = props.children.map((movie, i) => {
			return (
				<div key={i} className="rmdb-grid-element">
					{movie}
				</div>
			);
		});
		return gridMovies;
	};
	return (
		<div className="rmdb-grid">
			{props.header && !props.loading && <h1>{props.header}</h1>}
			<div className="rmdb-grid-content">{renderMovies()}</div>
		</div>
	);
};

FourColGrid.propTypes = {
	header: PropTypes.string
	// loading: PropTypes.bool.isRequired // If its needed
};

export default FourColGrid;
