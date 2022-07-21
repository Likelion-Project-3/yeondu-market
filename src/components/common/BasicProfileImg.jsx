import "./BasicProfileImg.css";
// import BasicProfile from "../../assets/basic-profile-img.svg";

function BasicProfileImg(props) {
    return (
        <img
            src={props.src}
            alt="프로필 이미지"
            className={`basicProfileImg ${props.size}`}
        />
    );
}
export default BasicProfileImg;