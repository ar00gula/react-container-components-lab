// // Code MovieReviews Here
// import React from 'react'

// const MovieReviews = ({reviews}) => {
//     console.log(reviews)
//     return (
//         <div className="review-list">
//         {reviews.map(movie => (
//             <div className="review">
//             <h3>{movie.display_title} - {movie.mpaa_rating}</h3>
//             <img src={movie.multimedia.src} alt={movie.display_title}/>
//             <p>{movie.summary_short}</p>
//             </div>
//         ))}
//         </div>
//     )
// }

// export default MovieReviews

import React from 'react';

const Review = ({
  headline,
  byline,
  link,
  summary_short
}) => {
  return (

    <div
      key={headline}
      className="review"
    >
      <header>
        <a
          className="review-link"
          href={link.url}
        >
          {headline}
        </a>
        <br/>
        <span className="author">{byline}</span>
      </header>
      <blockquote>{summary_short}</blockquote>
    </div>
  );
};

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
