import OrderList from './components/OrderList';
import Summary from './components/Summary';
import './OrderPage.css';

import { useState } from 'react';

import { products } from './data/products';

const initalState = (arr) =>
    arr.map((v) => {
        return { ...v, count: 1 };
    });

function OrderPage() {
    const [productsInOrder, setProductsInOrder] = useState(
        initalState(products)
    );

    const calcTotalNumber = () => {
        let total = 0;

        for (let i = 0; i < productsInOrder.length; i++) {
            total += productsInOrder[i].count;
        }

        return total;
    };

    const calcTotalPrice = () => {
        let total = 0;

        for (let i = 0; i < productsInOrder.length; i++) {
            total += productsInOrder[i].count * productsInOrder[i].price;
        }

        return total;
    };

    return (
        <div className="card">
            <div className="row">
                <OrderList
                    productsInOrder={productsInOrder}
                    setProductsInOrder={setProductsInOrder}
                />
                <Summary
                    totalNumber={calcTotalNumber()}
                    totalPrice={calcTotalPrice()}
                />
            </div>
        </div>
    );
}

export default OrderPage;
