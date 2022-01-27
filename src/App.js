import styles from "./App.module.css";
import React from "react";
import 'bulma';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandigPage } from "./pages/LandigPage";

export function App() {
    return (
        <Router>
            <header>
                <Link to="/"><h1 className={styles.title}>YouTM</h1></Link>
            </header>
            <main>
            <Routes>
                <Route exact path="/movies/:movieId" element={<MovieDetails />} />
                <Route path="/" element={<LandigPage />} />
            </Routes>
            </main>
        </Router>
    );
}