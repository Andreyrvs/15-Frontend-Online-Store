import React from 'react';
import StarRating from './StarRating';

class FormReview extends React.Component {
  constructor() {
    super();

    this.state = {
      score: 0,
      email: '',
      comments: '',
    };
  }

  saveReviews = (event) => {
    event.preventDefault();
    const {
      score,
      email,
      comments,
    } = this.state;

    const review = localStorage.reviews ? JSON.parse(localStorage.reviews) : [];

    review.push({
      score,
      email,
      comments,
    });

    localStorage.setItem('reviews', JSON.stringify(review));
    window.location.reload();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      email,
      comments,
    } = this.state;

    const items = JSON.parse(localStorage.getItem('reviews'));
    const reviewItems = (items && items.length) ? items : [];

    const listReviews = (
      reviewItems.map((review, index) => (
        <div key={ index }>
          <p>{ review.email }</p>
          <p>{ review.score }</p>
          <p>{ review.comments }</p>
        </div>
      ))
    );

    return (
      <>
        <span>Avaliações</span>
        <form>
          <StarRating />
          <label htmlFor="userEmail">
            Email:
            <input
              type="email"
              name="email"
              data-testid="product-detail-email"
              id="userEmail"
              placeholder="Email"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
          <textarea
            name="comments"
            data-testid="product-detail-evaluation"
            rows="5"
            placeholder="Mensagem (opcional)"
            value={ comments }
            onChange={ this.handleChange }
          />
          <button
            type="submit"
            data-testid="submit-review-btn"
            onClick={ this.saveReviews }
          >
            Avaliar
          </button>
        </form>
        { listReviews }
      </>
    );
  }
}

export default FormReview;
