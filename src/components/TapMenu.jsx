import "./TapMenu.css";
// import { Link } from "react-router-dom";

export default function TapMenu() {
    return (
        <nav className="tapMenu">
            <ul>
                <li>
                    <button className="homeBtn">홈</button>
                </li>
                <li>
                    <button className="chatBtn">채팅</button>
                </li>
                <li>
                    <button className="postBtn">게시물 작성</button>
                </li>
                <li>
                    <button className="profileBtn">프로필</button>
                </li>
            </ul>
        </nav>
    );
}