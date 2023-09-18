import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export function Home() {
    return (
        <main className={styles.welcome}>
            <div className={styles.welcomeContainer}>
                <h1>Welcome to MisterEmail</h1>
                <div className={styles.goToAppButton}>
                    <Link to="/inbox">Go to app</Link>
                </div>
            </div>
        </main>
    )
}
