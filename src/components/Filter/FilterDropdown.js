import Checkbox from '../Common/Checkbox'
import dropdown from './css/filter-dropdown.module.css'

const DropdownStatusesList = ['новый', 'расчет', 'подтвержден', 'отложен', 'выполнен', 'отменен']

const capitalizeFirstLetter = (string) => {
    return string[0].toUpperCase() + string.slice(1)
}

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
                        <span className={dropdown.title}>{capitalizeFirstLetter(element)}</span>      
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