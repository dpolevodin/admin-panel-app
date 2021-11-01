import SvgElement from '../components/SvgElement';
import Button from '../components/Button';
import Input from '../components/Input';


function Searchbar({labelClass, wrapperClass, inputAreaClass}) {
    return (
    <label className={labelClass}>
        <div className={wrapperClass}>
            <div className={inputAreaClass}>
                <SvgElement svgName='search' />
                <Input className="filter__searchbar-area" placeholder="Номер заказа или ФИО" />
            </div>
            <Button className="filter__searchbar-button" svgName="incorrect"/>
        </div>
    </label>
    )
}

export default Searchbar;