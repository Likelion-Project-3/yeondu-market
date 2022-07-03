import "./ChatItem.css";

export default function ChatItem(props) {
    return (
        <li className="chatItem">
            <div className="chatItemImg"></div>
            <div className="chatContent">
                <strong>{props.sender}</strong>
                <p>{props.content}</p>
            </div>
            <span className="chatDate">{props.date}</span>
        </li>
    );
}
