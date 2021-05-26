import { useState } from 'react';
import style from './contactData.module.css';
import axios from '../../../axios-orders';

import Button from '../../../components/UI/button/Button';
import Spinner from '../../../components/UI/spinner/Spinner';

const ContactData = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState({ street: '', postalCode: '' });
  const [loading, setLoading] = useState(false);

  const handleOrder = (e) => {
    e.preventDefault();
    setLoading(true);
    const order = {
      ingredients: props.ingredients,
      price: props.totalPrice,
      customer: {
        name: name,
        address: {
          street: address.street,
          zipCode: address.postalCode,
          country: 'Belgium',
        },
        email: email,
      },
      deliveryMethod: 'fastest',
    };
    axios
      .post('/orders.json', order)
      .then((res) => {
        setLoading(false);
        props.history.push('/');
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  let form = (
    <form>
      <input
        className={style.Input}
        type='text'
        name='name'
        placeholder='Your Name'
      />
      <input
        className={style.Input}
        type='email'
        name='email'
        placeholder='Your Email'
      />
      <input
        className={style.Input}
        type='text'
        name='street'
        placeholder='Street'
      />
      <input
        className={style.Input}
        type='text'
        name='postalCode'
        placeholder='Postal Code'
      />
      <Button btnType='Success' onButtonClick={handleOrder}>
        ORDER
      </Button>
    </form>
  );
  if (loading) {
    form = <Spinner />;
  }

  return (
    <div className={style.ContactData}>
      <h4>Enter your Contact Data</h4>
      {form}
    </div>
  );
};

export default ContactData;
