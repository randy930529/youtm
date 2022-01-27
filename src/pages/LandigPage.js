import { MoviesGrip } from "../components/MoviesGrip";
import { Search } from "../components/Search";
import { useDebounce } from "../hooks/useDebounce";
import { useQuery } from "../hooks/useQuery";

export function LandigPage() {
    const query = useQuery();
    const search = query.get("search");
    const debounceSearch = useDebounce(search, 300);
    return (
        <div>
            <Search />
            <MoviesGrip key={debounceSearch} search={debounceSearch} />
        </div>
    );
}