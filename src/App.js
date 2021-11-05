import '../src/css/reset.css';
import '../src/css/style.css';
import SvgSprite from './components/SvgSprite';
import PageHeader from './components/PageHeader';
import FilterPrimary from './components/FilterPrimary'
import FilterOptions from './components/FilterOptions'
import TableHeader from './components/TableHeader'
import TableOrdersList from './components/TableOrdersList';
import TableFooter from './components/TableFooter'


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
