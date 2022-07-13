import OrderList from './components/OrderList';
import Summary from './components/Summary';
import './OrderPage.css';

import { useState } from 'react';

import { products } from './data/products';

function OrderPage() {
    const [counts, setCounts] = useState([1, 1]);

    const calcTotalNumber = () => {
        let total = 0;

        for (let i = 0; i < products.length; i++) {
            total += counts[i];
        }

        return total;
    };

    const calcTotalPrice = () => {
        let total = 0;

        for (let i = 0; i < products.length; i++) {
            total += counts[i] * products[i].price;
        }

        return total;
    };

    return (
        <div className="card">
            <div className="row">
                <OrderList counts={counts} setCounts={setCounts} />
                <Summary
                    totalNumber={calcTotalNumber()}
                    totalPrice={calcTotalPrice()}
                />
            </div>
        </div>
    );
}

export default OrderPage;
