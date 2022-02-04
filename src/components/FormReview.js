import React from 'react';
import PropTypes from 'prop-types';
import StarRating from './StarRating';

class FormReview extends React.Component {
  constructor() {
    super();

    this.state = {
      reviewItems: JSON.parse(localStorage.getItem('reviewItems')) || [],
    };
  }

  saveReviews = (event) => {
    event.preventDefault();
    const { product } = this.props;

    this.setState((prevState) => ({
      reviewItems: [...prevState.reviewItems, {
        email: prevState.email,
        comments: prevState.comments,
        productId: product.id,
      }],
    }), () => {
      const { reviewItems } = this.state;
      localStorage.setItem('reviewItems', JSON.stringify(reviewItems));
    });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { reviewItems } = this.state;

    const { product } = this.props;

    const listReviews = (
      reviewItems.filter((reviewId) => reviewId.productId === product.id)
        .map((review, index) => (

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
              onChange={ this.handleChange }
            />
          </label>
          <textarea
            name="comments"
            data-testid="product-detail-evaluation"
            rows="5"
            placeholder="Mensagem (opcional)"
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

FormReview.propTypes = {
  product: PropTypes.object,
}.isRequire;

export default FormReview;
