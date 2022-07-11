import "../pages/style/Search.css";
import TopSearchNav from "../components/feed/TopSearchNav";
import TapMenu from "../components/common/TapMenu";

export default function Search() {
    return (
        <>
            <TopSearchNav />
            <main className="searchMain"></main>
            <TapMenu />
        </>
    );
}
