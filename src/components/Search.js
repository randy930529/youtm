import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";

export function Search() {
    const query = useQuery();
    const search = query.get("search");

    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox} action="">
                <input 
                    className={`${styles.searchInput} input is-rounded is-primary`} 
                    type="text" 
                    value={search}
                    placeholder="Título"
                    aria-label="Search Movies" 
                    onChange={(e) => {
                        const value = e.target.value;
                        history("/?search=" + value);
                    }} 
                    name="" 
                    id="" 
                />
                <button className={styles.searchButton}>
                <FaSearch size={20} />
                </button>
            </div>
        </form>
    )
}
