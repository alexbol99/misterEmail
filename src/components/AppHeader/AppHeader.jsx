import {useSearchParams} from "react-router-dom";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import styles from "./AppHeader.module.css";

function AppHeader({toggleExpandMenu}) {
    const [searchParams, setSearchParams] = useSearchParams()

    function onContextSearchChange(event) {
        const currentSearchText = event.target.value
        if (searchParams.get("text") === null) {
            setSearchParams(prev =>
                ([...prev.entries(), ["text", currentSearchText]]))
        }
        else {
            setSearchParams(prev => {
                return [...prev.entries()]
                    .map( ([key,value]) =>
                        key === "text" ? [key, currentSearchText] : [key,value])
            })
        }
    }

    return (
        <header className={styles.appHeader}>
            <section className={styles.logoSection}>
                <button className={styles.mainMenuButton}
                        title="Shrink/expand menu"
                        onClick={toggleExpandMenu}
                >
                    <FontAwesomeIcon icon={faBars}/>
                </button>
                {/*<NavLink to={pathname}>*/}
                    <h1 className={styles.logo}>MisterEmail</h1>
                {/*</NavLink>*/}
            </section>
            <input type="text"
                   className={styles.searchBox}
                   placeholder="Start typing to search ..."
                   value={searchParams.get("text") || ""}
                   onChange={onContextSearchChange}
            />
            <section className={styles.breadcrumbs}>
                <a href="#">Help</a>
                <a href="#">Settings</a>
                <a href="#">User</a>
            </section>
        </header>
    );
}

export default AppHeader;