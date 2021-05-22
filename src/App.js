import Layout from './components/layout/Layout';
import { Route } from 'react-router-dom';
import BurgerBuilder from './containers/burgerBuilder/BurgerBuilder';
import Checkout from './containers/checkout/Checkout';

function App() {
  return (
    <div>
      <Layout>
        <Route exact path='/' component={BurgerBuilder} />
        <Route path='/checkout' component={Checkout} />
      </Layout>
    </div>
  );
}

export default App;
