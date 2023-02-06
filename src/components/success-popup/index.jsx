import {Modal} from "antd";
import {ReactComponent as Success} from "../../assets/images/svg/success-popup.svg";
import {useTranslation} from "react-i18next";

function Index(props) {
    const {t} = useTranslation();
    return (
        <Modal className="success-popup" open={props.open} onCancel={props.close} footer={false} closable={false}>

            <div className="success-popup">
                <div className="success-popup-content-connect">
                    <div className="success-popup-svg"></div>
                    <div className="success-popup-text">
                        <span><Success/></span>
                        <span>{t("messageSent")}</span>
                    </div>
                    <div className="success-popup-button" onClick={props.close}><span>{t("close")}</span></div>
                </div>
            </div>
        </Modal>
    );
}

export default Index;