import TapMenu from "../components/TapMenu";
import "./HomePage.css";

export default function HomePage() {
    return (
        <>
            <header className="topMainNav">
                <h1>연두마켓 피드</h1>
                <button />
            </header>
            <main className="homeContentNonFeed">
                <div></div>
                <p>유저를 검색해 팔로우 해보세요!</p>
                <button>검색하기</button>
            </main>
            <TapMenu />
        </>
    );
}