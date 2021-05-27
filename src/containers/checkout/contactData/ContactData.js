import { useState } from 'react';
import style from './contactData.module.css';
import axios from '../../../axios-orders';

import Button from '../../../components/UI/button/Button';
import Spinner from '../../../components/UI/spinner/Spinner';
import Input from '../../../components/UI/input/Input';

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
      <Input
        inputtype='input'
        label='Name'
        type='text'
        name='name'
        placeholder='Your Name'
      />
      <Input
        inputtype='input'
        label='Email'
        type='email'
        name='email'
        placeholder='Your Email'
      />
      <Input
        inputtype='input'
        label='Street'
        type='text'
        name='street'
        placeholder='Street'
      />
      <Input
        inputtype='input'
        label='Postal Code '
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
