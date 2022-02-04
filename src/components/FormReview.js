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
    event.preventDefault(event);
    const {
      score,
      email,
      comments,
    } = this.state;
    const { product } = this.props;
    const review = JSON.parse(localStorage.getItem('review')) || [];

    review.push({
      score,
      emailAll: [...review, email],
      commentsAll: [...review, comments],
      productId: product.id,
    });

    localStorage.setItem('review', JSON.stringify(review));
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
    const { product } = this.props;
    const items = JSON.parse(localStorage.getItem('reviews'));
    const reviewItems = items || [];

    const listReviews = (
      reviewItems.filter((review, index) => (
        review.product.id === product.id
          ? <div key={ index }>
            <p>{ review.email }</p>
            <p>{ review.score }</p>
            <p>{ comments }</p>
            </div>
          : 'Erro'
      ))
    );

    return (
      <>
        <span>Avaliações</span>
        <form onSubmit={ (event) => this.saveReviews(event) }>
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
          >
            Avaliar
          </button>
        </form>
        <div>
          { listReviews }
        </div>
      </>
    );
  }
}

export default FormReview;
