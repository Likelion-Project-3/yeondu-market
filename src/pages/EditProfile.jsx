import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../components/constants/baseUrl";
import ProfileForm from "../components/profile/ProfileForm";
import TopMenuComponent from "../components/common/TopMenuComponent";
import { UserContext } from "../context/UserContext";
import "../pages/style/EditProfile.css";

function EditProfile(props) {
    const [input, setInput] = useState({
        username: "",
        accountname: "",
        intro: "",
        profileImg: "",
    });

    const [success, setSuccess] = useState(false);
    const [passedUsername, setPassedUsername] = useState(true);
    const [fileImage, setFileImage] = useState("");
    const history = useHistory();

    const controlAccountname = false;
    const { token } = useContext(UserContext);

    useEffect(() => {
        const getUserInfo = async () => {
            try {
                const response = await axios.get(BASE_URL + "/user/myinfo", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                const getData = response.data.user;

                setInput({
                    username: getData.username,
                    accountname: getData.accountname,
                    intro: getData.intro,
                    profileImg: getData.image,
                });
            } catch (err) {
                console.error(err);
            }
        };
        getUserInfo();
    }, []);

    const userImage = fileImage ? BASE_URL + "/" + fileImage : input.profileImg;

    const handelEditProfile = async (e) => {
        e.preventDefault();
        const userInfo = {
            user: {
                username: input.username,
                accountname: input.accountname,
                intro: input.intro,
                image: userImage,
            },
        };
        try {
            const response = await axios.put(BASE_URL + "/user", userInfo, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-type": "application/json",
                },
            });
            history.push(`/myprofile/${input.accountname}`);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <TopMenuComponent
                topclassName="topBasicNav"
                handlerRightBtn={handelEditProfile}
                disabled={passedUsername ? false : true}
                type="submit"
                rightclassName={`saveBtn ${passedUsername ? "on" : ""}`}
                inputtype="notext"
                title="저장"
            />
            <main className="editProfileMain">
                <div className="editProfileWrap">
                    <form className="profileForm">
                        <ProfileForm
                            setInput={setInput}
                            input={input}
                            setSuccess={setSuccess}
                            controlAccountname={controlAccountname}
                            passedUsername={passedUsername}
                            setPassedUsername={setPassedUsername}
                            fileImage={fileImage}
                            setFileImage={setFileImage}
                        />
                    </form>
                </div>
            </main>
        </>
    );
}
export default EditProfile;
