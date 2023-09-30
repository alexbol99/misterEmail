import {Route, HashRouter as Router, Routes} from "react-router-dom";

import Home from './pages/Home/Home.jsx';
import AppHeader from "./components/AppHeader/AppHeader.jsx";
import AsideMenu from "./components/AsideMenu/AsideMenu.jsx";
import EmailIndex from "./pages/EmailIndex/EmailIndex.jsx";
import EmailCompose from "./pages/EmailCompose/EmailCompose.jsx";
import EmailDetails from "./pages/EmailDetails/EmailDetails.jsx";
import UserMessage from "./components/UserMessage/UserMessage.jsx";

import styles from "./App.module.css"

export function App() {

    function toggleExpandMenu() {
        // setAsideMenuExpanded(prevExpanded => !prevExpanded)
    }

    return (
        <Router>
            <div className={`${styles.appLayout} ${styles.asideMenuExpandStyle}`}>
                <AppHeader toggleExpandMenu={toggleExpandMenu} />
                <AsideMenu />
                <main className={styles.mainPanel}>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/:pagename/:mailId" element={<EmailDetails/>} />
                        <Route path="/:pagename" element={<EmailIndex/>} >
                            {/* EmailCompose component checks search parameter ?compose=new or =mailId */}
                            <Route path="/:pagename" element={<EmailCompose />} />
                         </Route>
                        <Route path="*" element={<PageNotFound/>}/>
                    </Routes>
                </main>
            </div>
            <UserMessage />
        </Router>
    )
}

function PageNotFound() {
    return (
        <div>
            <h2>404 Page not found</h2>
        </div>
    );
}



