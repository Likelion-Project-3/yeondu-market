import defaultProfile from "../../assets/basic-profile-pea.png";
import "./BasicProfileImg.css";

function BasicProfileImg(props) {
    const onErrorImg = (e) => {
        e.target.src = defaultProfile;
    };
    
    return (
        <div className="profileImg">
            <img
                src={props.src}
                alt="프로필 이미지"
                className={`basicProfileImg ${props.size}`}
                onError={onErrorImg}
            />
        </div>
    );
}
export default BasicProfileImg;