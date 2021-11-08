import '../src/css/reset.css';
import '../src/css/style.css';
import SvgSprite from '../src/components/icons/SvgSprite';
import PageHeader from './components/header/PageHeader';
import FilterPrimary from './components/filter/FilterPrimary'
import FilterOptions from './components/filter/FilterOptions'
import TableHeader from './components/table/TableHeader'
import TableOrdersList from './components/table/TableOrdersList';
import TableFooter from './components/table/TableFooter'


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
