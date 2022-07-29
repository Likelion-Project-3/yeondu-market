import "./BasicProfileImg.css";
// import BasicProfile from "../../assets/basic-profile-img.svg";

function BasicProfileImg(props) {
    return (
        <div className="profileImg">
            <img
                src={props.src}
                alt="프로필 이미지"
                className={`basicProfileImg ${props.size}`}
            />
        </div>
    );
}
export default BasicProfileImg;
