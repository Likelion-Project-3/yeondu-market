import { useState } from "react";
import { Link } from "react-router-dom";
import "../pages/style/SetProfile.css";
import ProfileForm from "../components/profile/ProfileForm";
import axios from "axios";
import { BASE_URL } from "../components/constants/baseUrl";

function SetProfile(props) {
    const [input, setInput] = useState({
        username: '',
        accountname: '',
        intro: '',
        profileImg: '',
    });

    const [success, setSuccess] = useState(false);
    
    console.log(input.profileImg);
    console.log(props.input.email);

    const postUserData = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(BASE_URL + '/user', {
                "user": {
                    "username": input.username,
                    "email": props.input.email,
                    "password": props.input.password,
                    "accountname": input.accountname,
                    "intro": input.intro,
                    "image": input.profileImg
                },
            });
            console.log(response);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <main className="setProfileWrap">
            <h1>프로필 설정</h1>
            <p>나중에 언제든지 변경할 수 있습니다.</p>
            <form onSubmit={postUserData}>
                <ProfileForm setInput={setInput} input={input} success={success} setSuccess={setSuccess} />
                <Link to="/home" className={`goFeedBtn ${success ? 'on' : ''}`}>연두마켓 시작하기</Link>
            </form>
        </main>
    );
}
export default SetProfile;