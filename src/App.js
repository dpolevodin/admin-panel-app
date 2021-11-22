import '../src/css/reset.css';
import '../src/css/style.css';

import { Provider } from 'react-redux'
import { store } from './store'

import SvgSprite from '../src/components/Icons/SvgSprite';
import PageHeader from './components/Header/PageHeader';
import Table from './components/Table/Table'
import Filter from './components/Filter/Filter'
import ModalForm from './components/ModalForm/ModalForm';

function App() {
  return (
      <Provider store={store}>
        {/* <ModalForm isVisible/> */}
        <div className="main-wrapper">
            <PageHeader />
            <Filter />
            <Table />
            <SvgSprite />
        </div>
      </Provider>
  );
}

export default App;
