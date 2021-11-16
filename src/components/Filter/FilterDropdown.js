import Checkbox from '../Common/Checkbox'
import dropdown from './css/dropdown.module.css'

const DropdownStatusesList = ['Новый', 'Расчет', 'Подтвержден', 'Отложен', 'Выполнен', 'Отменен']

const FilterDropdown = ({
    className = dropdown._,
    isVisible,
    DropdownStatuses = DropdownStatusesList
}) => {
    const dropdownClass = isVisible ?  className : [className, dropdown.hidden].join(' ')

    const dropdownStatusRender = DropdownStatuses.map((element) => { return (
            <label className={dropdown.control} key={element}>
                <li className={dropdown.item}>
                        <Checkbox />
                        <span className={dropdown.title}>{element}</span>      
                </li>
            </label>
        )
        })

    return (
        <ul className={dropdownClass}>
            {dropdownStatusRender}
        </ul>
    )
}

export default FilterDropdown;