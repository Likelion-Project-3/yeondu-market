import "../pages/style/EditProfile.css";
// import { useHistory } from "react-router-dom";
import { useState } from "react";
import ProfileForm from "../components/profile/ProfileForm";
import TopMenuComponent from "../components/common/TopMenuComponent";
import axios from "axios";
// import BasicProfile from "../../assets/basic-profile-img.svg";
import { BASE_URL } from "../components/constants/baseUrl";
import { useEffect } from "react";

function EditProfile(props) {
    // let history = useHistory();

    const [input, setInput] = useState({
        username: "",
        accountname: "",
        intro: "",
        profileImg: "",
    });

    const [success, setSuccess] = useState(false);
    const [passedUsername, setPassedUsername] = useState(false);

    const controlAccountname = false;

    const token = localStorage.getItem("token");

    useEffect(()=> {
        const getUserInfo = async() => {
            try {
                const response = await axios.get(BASE_URL + "/user/myinfo", 
                {
                    "headers": {
                        "Authorization" : `Bearer ${token}`,
                    },
                });
                console.log(response);
                console.log(response.data.user.image);

                const getData = response.data.user;
                
                setInput({
                    username: getData.username,
                    accountname: getData.accountname,
                    intro: getData.intro,
                    profileImg: getData.image
                });
            } catch(err) {
                console.error(err);
            }
        };
        getUserInfo();
    }, [])

    const handelEditProfile = async(e) => {
        e.preventDefault();
        const userInfo = {
            "user": {
                "username": input.username,
                "accountname": input.accountname,
                "intro": input.intro,
                "image": input.profileImg
            }
        };
        try {
            const response = await axios.put(BASE_URL + "/user", userInfo, {
                "headers": {
                    "Authorization": `Bearer ${token}`,
                    "Content-type": "application/json",
                },
            });
            console.log(response);
        } catch (err) {
            console.error(err);
        }
    };

    console.log(passedUsername);
    console.log(input.profileImg);

    return (
        <>
        <TopMenuComponent 
        topclassName="topBasicNav"
        handlerRightBtn={handelEditProfile} 
        disabled={passedUsername? false : true}
        type="submit"
        rightclassName={`saveBtn ${passedUsername ? 'on' : ''}`}
        inputtype="notext" title="저장" 
         />
            <main className="editProfileWrap">
                    <ProfileForm 
                    setInput={setInput} 
                    input={input} 
                    // success={success} 
                    setSuccess={setSuccess} 
                    controlAccountname={controlAccountname}
                    passedUsername={passedUsername}
                    setPassedUsername={setPassedUsername}
                     />
            </main>
        </>
    );
}
export default EditProfile;