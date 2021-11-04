import '../src/css/reset.css';
import '../src/css/style.css';
import SvgSprite from './components/SvgSprite';
import PageHeader from './components/PageHeader';
import FilterPrimary from './components/FilterPrimary'
import FilterOptions from './components/FilterOptions'
import TableHeader from './components/TableHeader'
import FooterDropdown from './components/FooterDropdown';
import TableOrdersList from './components/TableOrdersList';
import FooterActions from './components/FooterActions'
import FooterPagination from './components/FooterPagination'


function App() {
  return (
    <body>
        <div className="main-wrapper">
            <PageHeader />

            <div className="filter">
                <FilterPrimary />
                <FilterOptions />
            </div>

            <div className="table">
                <TableHeader />

                <div className="table__body">
                    <TableOrdersList />
                </div>

                <div className="table__footer">
                    <FooterActions />
                    <FooterDropdown />
                    <FooterPagination />

                </div>
            </div>
        </div>
        <SvgSprite />
    </body>
  );
}

export default App;
