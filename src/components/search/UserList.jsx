import { Link } from 'react-router-dom';
import BasicProfileImg from '../common/BasicProfileImg';
import './UserList.css';

function UserList(props) {
    const searchUser = props;
    const userId = searchUser.accountname.slice(2);
    const { keyword, key, image, username, accountname } = props;

    return (
        <Link to={`/profile/${userId}`}>
            <li className="userList" key={key}>
                <BasicProfileImg size="md" src={image} />
                <div className="userInfo">
                    {username.includes(keyword) ? (
                        <p className="username">
                            {username.split(keyword)[0]}
                            <span className="keyword">{keyword}</span>
                            {username.replace(
                                username.split(keyword)[0] + keyword,
                                ''
                            )}
                        </p>
                    ) : (
                        <p className="username">{username}</p>
                    )}
                    {accountname.includes(keyword) ? (
                        <p className="accountname">
                            {accountname.split(keyword)[0]}
                            <span className="keyword">{keyword}</span>
                            {accountname.replace(
                                accountname.split(keyword)[0] + keyword,
                                ''
                            )}
                        </p>
                    ) : (
                        <p className="accountname">{accountname}</p>
                    )}
                </div>
            </li>
        </Link>
    );
}
export default UserList;
