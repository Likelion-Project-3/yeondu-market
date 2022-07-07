import { Link } from "react-router-dom";
import "./TapMenu.css";
// import { Link } from "react-router-dom";

export default function TapMenu() {
    return (
        <nav className="tapMenu">
            <ul>
                <li>
                    <Link to="/home" className="linkbtn homeBtn">
                        홈
                    </Link>
                </li>
                <li>
                    <Link to="/chat" className="linkbtn chatBtn">
                        채팅
                    </Link>
                </li>
                <li>
                    <Link to="/post/upload" className="linkbtn postBtn">
                        게시물 작성
                    </Link>
                </li>
                <li>
                    <Link to="/myprofile" className="linkbtn profileBtn">
                        프로필
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
