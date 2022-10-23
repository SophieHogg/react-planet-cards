import React from "react";
import Card from "../Card/Card";
import styles from "./CardContainer.module.scss";

const CardContainer = ({ planetData }) => {
    return (
        <div className={styles.Container}>
            <div className={styles.Container__grid}>
                {planetData.map((planet, index) => {
                    return (
                        <Card
                            image={planet.image}
                            planetName={planet.planetName}
                            distanceFromSun={planet.distanceFromSun}
                            diameterInKm={planet.diameterInKm}
                            numberOfMoons={planet.numberOfMoons}
                            lengthOfYear={planet.lengthOfYear}
                            key={index}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default CardContainer;
