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
          <div>
            <p>{ review.email }</p>
            <p>{ review.score }</p>
            <p>{ review.comments }</p>
          </div>
        </div>
      ))
    );

    return (
      <div>
        <span>Avaliações</span>
        <form>
          <StarRating />
          <input
            type="email"
            name="email"
            data-testid="product-detail-email"
            placeholder="Email"
            value={ email }
            onChange={ this.handleChange }
          />
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
        <div>
          { listReviews }
        </div>
      </div>
    );
  }
}

export default FormReview;
