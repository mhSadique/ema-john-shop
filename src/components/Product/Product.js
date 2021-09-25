import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';
const Product = ({ product, handleAddToCart }) => {
    console.log(Rating);
    const { name, price, img, seller, stock, star } = product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h3 className="product-name">{name}</h3>
                <p>Seller: {seller}</p>
                <p>Price: ${price}</p>
                <p>Only {stock} left in stock - order soon</p>
                <p>
                    <Rating
                        readonly
                        emptySymbol="far fa-star icon-color"
                        fullSymbol="fas fa-star icon-color"
                        initialRating={star}
                    />
                </p>
                <button
                    className="btn-regular"
                    onClick={() => handleAddToCart(product)}
                >
                    <FontAwesomeIcon icon={faShoppingCart} />
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default Product;