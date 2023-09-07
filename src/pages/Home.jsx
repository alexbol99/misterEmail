import { Link } from "react-router-dom";

export function Home() {
    return (
        <main className="welcome">
            <div className="welcome-container">
                <h1>Welcome to MasterEmail</h1>
                {/*<button className="go-to-app-button">Go to App</button>*/}
                <div className="go-to-app-button">
                    <Link to="/inbox">Go to app</Link>
                </div>
            </div>
        </main>
    )
}
