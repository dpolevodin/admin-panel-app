import '../src/css/reset.css';
import '../src/css/style.css';
import { Provider } from 'react-redux'
import { store } from './store'
import SvgSprite from '../src/components/Icons/SvgSprite';
import PageHeader from './components/Header/PageHeader';
import { OrdersTable } from './components/Table/OrdersTable'
import OrdersFilter from './components/Filter/OrdersFilter'
import ModalForm from './components/ModalForm/ModalForm';



function App() {
  return (
      <Provider store={store}>
        <ModalForm />
        <div className="main-wrapper">
            <PageHeader />
            <OrdersFilter />
            <OrdersTable />
            <SvgSprite />
        </div>
      </Provider>
  );
}

export default App;
