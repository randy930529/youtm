import styles from "./App.module.css";
import React, { useState } from "react";
import 'bulma';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandigPage } from "./pages/LandigPage";
import NavbarBurger from "./components/NavbarBurger";
import MenuPanel from "./components/MenuPanel";

export function App() {
    const [isActive, setIsActive] = useState(false);

    return (
        <Router>
            <header>
                <Link to="/">
                    <h1 className={styles.title}>YouTM</h1>
                </Link>
                <NavbarBurger
                    isActive={isActive}
                    setIsActive={setIsActive}
                />        
            </header>
            <main>
            <MenuPanel 
                isActive={isActive}
                setIsActive={setIsActive}
            />
            <Routes>
                <Route exact path="/movies/:movieId" element={<MovieDetails />} />
                <Route path="/" element={<LandigPage />} />
            </Routes>
            </main>
        </Router>
    );
}