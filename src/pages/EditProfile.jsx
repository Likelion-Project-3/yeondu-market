import "../pages/style/EditProfile.css";
import { useState } from "react";
import ProfileForm from "../components/profile/ProfileForm";
import TopMenuComponent from "../components/common/TopMenuComponent";
import axios from "axios";
import { BASE_URL } from "../components/constants/baseUrl";
import { useEffect } from "react";

function EditProfile(props) {
    const [input, setInput] = useState({
        username: "",
        accountname: "",
        intro: "",
        profileImg: "",
    });

    const [success, setSuccess] = useState(false);
    const [passedUsername, setPassedUsername] = useState(false);
    const [fileImage, setFileImage] = useState("");

    const controlAccountname = false;

    const token = localStorage.getItem("token");

    useEffect(() => {
        const getUserInfo = async () => {
            try {
                const response = await axios.get(BASE_URL + "/user/myinfo", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                console.log(response);

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
    console.log(userImage);

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
            console.log(response);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <TopMenuComponent
                topclassName="topBasicNav"
                handlerRightBtn={handelEditProfile}
                // disabled={passedUsername? false : true}
                type="submit"
                rightclassName="saveBtn on"
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
