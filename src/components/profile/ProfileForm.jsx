import "./ProfileForm.css";
import BasicProfileImg from "../BasicProfileImg";
import UploadFileBtn from "../UploadFileBtn";
export default function ProfileForm() {
    return (
        <form className="profileForm">
            <div className="profileImgSetting">
                <BasicProfileImg size="lg" />
                <UploadFileBtn 
                forAndId="uploadProfile" 
                type="green36" 
                position="absolute" 
                bottom="58px"
                right="5px"
                 />
            </div>
            <div className="wrapInput">
                <label for="">사용자 이름</label>
                <input
                    type="text"
                    placeholder="2~10자 이내여야 합니다."
                    maxLength="10"
                />
            </div>
            <div className="wrapInput">
                <label for="">계정 ID</label>
                <input
                    type="text"
                    placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
                />
                <strong className="cautionText">
                    *영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.
                </strong>
                <strong className="cautionText">
                    *이미 사용 중인 ID입니다.
                </strong>
            </div>
            <div className="wrapInput">
                <label for="">소개</label>
                <input
                    type="text"
                    placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
                />
            </div>
        </form>
    );
}
