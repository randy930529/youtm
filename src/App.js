import React from 'react';
import styles from './App.module.css';
import 'bulma';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <Router>
            <header>
                <Link to="/"><h1 className={styles.Title}>YouTM</h1></Link>
            </header>
            <main>
            <Routes>
                <Route exact path="/movies/:movieId" />
                <Route path="/" />
            </Routes>
            </main>
        </Router>
  );
}

export default App;
