import styles from "./footer.module.scss";

const Footer = () => {
    return (
        <footer className={`mt-auto text-center py-4 ${styles.footer}`}>
            <h6 className={styles.text}>&copy; Pomodoro 2022. By Amber Lu</h6>    
        </footer>
    )
}

export default Footer