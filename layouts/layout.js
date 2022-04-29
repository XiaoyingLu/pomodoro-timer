import Card from "../components/card"
import Footer from '../layouts/footer'
import Header from "./header"
import styles from "./layout.module.scss";

const Layout = () => {
    return (
    <div className={styles.layoutDiv}>
        <Header />
        <main className={`container-fluid ${styles.mainDiv}`}>
            <Card />
        </main>
        <Footer className="mt-auto bottom-0"/>
    </div>
    )
}

export default Layout