import React from "react";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <div className={styles.Header}>
            <div className={styles.Header__icon}>
                <FontAwesomeIcon
                    icon={faGlobe}
                    className={styles.Header__icon__FAicon}
                    size="4x"
                />
            </div>
            <div className={styles.Header__title}>
                <h1>Planets</h1>
            </div>
            <div className={styles.Header__icon}>
                <FontAwesomeIcon
                    icon={faGlobe}
                    className={styles.Header__icon__FAicon}
                    size="4x"
                />
            </div>
        </div>
    );
};

export default Header;
