import Checkbox from '../global/Checkbox'


function FilterDropdown ({className, placeholder}) {
    const FilterDropdownStatus = ['Новый', 'Расчет', 'Подтвержден', 'Отложен', 'Выполнен', 'Отменен']
    
    const FilterDropdownStatusRender = FilterDropdownStatus.map((element) => { return (
            <label className="filter__dropdown-control" key={FilterDropdownStatus.indexOf(element)}>
                <li className="filter__dropdown-item">
                        <Checkbox />
                        <span className="filter__dropdown-item-title">{element}</span>      
                </li>
            </label>
        )
        })

    return (
        <ul className="filter__dropdown-list">
            {FilterDropdownStatusRender}
        </ul>
    )
}

export default FilterDropdown;