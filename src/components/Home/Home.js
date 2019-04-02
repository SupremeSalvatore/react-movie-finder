import React, {Component} from 'react';
import {IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE} from '../../config';
import HeroImage from '../elements/HeroImage/HeroImage';
import SearchBar from '../elements/SearchBar/SearchBar';
import FourColGrid from '../elements/FourColGrid/FourColGrid';
import MovieThumb from '../elements/MovieThumb/MovieThumb';
import Spinner from '../elements/Spinner/Spinner';
import LoadMoreBtn from '../elements/LoadMoreBtn/LoadMoreBtn';

import './Home.css';

const {REACT_APP_MOVIE_KEY, REACT_APP_BASE_URL} = process.env;

class Home extends Component {
	state = {
		movies: [],
		heroImage: '',
		loading: false,
		currentPage: 0,
		totalPages: 0,
		searchTerm: ''
	};

	componentDidMount() {
		if (localStorage.getItem('HomeState')) {
			const state = JSON.parse(localStorage.getItem('HomeState'));
			this.setState({...state});
		} else {
			this.setState({loading: true});
			const endpoint = `${REACT_APP_BASE_URL}movie/popular?api_key=${REACT_APP_MOVIE_KEY}&language=en-US&page=1`;
			this.fetchMovies(endpoint);
		}
	}
	searchMovies = searchTerm => {
		let endpoint = '';
		this.setState({
			movies: [],
			loading: true,
			searchTerm
		});

		if (searchTerm === '') {
			endpoint = `${REACT_APP_BASE_URL}movie/popular?api_key=${REACT_APP_MOVIE_KEY}&language=en-US&page=1`;
		} else {
			endpoint = `${REACT_APP_BASE_URL}search/movie?api_key=${REACT_APP_MOVIE_KEY}&language=en-US&query=${searchTerm}`;
		}
		this.fetchMovies(endpoint);
	};
	loadMoreItems = () => {
		const {searchTerm, currentPage} = this.state;
		let endpoint = '';
		this.setState({loading: true});
		if (searchTerm === '') {
			endpoint = `${REACT_APP_BASE_URL}movie/popular?api_key=${REACT_APP_MOVIE_KEY}&language=en-US&page=${currentPage +
				1}`;
		} else {
			endpoint = `${REACT_APP_BASE_URL}search/movie?api_key=${REACT_APP_MOVIE_KEY}&language=en-US&query=${searchTerm}&page=${currentPage}`;
		}
		this.fetchMovies(endpoint);
	};
	fetchMovies = endpoint => {
		const {movies} = this.state;
		fetch(endpoint)
			.then(result => result.json())
			.then(result => {
				console.log(result.results);
				this.setState(
					{
						movies: [...movies, ...result.results],
						heroImage: this.state.heroImage || result.results[0],
						loading: false,
						currentPage: result.page,
						totalPages: result.total_pages
					},
					() => {
						if (this.state.searchTerm === '') {
							localStorage.setItem('HomeState', JSON.stringify(this.state));
						}
					}
				);
			});
	};

	render() {
		// Destructuring the state
		const {
			movies,
			heroImage,
			loading,
			currentPage,
			totalPages,
			searchTerm
		} = this.state;
		return (
			<div className="rmdb-home">
				{heroImage && (
					<div>
						<HeroImage
							image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${
								heroImage.backdrop_path
							}`}
							title={heroImage.original_title}
							text={heroImage.overview}
						/>
						<SearchBar callback={this.searchMovies} />
					</div>
				)}
				<div className="rmdb-home-grid">
					<FourColGrid
						header={searchTerm ? 'Search Result' : 'Popular Movies'}
						loading={loading}
					>
						{movies.map((movie, i) => {
							return (
								<MovieThumb
									key={i}
									clickable={true}
									image={
										movie.poster_path
											? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
											: './images/no_image.jpg'
									}
									movieId={movie.id}
									movieName={movie.original_title}
								/>
							);
						})}
					</FourColGrid>
					{loading && <Spinner />}
					{currentPage <= totalPages && !loading && (
						<LoadMoreBtn text="Load More" onClick={this.loadMoreItems} />
					)}
				</div>
			</div>
		);
	}
}

export default Home;
