import "../pages/style/EditProfile.css";
import { useHistory } from "react-router-dom";
import ProfileForm from "../components/profile/ProfileForm";

function EditProfile() {
    let history = useHistory();

    return (
        <>
        <TopMenuComponent topclassName="topBasicNav" rightclassName="saveBtn" title="저장"/>
            <main className="editProfileWrap">
                <ProfileForm />
            </main>
        </>
    );
}
export default EditProfile;