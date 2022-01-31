import React, { useState } from 'react';
import './StarRating.css';

// https://dev.to/michaelburrows/create-a-custom-react-star-rating-component-5o6

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const STARS = 5; // https://eslint.org/docs/rules/no-magic-numbers
  return (
    <div className="star-rating">
      {[...Array(STARS)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={ index }
            className={ index <= (hover || rating) ? 'on' : 'off' }
            onClick={ () => setRating(index) }
            onMouseEnter={ () => setHover(index) }
            onMouseLeave={ () => setHover(rating) }
            data-testid={ `${index}-rating` }
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
