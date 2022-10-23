import planets from "./Planets";
const sortedPlanets = planets.sort(
    (planetA, planetB) => planetA.diameterInKm - planetB.diameterInKm
);

export default sortedPlanets;
