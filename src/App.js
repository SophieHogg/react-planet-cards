import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CardContainer from "./components/CardContainer/CardContainer";
import sortedPlanets from "./resources/SortedPlanets";

function App() {
    return (
        <div className={styles.body}>
            <Header />
            <CardContainer planetData={sortedPlanets} />
            <Footer />
        </div>
    );
}

export default App;
