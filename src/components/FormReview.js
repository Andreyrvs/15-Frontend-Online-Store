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
    // =======
    //     event.preventDefault();
    //     this.setState((prevState) => ({
    //       reviewItems: [...prevState.reviewItems, {
    //         email: prevState.email,
    //         comments: prevState.comments,
    //       }],
    //     }), () => {
    //       const { reviewItems } = this.state;
    //       localStorage.setItem('reviewItems', JSON.stringify(reviewItems));
    //       window.location.reload();
    //     });
    // >>>>>>> 9a9ee05d25f8134dd273d972011dfa3a01e0ce87
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    // <<<<<<< HEAD
    // const {
    //   email,
    //   comments,
    // } = this.state;
    // const { product } = this.props;
    // const items = JSON.parse(localStorage.getItem('reviews'));
    // const reviewItems = items || [];

    // =======
    const { reviewItems } = this.state;
    // >>>>>>> 9a9ee05d25f8134dd273d972011dfa3a01e0ce87
    const listReviews = (
      reviewItems.filter((review, index) => (
        review.product.id === product.id
          ? <div key={ index }>
            <p>{ review.email }</p>
            <p>{ review.score }</p>
            <p>{ review.comments }</p>
          </div>
          : 'Erro'
      ))
    );

    return (
      <>
        <span>Avaliações</span>
        <form onSubmit={ (event) => this.saveReviews(event) }>
          <StarRating />
          {/* <<<<<<< HEAD
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
======= */}
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
          {/* >>>>>>> 9a9ee05d25f8134dd273d972011dfa3a01e0ce87 */}
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
