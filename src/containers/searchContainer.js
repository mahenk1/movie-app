import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchMovieData } from './../actions/searchActions';

class SearchContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movieTitle: ""
        }
    }

    handleChange = (e) => {
        this.setState({ movieTitle: e.target.value });
    }

    handleSearch = () => {
        this.props.searchMovie(this.state.movieTitle);
    }

    render() {
        return (
            <div className="searc-container">
                <div className="search-input">
                    <input
                        type="text"
                        value={this.state.movieTitle}
                        placeholder="Enter movie title"
                        onChange={this.handleChange}
                    />
                    <button onClick={this.handleSearch}>Search</button>
                </div>

                <div className="search-results">
                    <div>
                        <img src={this.props.searchResults["Poster"]} />
                    </div>
                    {
                        Object.keys(this.props.searchResults).map((val, index) => {
                            return val != "Poster"? <div key={index}>{val + ":" + this.props.searchResults[val]} </div>:""
                        })
                    }
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        searchResults: state.searchReducer.results
    }
}
const mapDispatchToProps = (dispatch) => ({
    searchMovie: (title) => dispatch(searchMovieData(title))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);