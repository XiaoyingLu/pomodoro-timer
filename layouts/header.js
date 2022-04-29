import styles from "./header.module.scss";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className={`container mx-4 ${styles.headerDiv}`}>
                <a className={`navbar-brand ${styles.title}`} href="#">Pomodoro</a>
            </div>
        </nav>
    )
}

export default Header