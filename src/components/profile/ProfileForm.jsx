import "./ProfileForm.css";
import BasicProfileImg from "../common/BasicProfileImg";
import UploadFileBtn from "../button/UploadFileBtn";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../components/constants/baseUrl";
import BasicProfile from "../../assets/basic-profile-img.svg";
import axios from "axios";

function ProfileForm() {
    const initialInput = { username: '', accountname: '', intro: '' };
    const [input, setInput] = useState(initialInput);
    const [usernameError, setUsernameError] = useState('')
    const [accountnameError, setAccountnameError] = useState('');

    const [fileName, setFileName] = useState('');

    const handleChange = (e) => {
        const { value, name } = e.target;
        setInput({ ...input, [name]: value })
    };

    useEffect(() => {
        setUsernameError();
    }, [input.username]);

    useEffect(() => {
        setAccountnameError();
    }, [input.accountname]);

    const handleBlurUsername = () => {
        if (!input.username) {
            setUsernameError("* 사용자 이름은 필수 입력사항 입니다.");
        } else if (input.username.length < 2 || input.username.length > 10) {
            setUsernameError("* 사용자 이름은 2~10자 이내여야 합니다.");
        } else {
            setUsernameError();
        }
    };

    const handleBlurAccountname = async () => {
        try {
            const regex = /^(?=.*[a-z0-9])[a-z0-9]{2,16}$/; //수정 예정

            if (!input.accountname) {
                return setAccountnameError("* 계정ID는 필수 입력사항 입니다.");
            } else if (!regex.test(input.accountname)) {
                return setAccountnameError("* 영문, 숫자, 밑줄, 마침표만 사용할 수 있습니다.")
            }
            const response = await axios.post(BASE_URL + '/user/accountnamevalid', {
                "user": {
                    "accountname": input.accountname,
                },
            });
            console.log(response);

            if (response.data.message === "이미 가입된 계정ID 입니다.") {
                setAccountnameError(`* ${response.data.message}`)
            } else if (response.data.message === "사용 가능한 계정ID 입니다.") {
                //success~!
            }

        } catch (err) {
            console.error(err);
        }
    };

    const handleUploadProfileImg = async (e) => {
        e.preventDefault();

        let formData = new FormData();
        console.log(e.target.files[0]);
        formData.append('image', e.target.files[0]);

        try {
            const response = await axios(BASE_URL + '/image/uploadfile', {
                method: "POST",
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                data: formData,
            });
        console.log(response);

        setFileName(response.data.filename);

        } catch (err) {
            console.log(err);
        }
    };

    return (
        <form className="profileForm">
            <div className="profileImgSetting">
                <BasicProfileImg 
                size="lg"
                src={!fileName ? BasicProfile : BASE_URL + '/' + fileName}
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
                    onChange={handleUploadProfileImg} />
            </div>
            <div className="wrapInput">
                <label htmlFor="">사용자 이름</label>
                <input
                    id=""
                    type="text"
                    name="username"
                    onChange={handleChange}
                    onBlur={handleBlurUsername}
                    placeholder="2~10자 이내여야 합니다."
                // maxLength="10"
                />
                <strong className="cautionText">
                    {usernameError}
                </strong>
            </div>
            <div className="wrapInput">
                <label htmlFor="">계정 ID</label>
                <input
                    id=""
                    type="text"
                    name="accountname"
                    value={input.accountname}
                    onChange={handleChange}
                    onBlur={handleBlurAccountname}
                    placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
                />
                <strong className="cautionText">
                    {accountnameError}
                </strong>
            </div>
            <div className="wrapInput">
                <label htmlFor="">소개</label>
                <input
                    id=""
                    type="text"
                    onChange={handleChange}
                    placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
                />
            </div>
        </form>
    );
}
export default ProfileForm;