import React from "react";
import PropTypes from "prop-types";

function Movie({ year, title, summary, poster, genres }) {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title}></img>
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h3 className="movie__year">{year}</h3>
                <ul className="genres">
                    {genres.map((genre, index) => {
                        <li key={index} className="genres__genre">{genre}</li>
                    })}
                </ul>
                <p className="movie__summary">{summary.slice(0, 180)}...</p>
            </div>
        </div>
    )
}

// prop-types : 컴포넌트의 필수 props를 지정하거나 props의 타입을 지정할 때 사용
Movie.propTypes = {
    // PropTypes.(타입).(잘 전달되었는지 확인 -> 필수 props)
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;