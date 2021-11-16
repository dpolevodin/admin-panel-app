import '../src/css/reset.css';
import '../src/css/style.css';
import SvgSprite from '../src/components/Icons/SvgSprite';
import PageHeader from './components/Header/PageHeader';
import TableHeader from './components/Table/TableHeader'
import TableOrdersList from './components/Table/TableOrdersList';
import TableFooter from './components/Table/TableFooter'
import Filter from './components/Filter/Filter'


function App() {
  return (
    <div>
        <div className="main-wrapper">
            <PageHeader />
            <Filter />

            <div className="table">
                <TableHeader />
                <TableOrdersList />
                <TableFooter />
            </div>
        </div>
        <SvgSprite />
    </div>
  );
}

export default App;
