import '../src/css/reset.css';
import '../src/css/style.css';
import SvgElement from './components/Svg';
import SvgSprite from './components/SvgSprite';
import PageHeader from './components/PageHeader';


function App() {
  return (
    <body>
    <div className="main-wrapper">
        <PageHeader />
        {/* <div className="page-header">
            <h1 className="page-header__text">Список заказов</h1>
            <button className="page-header__button page-header__button_transparent"> */}
                {/* <svg className="page-header__icon">
                    <use xlinkHref="#sun"></use>
                </svg> */}
                {/* <SvgElement svgName='sun' className="page-header__icon"/> */}
                {/* <span className="page-header__button__text">Cветлая тема</span>
            </button>
        </div> */}
        <div className="filter">
            <div className="filter__wrapper">
                <div className="filter__group">
                    <form className="filter__form">
                        <label className="filter__searchbar-group">
                            <div className="filter__searchbar-field filter__searchbar-field_empty">
                                <div className="filter__searchbar-search-area">
                                    {/* <svg className="filter__searchbar-icon filter__searchbar-icon_active">
                                        <use xlinkHref="#search"></use>
                                    </svg> */}
                                    <SvgElement svgName='search' className="filter__searchbar-icon filter__searchbar-icon_active" />
                                    <input className="filter__searchbar-area" placeholder="Номер заказа или ФИО" />  
                                </div>
                                <button className="filter__searchbar-button">
                                    <svg className="filter__searchbar-icon">
                                        <use xlinkHref="#incorrect"></use>
                                    </svg>
                                </button>
                            </div>
                        </label>

                        <button className="filter-button">
                            <svg className="filter-button__icon">
                                <use xlinkHref="#filter"></use>
                            </svg>
                            <span className="filter-button__text">Фильтры</span>
                        </button>

                        <button className="filter-button filter-button_no-icon">
                            <span className="filter-button__text">Сбросить фильтры</span>
                        </button>
                    </form>

                    <div className="filter__loader">
                        <svg className="filter__loader-icon">
                            <use xlinkHref="#refresh"></use>
                        </svg>
                        <span className="filter__loader-text">Загрузка</span>
                    </div>
                </div>
            </div>
            <div className="filter__wrapper">
                <form className="filter__form">
                    <div className="filter__input">
                        <label className="filter__input-control">
                            <span className="filter__input-title">Дата оформления</span>
                            <div className="filter__input-field filter__input-field_empty">
                                <input className="filter__input-area" placeholder="dd.mm.dddd" value="20.01.2021" />
                                <button className="filter__input-button">
                                    <svg className="filter__input-icon filter__input-icon_incorrect">
                                        <use xlinkHref="#incorrect"></use>
                                    </svg>
                                </button>
                            </div>
                        </label>  

                        <label className="filter__input-control">
                            <div className="filter__input-field filter__input-field_empty">
                                <input className="filter__input-area" placeholder="dd.mm.dddd" />
                                <button className="filter__input-button">
                                    <svg className="filter__input-icon">
                                        <use xlinkHref="#incorrect"></use>
                                    </svg>
                                </button>
                            </div>
                        </label>
                    </div>

                    <div className="filter__input">
                        <ul className="filter__dropdown-list">
    
                            <li className="filter__dropdown-item">
                                <label className="filter__dropdown-control">
                                    <div className="filter__dropdown-checkbox-group">
                                        <input type="checkbox" className="filter__dropdown-checkbox" />
                                        <svg className="filter__dropdown-icon">
                                            <use xlinkHref="#checkmark"></use>
                                        </svg>
                                    </div>
                                    <span className="filter__dropdown-item-title">Новый</span>      
                                </label>
                            </li>

                            <li className="filter__dropdown-item">
                                <label className="filter__dropdown-control">
                                    <div className="filter__dropdown-checkbox-group">
                                        <input type="checkbox" className="filter__dropdown-checkbox" />
                                        <svg className="filter__dropdown-icon">
                                            <use xlinkHref="#checkmark"></use>
                                        </svg>
                                    </div>
                                    <span className="filter__dropdown-item-title">Расчет</span>      
                                </label>
                            </li>

                            <li className="filter__dropdown-item">
                                <label className="filter__dropdown-control">
                                    <div className="filter__dropdown-checkbox-group">
                                        <input type="checkbox" className="filter__dropdown-checkbox" />
                                        <svg className="filter__dropdown-icon">
                                            <use xlinkHref="#checkmark"></use>
                                        </svg>
                                    </div>
                                    <span className="filter__dropdown-item-title">Подтвержден</span>      
                                </label>
                            </li>

                            <li className="filter__dropdown-item">
                                <label className="filter__dropdown-control">
                                    <div className="filter__dropdown-checkbox-group">
                                        <input type="checkbox" className="filter__dropdown-checkbox" />
                                        <svg className="filter__dropdown-icon">
                                            <use xlinkHref="#checkmark"></use>
                                        </svg>
                                    </div>
                                    <span className="filter__dropdown-item-title">Отложен</span>      
                                </label>
                            </li>

                            <li className="filter__dropdown-item">
                                <label className="filter__dropdown-control">
                                    <div className="filter__dropdown-checkbox-group">
                                        <input type="checkbox" className="filter__dropdown-checkbox" />
                                        <svg className="filter__dropdown-icon">
                                            <use xlinkHref="#checkmark"></use>
                                        </svg>
                                    </div>
                                    <span className="filter__dropdown-item-title">Выполнен</span>      
                                </label>
                            </li>

                            <li className="filter__dropdown-item">
                                <label className="filter__dropdown-control">
                                    <div className="filter__dropdown-checkbox-group">
                                        <input type="checkbox" className="filter__dropdown-checkbox" />
                                        <svg className="filter__dropdown-icon">
                                            <use xlinkHref="#checkmark"></use>
                                        </svg>
                                    </div>
                                    <span className="filter__dropdown-item-title">Отменен</span>      
                                </label>
                            </li>                             
                        </ul>
                        <label className="filter__input-control">
                            <span className="filter__input-title">Статус заказа</span>
                            <div className="filter__input-field filter__input-field_empty filter__input-field_long">
                                <input className="filter__input-area" placeholder="Выберите статус заказа" value="Любой" />
                                <button className="filter__input-button">
                                    <svg className="filter__input-icon filter__input-icon_drop">
                                        <use xlinkHref="#v_arrow"></use>
                                    </svg>
                                </button>
                            </div>
                        </label>
                    </div>

                    <div className="filter__input">
                        <label className="filter__input-control">
                            <span className="filter__input-title">Сумма заказа</span>
                            <div className="filter__input-field filter__input-field_empty filter__input-field_short">
                                <input className="filter__input-area" placeholder="" value="5000" />
                                <button className="filter__input-button">
                                    <svg className="filter__input-icon filter__input-icon_incorrect">
                                        <use xlinkHref="#incorrect"></use>
                                    </svg>
                                </button>
                            </div>
                        </label>  

                        <label className="filter__input-control">
                            <div className="filter__input-field filter__input-field_empty filter__input-field_short">
                                <input className="filter__input-area" placeholder="₽" />
                                <button className="filter__input-button">
                                    <svg className="filter__input-icon">
                                        <use xlinkHref="#incorrect"></use>
                                    </svg>
                                </button>
                            </div>
                        </label>
                    </div>

                    <button className="filter-button filter-button_no-icon filter-button_short">
                        <span className="filter-button__text">Применить</span>
                    </button>

                </form>
            </div>
        </div>
        <div className="table">
            <div className="table__header">
                <ul className="table__header-list">
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
                        <span className="table__header-item-text">#</span>
                    </li>
                    <li className="table__header-item">
                        <span className="table__header-item-text">Дата</span>
                        <svg className="table__header-icon table__header-icon_active">
                            <use xlinkHref="#v_arrow"></use>
                        </svg>
                    </li>
                    <li className="table__header-item">
                        <span className="table__header-item-text">Статус</span>
                        <svg className="table__header-icon table__header-icon_active">
                            <use xlinkHref="#v_arrow"></use>
                        </svg>
                    </li>
                    <li className="table__header-item">
                        <span className="table__header-item-text">Позиций</span>
                        <svg className="table__header-icon table__header-icon_active">
                            <use xlinkHref="#v_arrow"></use>
                        </svg>
                    </li>
                    <li className="table__header-item">
                        <span className="table__header-item-text">Сумма</span>
                        <svg className="table__header-icon table__header-icon_active">
                            <use xlinkHref="#v_arrow"></use>
                        </svg>
                    </li>
                    <li className="table__header-item">
                        <span className="table__header-item-text">ФИО покупателя</span>
                    </li>
                </ul>
            </div>
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
                <form className="table__footer-dropdown">
                    <span className="table__dropdown-title">Удалить n записей?</span>
                    <button className="table__dropdown-button table__dropdown-button_transparent">
                        <span className="table__dropdown-button-text">Удалить</span>
                    </button>
                    <button className="table__dropdown-button">
                        <span className="table__dropdown-button-text">Отмена</span>
                    </button>
                </form>

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
