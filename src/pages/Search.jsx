import "./Search.css"
import TapMenu from "../components/TapMenu";
import TopSearchNav from "../components/feed/TopSearchNav";

export default function Search() {
    return (
        <>
            <TopSearchNav />
            <main className="searchMain"></main>
            <TapMenu />
        </>
    );
}