import modalForm from "./css/ModalForm.module.css"
import Button from "../Common/Button"

const inputIconName = "incorrect"

const ModalForm = () => {

    return (
        <div className={modalForm._}>
            <div className={modalForm.form}>
                <header className={modalForm.header}>
                    <div className={modalForm.header__title}>Заявка #2353474</div>
                    <Button className={modalForm.button} svgName={inputIconName} iconClassName={modalForm.header__icon}/>
                </header>
                <div className={modalForm.table}>test</div>
                <footer className={modalForm.footer}></footer>
            </div>
        </div>
    )
}

export default ModalForm