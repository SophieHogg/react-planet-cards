import React from "react";
import styles from "./Card.module.scss";

const Card = ({
    image,
    planetName,
    distanceFromSun,
    diameterInKm,
    numberOfMoons,
    lengthOfYear,
}) => {
    return (
        <div className={styles.Card}>
            <h1 className={styles.Card__header}>{planetName}</h1>
            <img src={image} alt={planetName} className={styles.Card__image} />
            <p>Distance from Sun: {distanceFromSun}</p>
            <p>Diameter in kilometres: {diameterInKm}</p>
            <p>Number of Moons: {numberOfMoons}</p>
            <p>Year length: {lengthOfYear}</p>
        </div>
    );
};

export default Card;
