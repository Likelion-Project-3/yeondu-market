import "../pages/style/Search.css";
import TopSearchNav from "../components/feed/TopSearchNav";
import TapMenu from "../components/common/TapMenu";

function Search() {
    return (
        <>
            <TopSearchNav />
            <main className="searchMain"></main>
            <TapMenu />
        </>
    );
}
export default Search;