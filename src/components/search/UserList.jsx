import { Link } from "react-router-dom";
import defaultProfile from "../../assets/basic-profile-pea.png";
import "./UserList.css";

function UserList(props) {
    const searchUser = props;
    const userId = searchUser.accountname.slice(2);

    const onErrorImg = (e) => {
        e.target.src = defaultProfile;
    };

    return (
        <Link to={`/myprofile/${userId}`}>
            <li className="userList" key={props.key}>
                <img
                    src={props.image}
                    alt={props.alt}
                    onError={onErrorImg}
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
