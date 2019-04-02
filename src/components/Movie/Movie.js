import React, {Component} from 'react';
import Navigation from '../elements/Navigation/Navigation';
import MovieInfo from '../elements/MovieInfo/MovieInfo';
import MovieInfoBar from '../elements/MovieInfoBar/MovieInfoBar';
import FourColGrid from '../elements/FourColGrid/FourColGrid';
import Actor from '../elements/Actor/Actor';
import Spinner from '../elements/Spinner/Spinner';
import './Movie.css';

const {REACT_APP_MOVIE_KEY, REACT_APP_BASE_URL} = process.env;

class Movie extends Component {
	state = {
		movie: null,
		actors: null,
		directors: [],
		loading: false
	};
	componentDidMount() {
		if (localStorage.getItem(`${this.props.match.params.movieId}`)) {
			const state = JSON.parse(
				localStorage.getItem(`${this.props.match.params.movieId}`)
			);
			this.setState({...state});
		} else {
			this.setState({loading: true});
			// First fetch the movie
			const endpoint = `${REACT_APP_BASE_URL}movie/${
				this.props.match.params.movieId
			}?api_key=${REACT_APP_MOVIE_KEY}&language=en-US`;
			this.fetchMovie(endpoint);
		}
	}
	fetchMovie = endpoint => {
		fetch(endpoint)
			.then(result => result.json())
			.then(result => {
				console.log(result);
				if (result.status_code) {
					this.setState({loading: false});
				} else {
					this.setState({movie: result}, () => {
						// then fetch actors in callback fn
						const endpoint = `${REACT_APP_BASE_URL}movie/${
							this.props.match.params.movieId
						}/credits?api_key=${REACT_APP_MOVIE_KEY}`;
						fetch(endpoint)
							.then(result => result.json())
							.then(result => {
								const directors = result.crew.filter(
									member => member.job === 'Director'
								);
								this.setState(
									{
										actors: result.cast,
										directors,
										loading: false
									},
									() => {
										localStorage.setItem(
											`${this.props.match.params.movieId}`,
											JSON.stringify(this.state)
										);
									}
								);
							})
							.catch(err => console.log(err));
					});
				}
			});
	};
	render() {
		return (
			<div className="rmdb-movie">
				{this.state.movie ? (
					<div>
						<Navigation movie={this.props.location.movieName} />
						<MovieInfo
							movie={this.state.movie}
							directors={this.state.directors}
						/>
						<MovieInfoBar
							time={this.state.movie.runtime}
							budget={this.state.movie.budget}
							revenue={this.state.movie.revenue}
						/>
					</div>
				) : null}
				{this.state.actors ? (
					<div className="rmdb-movie-grid">
						<FourColGrid header={'Actors'}>
							{this.state.actors.map((actor, i) => {
								return <Actor key={i} actor={actor} />;
							})}
						</FourColGrid>
					</div>
				) : null}
				{!this.state.actors && !this.state.loading && <h1>No Movie Found!</h1>}
				{this.state.loading && <Spinner />}
			</div>
		);
	}
}

export default Movie;
