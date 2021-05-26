import { useState } from 'react';
import style from './contactData.module.css';

import Button from '../../../components/UI/button/Button';

const ContactData = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState({ street: '', postalCode: '' });

  return (
    <div className={style.ContactData}>
      <h4>Enter your Contact Data</h4>
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
        <Button btnType='Success'>ORDER</Button>
      </form>
    </div>
  );
};

export default ContactData;
