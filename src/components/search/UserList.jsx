import { Link } from "react-router-dom";
import "./UserList.css";

function UserList(props) {
    const searchUser = props;
    const userId = searchUser.accountname.slice(2);

    return (
        <Link to={`/myprofile/${userId}`}>
            <li className="userList" key={props.key}>
                <img
                    src={props.image}
                    alt={props.alt}
                    className="userProfileImg"
                />
                <div className="userInfo">
                    <p className="username">{props.username}</p>
                    <p className="accountname">{props.accountname}</p>
                </div>
            </li>
        </Link>
    );
}
export default UserList;
