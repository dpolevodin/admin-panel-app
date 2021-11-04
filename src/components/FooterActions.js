import FooterOrdersSelected from '../components/FooterOrdersSelected'
import Button from './Button';


function FooterActions () {
    return (
        <form className="table__footer-action">
            <FooterOrdersSelected count={5} />
            <Button className={"table__footer-button table__footer-button_blue"} buttonText={"Изменить статус"} svgName={"pencil"}/>
            <Button className={"table__footer-button table__footer-button_red"} buttonText={"Удалить"} svgName={"bin"}/>
        </form>
    )
}

export default FooterActions;

