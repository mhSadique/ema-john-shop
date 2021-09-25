import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [searchedProducts, setSearchedProducts] = useState([]);
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setSearchedProducts(data);
            });
    }, []);

    useEffect(() => {
        if (products.length) {
            let savedItems = getStoredCart();
            let storedCart = [];
            for (const item in savedItems) {
                const itemToSetInCart = products.find(product => product.key === item);
                const quantity = savedItems[item];
                itemToSetInCart.quantity = quantity;
                storedCart.push(itemToSetInCart);
            }
            setCart(storedCart);
        }
    }, [products]);

    const handleAddToCart = product => {
        const newProducts = [...cart, product];
        setCart(newProducts);
        addToDb(product.key);
    };

    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setSearchedProducts(matchedProducts);
        console.log(matchedProducts);
    };

    return (
        <>
        <div className="search-container">
            <input type="text" placeholder="Search Products" id="" onChange={handleSearch} />
        </div>
        <div className="shop-container">
            <div className="product-container">

                {searchedProducts.map(product => <Product
                    product={product}
                    key={product.key}
                    handleAddToCart={handleAddToCart}
                />)}
            </div>
            <div className="cart-container">
                <Cart cart={cart} />
            </div>
        </div>
        </>
    );
};

export default Shop;