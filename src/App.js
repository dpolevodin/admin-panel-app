import '../src/css/reset.css';
import '../src/css/style.css';
import SvgSprite from '../src/components/Icons/SvgSprite';
import PageHeader from './components/Header/PageHeader';
import Table from './components/Table/Table'
import Filter from './components/Filter/Filter'
import ModalForm from './components/ModalForm/ModalForm';

function App() {
  return (
      <>
        <ModalForm isVisible/>
        <div className="main-wrapper">
            <PageHeader />
            <Filter />
            <Table />
            <SvgSprite />
        </div>
      </>
  );
}

export default App;
