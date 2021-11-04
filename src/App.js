import '../src/css/reset.css';
import '../src/css/style.css';
// import SvgElement from './components/SvgElement';
import SvgSprite from './components/SvgSprite';
import PageHeader from './components/PageHeader';
// import Button from './components/Button';
// import Input from './components/Input';
// import Searchbar from './components/Searchbar';
// import Loader from './components/Loader';
import FilterPrimary from './components/FilterPrimary'
// import FilterDropdown from './components/FilterDropdown';
// import DateFilter from './components/DateFilter'
// import StatusFilter from './components/StatusFilter'
// import SumOrderFilter from './components/SumOrderFilter'
// import Button from './components/Button';
import FilterOptions from './components/FilterOptions'
import TableHeader from './components/TableHeader'
import FooterDropdown from './components/FooterDropdown';
import TableOrdersList from './components/TableOrdersList';


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
                    <form className="table__footer-action">
                        <span className="table__footer-text">Выбрано записей: 5</span>
                        <button className="table__footer-button">
                            <svg className="table__footer-icon">
                                <use xlinkHref="#pencil"></use>
                            </svg>
                            <span className="table__footer-button-text">Изменить статус</span>
                        </button>
                        <button className="table__footer-button table__footer-button_red">
                            <svg className="table__footer-icon">
                                <use xlinkHref="#bin"></use>
                            </svg>
                            <span className="table__footer-button-text">Удалить</span>
                        </button>
                    </form>

                    <FooterDropdown />

                    <div className="table__footer-pagination">
                        <form className="table__footer-pagination-form">
                            <button className="table__footer-button table__footer-button_small">
                                <span className="table__footer-button-text">1</span>
                            </button>
                            <button className="table__footer-button table__footer-button_small table__footer-button_transparent">
                                <span className="table__footer-button-text">2</span>
                            </button>
                            <button className="table__footer-button table__footer-button_small table__footer-button_transparent">
                                <span className="table__footer-button-text">3</span>
                            </button>
                            <span className="table__pagination-continue">…</span>
                            <button className="table__footer-button table__footer-button_small table__footer-button_transparent">
                                <span className="table__footer-button-text">18</span>
                            </button>
                        </form>
                            <button className="table__footer-button table__footer-button_small table__footer-button_transparent">
                                <span className="table__footer-button-text">#</span>
                            </button>
                    </div>
                </div>
            </div>
        </div>
        <SvgSprite />
    </body>
  );
}

export default App;
