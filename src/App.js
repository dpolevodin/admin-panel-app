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
                    <ul className="table__body-list">
                        <li className="table__body-item">
                            <label className="table__checkbox-control">
                            <ul className="table__body-item-row">
                                <li className="table__header-item">
                                    <div className="table__checkbox-group">
                                        <input type="checkbox" className="table__checkbox" />
                                        <svg className="table__header-icon">
                                            <use xlinkHref="#checkmark"></use>
                                        </svg>
                                    </div>
                                </li>
                                <li className="table__header-item">
                                    <span className="table__header-item-text">1270989</span>
                                </li>
                                <li className="table__header-item">
                                    <span className="table__header-item-text">15.02.2021, 18:00</span>
                                </li>
                                <li className="table__header-item">
                                    <svg className="table__header-icon table__header-icon_orange">
                                        <use xlinkHref="#dot"></use>
                                    </svg>
                                    <span className="table__header-item-text">Новый</span>
                                </li>
                                <li className="table__header-item">
                                    <span className="table__header-item-text">6</span>
                                </li>
                                <li className="table__header-item">
                                    <span className="table__header-item-text">101 907 ₽</span>
                                </li>
                                <li className="table__header-item">
                                    <span className="table__header-item-text">Чернышев Филипп Семёнович</span>
                                </li>
                            </ul>
                            </label>
                        </li>

                        <li className="table__body-item">
                            <label className="table__checkbox-control">
                                <ul className="table__body-item-row">
                                    <li className="table__header-item">
                                        <label className="table__checkbox-control">
                                            <div className="table__checkbox-group">
                                                <input type="checkbox" className="table__checkbox" />
                                                <svg className="table__header-icon">
                                                    <use xlinkHref="#checkmark"></use>
                                                </svg>
                                            </div>
                                        </label>
                                    </li>
                                    <li className="table__header-item">
                                        <span className="table__header-item-text">2353474</span>
                                    </li>
                                    <li className="table__header-item">
                                        <span className="table__header-item-text">12.03.2021, 05:15</span>
                                    </li>
                                    <li className="table__header-item">
                                        <svg className="table__header-icon table__header-icon_orange">
                                            <use xlinkHref="#dot"></use>
                                        </svg>
                                        <span className="table__header-item-text">Новый</span>
                                    </li>
                                    <li className="table__header-item">
                                        <span className="table__header-item-text">2</span>
                                    </li>
                                    <li className="table__header-item">
                                        <span className="table__header-item-text">98 003 ₽</span>
                                    </li>
                                    <li className="table__header-item">
                                        <span className="table__header-item-text">Филиппов Степан Васильевич</span>
                                    </li>
                                </ul>
                            </label>
                        </li>

                        <li className="table__body-item">
                            <label className="table__checkbox-control">
                                <ul className="table__body-item-row">
                                    <li className="table__header-item">
                                        <label className="table__checkbox-control">
                                            <div className="table__checkbox-group">
                                                <input type="checkbox" className="table__checkbox" />
                                                <svg className="table__header-icon">
                                                    <use xlinkHref="#checkmark"></use>
                                                </svg>
                                            </div>
                                        </label>
                                    </li>
                                    <li className="table__header-item">
                                        <span className="table__header-item-text">1103397</span>
                                    </li>
                                    <li className="table__header-item">
                                        <span className="table__header-item-text">03.02.2021, 08:04</span>
                                    </li>
                                    <li className="table__header-item">
                                        <svg className="table__header-icon table__header-icon_blue">
                                            <use xlinkHref="#dot"></use>
                                        </svg>
                                        <span className="table__header-item-text">Расчет</span>
                                    </li>
                                    <li className="table__header-item">
                                        <span className="table__header-item-text">5</span>
                                    </li>
                                    <li className="table__header-item">
                                        <span className="table__header-item-text">3 800 ₽</span>
                                    </li>
                                    <li className="table__header-item">
                                        <span className="table__header-item-text">Тихонова Алина Давидовна</span>
                                    </li>
                                </ul>
                            </label>
                        </li>

                        <li className="table__body-item">
                            <label className="table__checkbox-control">
                                <ul className="table__body-item-row">
                                    <li className="table__header-item">
                                        <label className="table__checkbox-control">
                                            <div className="table__checkbox-group">
                                                <input type="checkbox" className="table__checkbox" />
                                                <svg className="table__header-icon">
                                                    <use xlinkHref="#checkmark"></use>
                                                </svg>
                                            </div>
                                        </label>
                                    </li>
                                    <li className="table__header-item">
                                        <span className="table__header-item-text">6924662</span>
                                    </li>
                                    <li className="table__header-item">
                                        <span className="table__header-item-text">21.01.2021, 13:32</span>
                                    </li>
                                    <li className="table__header-item">
                                        <svg className="table__header-icon table__header-icon_green">
                                            <use xlinkHref="#checkmark"></use>
                                        </svg>
                                        <span className="table__header-item-text table__header-item-text_green">Выполнен</span>
                                    </li>
                                    <li className="table__header-item">
                                        <span className="table__header-item-text">1</span>
                                    </li>
                                    <li className="table__header-item">
                                        <span className="table__header-item-text">5 700 ₽</span>
                                    </li>
                                    <li className="table__header-item">
                                        <span className="table__header-item-text">Александрова Юлия Никитична</span>
                                    </li>
                                </ul>
                        </label>
                        </li>

                        <li className="table__body-item">
                            <label className="table__checkbox-control">
                                <ul className="table__body-item-row">
                                    <li className="table__header-item">
                                        <label className="table__checkbox-control">
                                            <div className="table__checkbox-group">
                                                <input type="checkbox" className="table__checkbox" />
                                                <svg className="table__header-icon">
                                                    <use xlinkHref="#checkmark"></use>
                                                </svg>
                                            </div>
                                        </label>
                                    </li>
                                    <li className="table__header-item">
                                        <span className="table__header-item-text">2200086</span>
                                    </li>
                                    <li className="table__header-item">
                                        <span className="table__header-item-text">19.01.2021, 10:28</span>
                                    </li>
                                    <li className="table__header-item table__header-item_half-transparent">
                                        <svg className="table__header-icon table__header-icon_black ">
                                            <use xlinkHref="#abort"></use>
                                        </svg>
                                        <span className="table__header-item-text">Отменен</span>
                                    </li>
                                    <li className="table__header-item">
                                        <span className="table__header-item-text">–</span>
                                    </li>
                                    <li className="table__header-item">
                                        <span className="table__header-item-text">–</span>
                                    </li>
                                    <li className="table__header-item">
                                        <span className="table__header-item-text">Андрей</span>
                                    </li>
                                </ul>
                            </label>
                        </li>

                        <li className="table__body-item">
                            <label className="table__checkbox-control">
                                <ul className="table__body-item-row">
                                    <li className="table__header-item">
                                        <label className="table__checkbox-control">
                                            <div className="table__checkbox-group">
                                                <input type="checkbox" className="table__checkbox" />
                                                <svg className="table__header-icon">
                                                    <use xlinkHref="#checkmark"></use>
                                                </svg>
                                            </div>
                                        </label>
                                    </li>
                                    <li className="table__header-item">
                                        <span className="table__header-item-text">2842064</span>
                                    </li>
                                    <li className="table__header-item">
                                        <span className="table__header-item-text">04.01.2021, 12:12</span>
                                    </li>
                                    <li className="table__header-item">
                                        <svg className="table__header-icon table__header-icon_orange">
                                            <use xlinkHref="#dot"></use>
                                        </svg>
                                        <span className="table__header-item-text">Отложен</span>
                                    </li>
                                    <li className="table__header-item">
                                        <span className="table__header-item-text">1</span>
                                    </li>
                                    <li className="table__header-item">
                                        <span className="table__header-item-text">20 500 ₽</span>
                                    </li>
                                    <li className="table__header-item">
                                        <span className="table__header-item-text">Судакова Анастасия Ильинична</span>
                                    </li>
                                </ul>
                            </label>
                        </li>

                        <li className="table__body-item">
                            <label className="table__checkbox-control">
                                <ul className="table__body-item-row">
                                    <li className="table__header-item">
                                        <label className="table__checkbox-control">
                                            <div className="table__checkbox-group">
                                                <input type="checkbox" className="table__checkbox" />
                                                <svg className="table__header-icon">
                                                    <use xlinkHref="#checkmark"></use>
                                                </svg>
                                            </div>
                                        </label>
                                    </li>
                                    <li className="table__header-item">
                                        <span className="table__header-item-text">1730071</span>
                                    </li>
                                    <li className="table__header-item">
                                        <span className="table__header-item-text">17.12.2020, 22:45</span>
                                    </li>
                                    <li className="table__header-item">
                                        <svg className="table__header-icon table__header-icon_green">
                                            <use xlinkHref="#checkmark"></use>
                                        </svg>
                                        <span className="table__header-item-text table__header-item-text_green">Выполнен</span>
                                    </li>
                                    <li className="table__header-item">
                                        <span className="table__header-item-text">1</span>
                                    </li>
                                    <li className="table__header-item">
                                        <span className="table__header-item-text">1 399 ₽</span>
                                    </li>
                                    <li className="table__header-item">
                                        <span className="table__header-item-text">Зверева Арина Николаевна</span>
                                    </li>
                                </ul>
                            </label>
                        </li>

                        <li className="table__body-item">
                            <label className="table__checkbox-control">
                                <ul className="table__body-item-row">
                                    <li className="table__header-item">
                                        <label className="table__checkbox-control">
                                            <div className="table__checkbox-group">
                                                <input type="checkbox" className="table__checkbox" />
                                                <svg className="table__header-icon">
                                                    <use xlinkHref="#checkmark"></use>
                                                </svg>
                                            </div>
                                        </label>
                                    </li>
                                    <li className="table__header-item">
                                        <span className="table__header-item-text">7987376</span>
                                    </li>
                                    <li className="table__header-item">
                                        <span className="table__header-item-text">07.12.2020, 08:57</span>
                                    </li>
                                    <li className="table__header-item">
                                        <svg className="table__header-icon table__header-icon_green">
                                            <use xlinkHref="#checkmark"></use>
                                        </svg>
                                        <span className="table__header-item-text table__header-item-text_green">Выполнен</span>
                                    </li>
                                    <li className="table__header-item">
                                        <span className="table__header-item-text">3</span>
                                    </li>
                                    <li className="table__header-item">
                                        <span className="table__header-item-text">117 810 ₽</span>
                                    </li>
                                    <li className="table__header-item">
                                        <span className="table__header-item-text">Карташов Максим Кириллович</span>
                                    </li>
                                </ul>
                            </label>
                        </li>

                        <li className="table__body-item">
                            <label className="table__checkbox-control">
                                <ul className="table__body-item-row">
                                    <li className="table__header-item">
                                        <label className="table__checkbox-control">
                                            <div className="table__checkbox-group">
                                                <input type="checkbox" className="table__checkbox" />
                                                <svg className="table__header-icon">
                                                    <use xlinkHref="#checkmark"></use>
                                                </svg>
                                            </div>
                                        </label>
                                    </li>
                                    <li className="table__header-item">
                                        <span className="table__header-item-text">1373265</span>
                                    </li>
                                    <li className="table__header-item">
                                        <span className="table__header-item-text">15.11.2020, 14:26</span>
                                    </li>
                                    <li className="table__header-item">
                                        <svg className="table__header-icon table__header-icon_green">
                                            <use xlinkHref="#checkmark"></use>
                                        </svg>
                                        <span className="table__header-item-text table__header-item-text_green">Выполнен</span>
                                    </li>
                                    <li className="table__header-item">
                                        <span className="table__header-item-text">1</span>
                                    </li>
                                    <li className="table__header-item">
                                        <span className="table__header-item-text">17 008 ₽</span>
                                    </li>
                                    <li className="table__header-item">
                                        <span className="table__header-item-text">Васильев Вадим Даниилович</span>
                                    </li>
                                </ul>
                            </label>
                        </li>

                        <li className="table__body-item">
                            <label className="table__checkbox-control">
                                <ul className="table__body-item-row">
                                    <li className="table__header-item">
                                        <label className="table__checkbox-control">
                                            <div className="table__checkbox-group">
                                                <input type="checkbox" className="table__checkbox" />
                                                <svg className="table__header-icon">
                                                    <use xlinkHref="#checkmark"></use>
                                                </svg>
                                            </div>
                                        </label>
                                    </li>
                                    <li className="table__header-item">
                                        <span className="table__header-item-text">1311100</span>
                                    </li>
                                    <li className="table__header-item">
                                        <span className="table__header-item-text">07.11.2020, 18:52</span>
                                    </li>
                                    <li className="table__header-item table__header-item_half-transparent">
                                        <svg className="table__header-icon table__header-icon_black ">
                                            <use xlinkHref="#abort"></use>
                                        </svg>
                                        <span className="table__header-item-text">Отменен</span>
                                    </li>
                                    <li className="table__header-item">
                                        <span className="table__header-item-text">–</span>
                                    </li>
                                    <li className="table__header-item">
                                        <span className="table__header-item-text">–</span>
                                    </li>
                                    <li className="table__header-item">
                                        <span className="table__header-item-text">София</span>
                                    </li>
                                </ul>
                            </label>
                        </li>
            
                    </ul>
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
