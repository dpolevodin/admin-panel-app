import '../src/css/reset.css';
import '../src/css/style.css';
import SvgSprite from '../src/components/Icons/SvgSprite';
import PageHeader from './components/Header/PageHeader';
import FilterPrimary from './components/Filter/FilterPrimary'
import FilterOptions from './components/Filter/FilterOptions'
import TableHeader from './components/Table/TableHeader'
import TableOrdersList from './components/Table/TableOrdersList';
import TableFooter from './components/Table/TableFooter'


function App() {
  return (
    <div>
        <div className="main-wrapper">
            <PageHeader />

            <div className="filter">
                <FilterPrimary />
                <FilterOptions />
            </div>

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
