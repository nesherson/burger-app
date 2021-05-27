import axios from '../../axios-orders';
import { useState, useEffect } from 'react';

import Order from '../../components/order/Order';
import withErrorHandler from '../../components/withErrorHandler/withErrorHandler';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('/orders.json')
      .then((resp) => {
        setLoading(false);
        const fetchedOrders = [];
        for (let key in resp.data) {
          fetchedOrders.push({
            ...resp.data[key],
            id: key,
          });
        }
        setOrders(fetchedOrders);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {orders.map((order) => {
        return (
          <Order
            key={order.id}
            ingredients={order.ingredients}
            price={order.price}
          />
        );
      })}
    </div>
  );
};

export default withErrorHandler(Orders, axios);
