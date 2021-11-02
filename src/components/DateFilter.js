import Button from "../components/Button";
import Input from "../components/Input";


function DateFilter () {

    const mainComponentWrapperClass = "filter__input"
    const dateFilterPlaceholder = "dd.mm.dddd"
    const dateFilterSvgName = "incorrect"
    const labelClassName = "filter__input-control"
    const buttonClassName = "filter__input-button"
    const inputClassName = "filter__input-area"
    const inputWrapperClassName = "filter__input-field filter__input-field_empty"
    const filterTitleClass = "filter__input-title"

    return (
        <div className={mainComponentWrapperClass}>
            <label className={labelClassName}>
                <span className={filterTitleClass}>Дата оформления</span>
                <div className={inputWrapperClassName}>
                    <Input className={inputClassName} placeholder={dateFilterPlaceholder} value="20.01.2021" />
                    <Button className={buttonClassName} svgName={dateFilterSvgName} />
                </div>
            </label>

            <label className={labelClassName}>
                <div className={inputWrapperClassName}>
                    <Input className={inputClassName} placeholder={dateFilterPlaceholder    } />
                    <Button className={buttonClassName} svgName={dateFilterSvgName} />
                </div>
            </label>
        </div>
    )
}

export default DateFilter;