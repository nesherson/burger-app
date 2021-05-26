import Layout from './components/layout/Layout';
import { Route } from 'react-router-dom';
import BurgerBuilder from './containers/burgerBuilder/BurgerBuilder';
import Checkout from './containers/checkout/Checkout';
import Orders from './containers/orders/Orders';

function App() {
  return (
    <div>
      <Layout>
        <Route path='/checkout' component={Checkout} />
        <Route exact path='/orders' component={Orders} />
        <Route exact path='/' component={BurgerBuilder} />
      </Layout>
    </div>
  );
}

export default App;
