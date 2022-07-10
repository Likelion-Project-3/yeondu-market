import "./TopChatNav.css";
import { useHistory } from "react-router-dom";

export default function TopChatNav(props) {
    const history = useHistory();

    return (
        <nav className="topChatNav">
            <button className="prevBtn" onClick={history.goBack}></button>
            <h2 className="chatSender">애월읍 위니브 감귤농장</h2>
            <button className="moreBtn"></button>
        </nav>
    );
}
