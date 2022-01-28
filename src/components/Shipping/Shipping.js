import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Shipping = () => {
    return (
        <div>
            <h2>This is Shipping</h2>
            <Link to="/placeorder">Place Your Order</Link>
        </div>
    );
};

export default Shipping;