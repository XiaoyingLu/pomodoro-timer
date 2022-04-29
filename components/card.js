import CountDown from "./countdown"
import CustomCountDown from "./customCountdown"
import styles from "./card.module.scss";

const Card = () => {
    return (
        <div className={`card d-flex flex-column justify-content-center align-items-center h-100 ${styles.cardDiv}`}>
            <div className="card-title">
                <ul className={`nav nav-pills nav-justified mb-3 ${styles.tabUl}`} id="pills-tab" role="tablist">
                    <li className={`nav-item ${styles.tabs}`} role="presentation">
                        <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Pomodoro</button>
                    </li>
                    <li className={`nav-item ${styles.tabs}`} role="presentation">
                        <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Break</button>
                    </li>
                    <li className={`nav-item ${styles.tabs}`} role="presentation">
                        <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Custom</button>
                    </li>
                </ul>
            </div>
            <div className={`card-body tab-content ${styles.cardBody}`} id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    <CountDown timer={25*60} />
                </div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <CountDown timer={5*60} />
                </div>
                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                    <CustomCountDown />
                </div>
            </div>
        </div>
    )
}

export default Card