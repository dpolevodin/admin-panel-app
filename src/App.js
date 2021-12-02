import '../src/css/reset.css';
import '../src/css/style.css';
import { Provider } from 'react-redux'
import { store } from './store'
import ModalForm from './components/ModalForm/ModalForm';
import { MainTable } from './components/MainTable/MainTable'


function App() {
  return (
      <Provider store={store}>
        <ModalForm />
        {/* <div className="main-wrapper">
            <PageHeader />
            <OrdersFilter />
            <OrdersTable />
            <SvgSprite />
        </div> */}
        <MainTable />
      </Provider>
  );
}

export default App;
