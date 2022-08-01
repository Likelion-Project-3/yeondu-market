import { useState, useEffect } from "react";
import axios from "axios";
import BasicProfileImg from "../common/BasicProfileImg";
// import UploadFileBtn from "../button/UploadFileBtn";
import { BASE_URL } from "../../components/constants/baseUrl";
import "./ProfileForm.css";

function ProfileForm(props) {
    const {
        input,
        setInput,
        success,
        setSuccess,
        controlAccountname,
        passedUsername,
        setPassedUsername,
        fileImage,
        setFileImage,
        saveCheck,
    } = props;
    const [usernameError, setUsernameError] = useState("");
    const [accountnameError, setAccountnameError] = useState("");
    const [passedAccountname, setPassedAccountname] = useState(false);

    // console.log(controlAccountname);

    const handleChangeInput = (e) => {
        const { value, name } = e.target;
        setInput({ ...input, [name]: value });
    };

    useEffect(() => {
        setUsernameError();
    }, [input.username]);

    useEffect(() => {
        setAccountnameError();
    }, [input.accountname]);

    const handleUsername = () => {
        console.log("검사해볼게");
        if (!input.username) {
            setUsernameError("* 사용자 이름은 필수 입력사항 입니다.");
            return setPassedUsername(false);
        } else if (input.username.length < 2 || input.username.length > 10) {
            setUsernameError("* 사용자 이름은 2~10자 이내여야 합니다.");
            return setPassedUsername(false);
        } else {
            setPassedUsername(true);
        }
    };

    useEffect(() => {
        if (saveCheck === true) {
            handleUsername();
        }
    }, [saveCheck]);

    const handleAccountname = async () => {
        try {
            const regex = /^[-._a-z0-9]+$/gi;

            if (!input.accountname) {
                setAccountnameError("* 계정ID는 필수 입력사항 입니다.");
                return setPassedAccountname(false);
            } else if (!regex.test(input.accountname)) {
                setAccountnameError(
                    "* 영문, 숫자, 밑줄, 마침표만 사용할 수 있습니다."
                );
                return setPassedAccountname(false);
            }

            const response = await axios.post(
                BASE_URL + "/user/accountnamevalid",
                {
                    user: {
                        accountname: input.accountname,
                    },
                }
            );
            console.log(response);

            if (response.data.message === "이미 가입된 계정ID 입니다.") {
                setAccountnameError(`* ${response.data.message}`);
                setPassedAccountname(false);
            } else if (response.data.message === "사용 가능한 계정ID 입니다.") {
                setPassedAccountname(true);
            }
        } catch (err) {
            console.error(err);
        }
    };

    //프로필 이미지 바꿔주기
    const handleUploadProfileImg = async (e) => {
        e.preventDefault();

        let formData = new FormData();
        console.log(e.target.files[0]);
        formData.append("image", e.target.files[0]);
        try {
            const response = await axios(BASE_URL + "/image/uploadfile", {
                method: "POST",
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                data: formData,
            });
            console.log(response);
            setFileImage(response.data.filename);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        passedUsername && passedAccountname
            ? setSuccess(true)
            : setSuccess(false);
    });

    return (
        <>
            <div className="profileImgSetting">
                <BasicProfileImg
                    size="lg"
                    src={
                        (fileImage
                            ? BASE_URL + "/" + fileImage
                            : input.profileImg) ||
                        (input.profileImg
                            ? input.profileImg
                            : "http://146.56.183.55:5050/Ellipse.png")
                    }
                />
                {/* <UploadFileBtn
                    forAndId="uploadProfile"
                    type="green36"
                    position="absolute"
                    bottom="58px"
                    right="5px"
                /> */}
                <label
                    htmlFor="uploadProfile"
                    className="UploadFileLabel green36"
                    style={{
                        right: "5px",
                        bottom: "58px",
                        position: "absolute",
                    }}
                />
                <input
                    type="file"
                    id="uploadProfile"
                    accept="image/*"
                    onChange={handleUploadProfileImg}
                />
            </div>
            <div className="wrapInput">
                <label htmlFor="">사용자 이름</label>
                <input
                    id=""
                    type="text"
                    name="username"
                    value={input.username}
                    onChange={handleChangeInput}
                    onBlur={handleUsername}
                    placeholder="2~10자 이내여야 합니다."
                    // maxLength="10"
                />
                <strong className="cautionText">{usernameError}</strong>
            </div>
            <div className="wrapInput">
                <label htmlFor="accountname">계정 ID</label>
                <input
                    id="accountname"
                    type="text"
                    name="accountname"
                    disabled={controlAccountname ? false : true}
                    className={controlAccountname ? "" : "disabled"}
                    value={input.accountname}
                    onChange={handleChangeInput}
                    onBlur={controlAccountname ? handleAccountname : null}
                    placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
                />
                <strong className="cautionText">{accountnameError}</strong>
            </div>
            <div className="wrapInput">
                <label htmlFor="">소개</label>
                <input
                    id=""
                    type="text"
                    name="intro"
                    value={input.intro}
                    onChange={handleChangeInput}
                    placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
                />
            </div>
        </>
    );
}
export default ProfileForm;
