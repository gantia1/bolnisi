import {Modal} from "antd";
import {ReactComponent as Success} from "../../assets/images/svg/success-popup.svg";
import translation from "../../language/useTranslation";

function Index(props) {
    const {trans} = translation();
    return (
        <Modal className="success-popup" open={props.open} onCancel={props.close} footer={false} closable={false}>

            <div className="success-popup">
                <div className="success-popup-content-connect">
                    <div className="success-popup-svg"></div>
                    <div className="success-popup-text">
                        <span><Success/></span>
                        <span>{trans("messageSent")}</span>
                    </div>
                    <div className="success-popup-button" onClick={props.close}><span>{trans("close")}</span></div>
                </div>
            </div>
        </Modal>
    );
}

export default Index;