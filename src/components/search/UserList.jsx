import { Link } from "react-router-dom";
import BasicProfileImg from "../common/BasicProfileImg";
import "./UserList.css";

function UserList(props) {
    const searchUser = props;
    const userId = searchUser.accountname.slice(2);

    return (
        <Link to={`/profile/${userId}`}>
            <li className="userList" key={props.key}>
                <BasicProfileImg size="md" src={props.image} />
                <div className="userInfo">
                    <p className="username">{props.username}</p>
                    <p className="accountname">{props.accountname}</p>
                </div>
            </li>
        </Link>
    );
}
export default UserList;