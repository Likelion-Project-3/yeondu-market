import { NavLink } from "react-router-dom";
import "./TapMenu.css";

function TapMenu() {
    return (
        <nav className="tapMenu">
            <ul>
                <li>
                    <NavLink
                        to="/home"
                        className="linkBtn homeBtn"
                        activeClassName="homeBtnActive"
                        activeStyle={{ color: "var(--main-font-color)" }}
                    >
                        홈
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/chat"
                        className="linkBtn chatBtn"
                        activeClassName="chatBtnActive"
                        activeStyle={{ color: "var(--main-font-color)" }}
                    >
                        채팅
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/post/upload" className="linkBtn postBtn">
                        게시물 작성
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/myprofile"
                        className="linkBtn profileBtn"
                        activeClassName="profileBtnActive"
                        activeStyle={{ color: "var(--main-font-color)" }}
                    >
                        프로필
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
export default TapMenu;