import "./UserList.css";

const moveProfile = () => {
    window.location.href = "/myprofile/:accountname";
};

function UserList(props) {
    return (
        <li className="userList" key={props.key} onClick={moveProfile}>
            <img src={props.image} alt={props.alt} className="userProfileImg" />
            <div className="userInfo">
                <p className="username">{props.username}</p>
                <p className="accountname">{props.accountname}</p>
            </div>
        </li>
    );
}
export default UserList;
