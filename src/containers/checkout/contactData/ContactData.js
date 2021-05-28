import { useState } from 'react';
import style from './contactData.module.css';
import axios from '../../../axios-orders';

import Button from '../../../components/UI/button/Button';
import Spinner from '../../../components/UI/spinner/Spinner';
import Input from '../../../components/UI/input/Input';

const ContactData = (props) => {
  const [orderForm, setOrderForm] = useState({
    name: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Your name',
      },
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
      value: '',
    },
    email: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Your email',
      },
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
      value: '',
    },
    street: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Street',
      },
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
      value: '',
    },
    zipCode: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Zip code',
      },
      validation: {
        required: true,
        minLength: 5,
        maxLength: 5,
      },
      valid: false,
      touched: false,
      value: '',
    },
    country: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Country',
      },
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
      value: '',
    },
    deliveryMethod: {
      elementType: 'select',
      elementConfig: {
        options: [
          { value: 'fastest', displayValue: 'Fastest' },
          { value: 'cheapest', displayValue: 'Cheapest' },
        ],
      },
      validation: {},
      valid: true,
      value: 'fastest',
    },
  });

  const [formIsValid, setFormIsValid] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOrder = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {};

    for (let key in orderForm) {
      formData[key] = orderForm[key].value;
    }

    const order = {
      ingredients: props.ingredients,
      price: props.totalPrice,
      orderData: formData,
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

  const handleOnChange = (e, inputIdentifier) => {
    const updatedOrderForm = { ...orderForm };
    const updatedFormProperty = { ...updatedOrderForm[inputIdentifier] };
    updatedFormProperty.value = e.target.value;
    updatedFormProperty.valid = checkValidity(
      updatedFormProperty.value,
      updatedFormProperty.validation
    );
    updatedOrderForm[inputIdentifier] = updatedFormProperty;
    updatedOrderForm[inputIdentifier].touched = true;

    let formIsValid = true;

    for (let key in updatedOrderForm) {
      formIsValid = updatedOrderForm[key].valid && formIsValid;
    }

    console.log(formIsValid);

    setFormIsValid(formIsValid);
    setOrderForm(updatedOrderForm);
  };

  const formElementsArray = [];

  for (let key in orderForm) {
    formElementsArray.push({
      id: key,
      config: orderForm[key],
    });
  }

  const checkValidity = (value, rules) => {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    return isValid;
  };

  let form = (
    <form onSubmit={handleOrder}>
      {formElementsArray.map((formEl) => {
        return (
          <Input
            key={formEl.id}
            elementType={formEl.config.elementType}
            elementConfig={formEl.config.elementConfig}
            value={formEl.config.value}
            invalid={!formEl.config.valid}
            shouldValidate={formEl.config.validation}
            touched={formEl.config.touched}
            onChange={(e) => {
              handleOnChange(e, formEl.id);
            }}
          />
        );
      })}
      <Button
        btnType='Success'
        onButtonClick={handleOrder}
        disabled={!formIsValid}
      >
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
