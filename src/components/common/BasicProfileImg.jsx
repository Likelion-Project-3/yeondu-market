import "./BasicProfileImg.css";
import BasicProfile from "../../assets/basic-profile-img.svg";

function BasicProfileImg(props) {
    return (
        <img
            src={BasicProfile}
            alt=""
            className={`basicProfileImg ${props.size}`}
        />
    );
}
export default BasicProfileImg;