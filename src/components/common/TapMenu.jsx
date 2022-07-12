import { Link } from "react-router-dom";
import "./TapMenu.css";

function TapMenu() {
    return (
        <nav className="tapMenu">
            <ul>
                <li>
                    <Link to="/home" className="linkBtn homeBtn">
                        홈
                    </Link>
                </li>
                <li>
                    <Link to="/chat" className="linkBtn chatBtn">
                        채팅
                    </Link>
                </li>
                <li>
                    <Link to="/post/upload" className="linkBtn postBtn">
                        게시물 작성
                    </Link>
                </li>
                <li>
                    <Link to="/myprofile" className="linkBtn profileBtn">
                        프로필
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
export default TapMenu;