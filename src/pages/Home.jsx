import TapMenu from "../components/common/TapMenu";
import "../pages/style/Home.css";
import { useState } from "react";
import Search from "./Search";

function Home() {
    const token = localStorage.getItem("token");
    const [search, setSearch] = useState(false);

    const goSearch = () => {
        setSearch(true);
    };

    return (
        <>
            {search ? (
                <Search />
            ) : (
                <>
                    <header className="topMainNav">
                        <h1>연두마켓 피드</h1>
                        <button type="button" onClick={goSearch} />
                    </header>
                    <main className="homeContentNonFeed">
                        <div />
                        <p>유저를 검색해 팔로우 해보세요!</p>
                        <button
                            type="button"
                            className="searchBtn"
                            onClick={goSearch}
                        >
                            검색하기
                        </button>
                    </main>
                    <TapMenu />
                </>
            )}
        </>
    );
}
export default Home;
