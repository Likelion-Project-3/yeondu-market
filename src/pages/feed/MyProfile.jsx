import TopBasicNav from "../../components/TopBasicNav";
import "./MyProfile.css";
import ProfileInfo from "../../components/profile/ProfileInfo";

export default function MyProfile() {
    return (
        <div className="profileWrap">
            <TopBasicNav />
            <ProfileInfo />
        </div>
    );
}