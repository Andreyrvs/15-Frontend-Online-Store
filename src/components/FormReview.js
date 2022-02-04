import React from 'react';
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
    this.setState((prevState) => ({
      reviewItems: [...prevState.reviewItems, {
        email: prevState.email,
        comments: prevState.comments,
      }],
    }), () => {
      const { reviewItems } = this.state;
      localStorage.setItem('reviewItems', JSON.stringify(reviewItems));
      window.location.reload();
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
          <label htmlFor="id-email">
            Email
            <input
              id="id-email"
              type="email"
              name="email"
              data-testid="product-detail-email"
              placeholder="Email"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="id-comments">
            Comentários
            <textarea
              id="id-comments"
              name="comments"
              data-testid="product-detail-evaluation"
              rows="5"
              placeholder="Mensagem (opcional)"
              onChange={ this.handleChange }
            />
          </label>
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
