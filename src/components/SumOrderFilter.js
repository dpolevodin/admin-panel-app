import Button from "./Button";
import Input from "./Input";


function SumOrderFilter () {

    const mainComponentWrapperClass = "filter__input"
    const sumFilterPlaceholder = "₽"
    const sumFilterSvgName = "incorrect"
    const labelClassName = "filter__input-control"
    const buttonClassName = "filter__input-button"
    const inputClassName = "filter__input-area"
    const inputWrapperClassName = "filter__input-field filter__input-field_empty filter__input-field_short"
    const filterTitleClass = "filter__input-title"

    return (
        <div className={mainComponentWrapperClass}>
            <label className={labelClassName}>
                <span className={filterTitleClass}>Сумма заказа</span>
                <div className={inputWrapperClassName}>
                    <Input className={inputClassName} placeholder={sumFilterPlaceholder} value="5000" />
                    <Button className={buttonClassName} svgName={sumFilterSvgName} />
                </div>
            </label>

            <label className={labelClassName}>
                <div className={inputWrapperClassName}>
                    <Input className={inputClassName} placeholder={sumFilterPlaceholder} />
                    <Button className={buttonClassName} svgName={sumFilterSvgName} />
                </div>
            </label>
        </div>
    )
}

export default SumOrderFilter;